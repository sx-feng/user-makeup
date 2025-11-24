<template>
  <div class="home">

    <!-- 顶部搜索栏 -->
    <HomeHeader v-model="keyword" @search="handleSearch" @open-filter="handleOpenFilter" />

    <!-- 热门分类 -->
    <!-- <CategoryList/> -->
    <!-- 筛选导航（公司推荐、距离最近……） -->
    <FilterTabs v-model="currentSort" />

    <!-- 化妆师列表 -->
    <div class="list">
      <MakeupCard v-for="item in sortedList" :key="item.id" :data="item" />
    </div>
<BottomNav v-model="currentTab" />


  </div>
</template>

<script>
import HomeHeader from "../components/HomeHeader.vue";                                                                                    
import FilterTabs from "../components/FilterTabs.vue";
import MakeupCard from "../components/MakeupCard.vue";
import BottomNav from "../components/BottomNav.vue";
import avatar1 from "@/assets/avatar1.png";
import avatar2 from "@/assets/avatar2.png";
import avatar3 from "@/assets/avatar3.png";
export default {
  name: "HomePage",

  components: {
    HomeHeader,
    FilterTabs,
    MakeupCard,
    BottomNav 

  },

  data() {
    return {
      keyword: "",
      currentSort: "recommend",
      userLocation: null,
      currentTab: "home",

      // ❗ 假数据（你后面可改成 API 数据）
      makeupList: [
        {
          id: 1,
          cover: "/icons/image1.png",
          background: "/icons/bg1.png",
          avatar: avatar1, 
          name: "喜羊羊",
          desc: ["十年经验", "新娘妆达人"],
          score: 9.9,
          comments: 12000,
          status: "online",
          tags: ["新娘妆", "舞台妆", "写真妆"],
          lat: 31.2230,
          lng: 121.4450,
          price: 1688
        },
        {
          id: 2,
          cover: "/icons/image2.png",
           avatar: avatar2, 
          name: "美羊羊",
          desc: ["专业化妆师", "日常妆大师"],
           background: "/icons/bg2.png",
          score: 9.6,
          comments: 8600,
          status: "offline",
          tags: ["日常妆", "舞台妆"],
          lat: 31.2304,
          lng: 121.4737,
          price: 1299
        },
        {
          id: 3,
          cover: "/icons/image3.png",
           background: "/icons/bg3.png",
          avatar: avatar3, 
          name: "美羊羊",
          desc: ["专业化妆师", "日常妆大师"],
          score: 9.6,
          comments: 8600,
          status: "offline",
          tags: ["日常妆", "舞台妆"],
          lat: 31.2350,
          lng: 121.5040,
          price: 999
        },
         {
          id: 4,
          cover: "/icons/image3.png",
           background: "/icons/bg3.png",
          avatar: avatar3, 
          name: "美羊羊",
          desc: ["专业化妆师", "日常妆大师"],
          score: 9.6,
          comments: 8600,
          status: "offline",
          tags: ["日常妆", "舞台妆"],
          lat: 31.2350,
          lng: 121.5040,
          price: 999
        }
      ]
    };
  },
  /* ------------------------ 搜索过滤逻辑 ------------------------ */
  computed: {
    filteredList() {
      const k = this.keyword.trim();
      if (!k) return this.makeupList;

      return this.makeupList.filter(item => {
        return (
          item.name.includes(k) ||
          item.desc.some(d => d.includes(k)) ||
          item.tags.some(t => t.includes(k))
        );
      });
    },
    /** 第二层：根据排序规则排序（包括距离排序） */
    sortedList() {
      let list = [...this.filteredList];

      switch (this.currentSort) {
        case "score":
          return list.sort((a, b) => b.score - a.score);

        case "near":
          // 如果没得到定位，就不排序
          if (!this.userLocation) return list;

          return list
            .map(item => ({
              ...item,
              distance: this.getDistance(
                item.lat,
                item.lng,
                this.userLocation.lat,
                this.userLocation.lng
              )
            }))
            .sort((a, b) => a.distance - b.distance);

        case "price":
          return list.sort((a, b) => {
            const pa = a.price ?? Infinity; // 没填价格的排最后
            const pb = b.price ?? Infinity;
            return pa - pb;
          });

        default:
          return list;
      }
    }
  },

  methods: {
    /** 点击搜索图标 or 回车触发 */
    handleSearch(value) {
      console.log("搜索内容：", value);
    },

    handleOpenFilter() {
      console.log("打开筛选弹窗");
    },
    /** 获取用户定位（用于距离排序） */
    getUserLocation() {
      if (!navigator.geolocation) {
        console.warn("当前设备不支持定位");
        this.useDefaultLocation();
        return;
      }

      navigator.geolocation.getCurrentPosition(
        res => {
          this.userLocation = {
            lat: res.coords.latitude,
            lng: res.coords.longitude
          };
        },
        // eslint-disable-next-line no-unused-vars
        err => {
          console.warn("定位失败，使用默认位置");
          this.useDefaultLocation();
        }
      );
    },
    useDefaultLocation() {
      this.userLocation = {
        lat: 31.2304,
        lng: 121.4737
      };
    },

    /** ⭐ 两点距离计算（哈弗公式） */
    getDistance(lat1, lng1, lat2, lng2) {
      const radLat1 = (lat1 * Math.PI) / 180;
      const radLat2 = (lat2 * Math.PI) / 180;
      const a = radLat1 - radLat2;
      const b = ((lng1 - lng2) * Math.PI) / 180;

      const s =
        2 *
        Math.asin(
          Math.sqrt(
            Math.pow(Math.sin(a / 2), 2) +
            Math.cos(radLat1) *
            Math.cos(radLat2) *
            Math.pow(Math.sin(b / 2), 2)
          )
        );

      return s * 6378137; // 返回单位：米
    },


  },

  /** 页面加载时获取用户定位 */
  mounted() {
    this.getUserLocation();
  }
};

</script>

<style scoped>
.home {
  padding-bottom: 0.8rem;
  /* 留空间给底部导航栏 */
  background-color: #ffffff;
}

.list {
  margin-top: 0.1rem;
}
</style>
