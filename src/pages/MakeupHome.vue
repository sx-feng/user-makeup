<template>
  <div class="home">

    <!-- 顶部搜索栏 -->
    <HomeHeader />

    <!-- 热门分类 -->
    <!-- <CategoryList/> -->

    <!-- 筛选导航（公司推荐、距离最近……） -->
    <FilterTabs v-model="currentSort" />

    <!-- 化妆师列表 -->
    <div class="list">
      <MakeupCard
        v-for="item in sortedList"
        :key="item.id"
        :data="item"
      />
    </div>

  </div>
</template>

<script>
import HomeHeader from "../components/HomeHeader.vue";

import FilterTabs from "../components/FilterTabs.vue";
import MakeupCard from "../components/MakeupCard.vue";


export default {
  name: "HomePage",

  components: {
    HomeHeader,
   
    FilterTabs,
    MakeupCard
  },

  data() {
    return {
      currentSort: "recommend",

      // ❗ 假数据（你后面可改成 API 数据）
      makeupList: [
        {
          id: 1,
          avatar: "/icons/image.png",
          name: "喜羊羊",
          desc: ["十年经验", "新娘妆达人"],
          score: 9.9,
          comments: 12000,
          status: "online",
          tags: ["新娘妆", "舞台妆", "写真妆"]
        },
        {
          id: 2,
          avatar: "/icons/image1.png",
          name: "美羊羊",
          desc: ["专业化妆师",  "日常妆大师"],
          score: 9.6,
          comments: 8600,
          status: "offline",
          tags: ["日常妆", "舞台妆"]
        },
        {
          id: 2,
          avatar: "/icons/image2.png",
          name: "美羊羊",
          desc: ["专业化妆师","日常妆大师"],
          score: 9.6,
          comments: 8600,
          status: "offline",
          tags: ["日常妆", "舞台妆"]
        }
      ]
    };
  },

  computed: {
    sortedList() {
      switch (this.currentSort) {
        case "score":
          return [...this.makeupList].sort((a, b) => b.score - a.score);
        case "near":
          return this.makeupList; // 未来可按距离排序
        case "price":
          return this.makeupList; // 未来按价格排序
        default:
          return this.makeupList;
      }
    }
  }
};
</script>

<style scoped>
.home {
  padding-bottom: 0.8rem; /* 留空间给底部导航栏 */
   background-color: #f7f4f4;
}

.list {
  margin-top: 0.1rem;
}
</style>
