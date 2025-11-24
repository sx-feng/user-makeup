<template>
  <div class="detail" v-if="detail">

    <!-- 大背景图 -->
    <div class="header-bg" :style="{ backgroundImage: 'url(' + detail.cover + ')' }">
      <button class="back-btn" @click="$router.back()">
        <img src="/icons/返回.png" />
      </button>
    </div>

    <!-- 白色信息卡片（悬浮在背景图下） -->
  <!-- 大背景图区域 -->
<div class="header-section" :style="{ backgroundImage: 'url(' + detail.background + ')' }">

  <!-- 返回按钮 -->
  <button class="back-btn" @click="$router.back()">
    <img src="/icons/返回.png" />
  </button>

  <!-- 左上角头像 + 信息区 -->
  <div class="profile-wrap">
    <img :src="detail.avatar" class="avatar" />

    <div class="info-box">
      <div class="name">{{ detail.name }}</div>
      <div class="sub">评分 {{ detail.score }} · {{ detail.comments }} 条评价</div>
      <div class="sub">起价 ￥{{ detail.price }}</div>
    </div>

    <div class="btn-right">
      <button
  class="btn-follow"
  :class="{ active: detail.follow }"
  @click="toggleFollow"
>
  {{ detail.follow ? '已关注' : '关注' }}
</button>
<button class="btn-msg" @click="goChat">私信</button>

    </div>
  </div>

</div>


    <!-- 作品列表 -->
    <h3 class="section-title">作品（共 {{ works.length }} 个）</h3>
    <div class="works">
      <div v-for="(w, index) in works" :key="index" class="work-item">
        <img :src="w" class="work-img" />
      </div>
    </div>

  </div>

  <div v-else class="empty">未找到该化妆师</div>
</template>


<script>
import avatar1 from "@/assets/avatar1.png";
import avatar2 from "@/assets/avatar2.png";
import avatar3 from "@/assets/avatar3.png";


export default {
  name: "MakeupDetail",

  data() {
    return {
      tab: "notes",
      allMakeup: [
        {
          id: 1,
          cover: "/icons/image1.png",   // ⭐ 封面图
           background: "/icons/bg1.png",
          avatar: avatar1,
          name: "喜羊羊",
          score: 9.9,
          comments: 12000,
          price: 1688,
          follow: false 
        },
        {
          id: 2,
          cover: "/icons/image2.png",
           background: "/icons/bg2.png",
          avatar: avatar2,
          name: "美羊羊",
          score: 9.6,
          comments: 8600,
          price: 1299,
          follow: false 
        },
        {
          id: 3,
          cover: "/icons/image3.png",
           background: "/icons/bg3.png",
          avatar: avatar3,
          name: "美羊羊",
          score: 9.6,
          comments: 8600,
          price: 999,
          follow: false 
        }
      ]
    };
  },

  computed: {
    detail() {
      const id = Number(this.$route.params.id);
      return this.allMakeup.find(i => i.id === id) || null;
    },

    // ⭐ 自动生成 20 个作品（模拟真实接口）
    works() {
      if (!this.detail) return [];
      return Array(20).fill(this.detail.cover);
    }
  },
  methods: {
  toggleFollow() {
    this.detail.follow = !this.detail.follow;
  },
    goChat() {
    this.$router.push(`/chat/${this.detail.id}`);
  }
}

};
</script>

<style scoped>
.detail {
  background: #f7f4f4;
  min-height: 100vh;
}

/* 顶部背景大图 */
.header-section {
  width: 100%;
  height: 9rem;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  position: relative;
  padding: 1rem;
  box-sizing: border-box;
 
}

/* 返回按钮 */
.back-btn {
  position: absolute;
  top: 0.7rem;
  left: 0.7rem;
  border: none;
  background: rgba(255, 255, 255, 0.7);
  border-radius: 50%;
  width: 1.6rem;
  height: 1.6rem;
  display: flex;
  justify-content: center;
  align-items: center;
}

.back-btn img {
  width: 0.9rem;
  height: 0.9rem;
}

/* 左上角 头像 + 信息 + 按钮 */
.profile-wrap {
  position: absolute;
  bottom: 1rem;
  left: 1rem;
  right: 1rem;
  display: flex;
  align-items: center;
}

/* 头像 */
.avatar {
  width: 3.8rem;
  height: 3.8rem;
  border-radius: 50%;
  border: 2px solid white;
}

/* 名字 + 分数 */
.info-box {
  margin-left: 0.8rem;
  flex: 1;
}

.info-box .name {
  font-size: 1.1rem;
  color: #fff;
  font-weight: bold;
}

.info-box .sub {
  color: #f5f5f5;
  font-size: 0.75rem;
}

/* 右上角按钮 */
.btn-right {
  display: flex;
flex-direction: row; 
  gap: 0.3rem;
}

.btn-follow {
  background: #ff4b7d;
  border: none;
  color: #fff;
  padding: 0.3rem 0.7rem;
  border-radius: 0.6rem;
  font-size: 0.75rem;
  transition: 0.2s;
}

/* ⭐ 已关注 状态 */
.btn-follow.active {
   background: rgba(255, 255, 255, 0.062);    /* 灰色 */
  color: #ffffff;
  opacity: 0.4;  
  border: 1px solid #f5f5f5;
}


.btn-msg {
  background: rgba(255, 255, 255, 0.9);
  border: none;
  color: #333;
  padding: 0.3rem 0.6rem;
  border-radius: 0.6rem;
  font-size: 0.75rem;
}

/* 作品区域 */
.section-title {
  margin: 1rem;
  font-size: 0.9rem;
  font-weight: bold;
}

.works {
  margin: 1rem;
  display: flex;
  flex-wrap: wrap;
  gap: 0.4rem;
}

.work-item {
  width: 48%;
  height: 50%;
}

.work-img {
  width: 100%;
  border-radius: 0.5rem;
}

</style>
