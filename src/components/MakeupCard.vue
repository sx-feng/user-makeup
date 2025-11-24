<template>
  <div class="card" @click="goDetail">
    <!-- 左侧头像（固定宽高） -->
  <div class="avatar-wrap">
  <img :src="data.cover" class="avatar" />
  <div class="work-overlay">
    查看{{ data.worksCount || 100 }}个作品 >
  </div>
</div>

    <!-- 右侧内容 -->
    <div class="info">

      <!-- 名称 + 头像在线状态同行 -->
      <div class="row-top">
        <!-- 左侧头像 -->
        <div class="heards"><img :src="data.avatar" class="heardss" /></div>
        <!-- 右侧描述 -->
        <div>
          <div class="name">{{ data.name }}</div>
          <!-- 描述 -->
          <div class="desc-tags">
  <span v-for="(d, index) in data.desc" 
        :key="index" 
        class="desc-tag">
    {{ d }}
  </span>
</div>

        </div>

        <!-- 在线状态放在头像正下方的一列，但仍保持对齐方式 -->
        <!-- <div class="state">
          <span class="state-tag" :class="data.status === 'online' ? 'green' : 'gray'">
            {{ data.status === 'online' ? '在线' : '离线' }}
          </span>
        </div> -->
      </div>
      <!-- 评分 -->
    <div class="rate">
  <img v-for="i in 5"
       :key="i"
       class="star-img"
       src="/icons/zs星星.png" />

  <span class="score">{{ data.score }}</span>
  &nbsp; &nbsp; &nbsp;{{ data.comments }}条评价
</div>


      <!-- 标签（新娘妆、写真妆等） -->
      <div class="tags">
        <span v-for="(tag, index) in data.tags" :key="index" class="tag" :class="tagClass(tag)">
          {{ tag }}
        </span>
        <!-- 距离显示（仅当有距离字段时出现） -->


      </div>
      <div class="price" v-if="data.price">
  ￥{{ data.price }}
  <span class="distance" v-if="data.distance">
  <img class="loc-icon" src="@/assets/定位.png" />
  {{ formatDistance(data.distance) }}
  
</span>
</div>


      <!-- 右下角按钮 -->
      <div class="btns">
        <button class="btn-chat">咨询</button>
        <button class="btn-order">下单</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "MakeupCard",
  props: {
    data: { type: Object, required: true }
  },
  methods: {
    /** 根据 tag 返回不同颜色 */
    tagClass(tag) {
      switch (tag) {
        case "新娘妆": return "pink";
        case "舞台妆": return "blue";
        case "写真妆": return "purple";
        case "日常妆": return "yellow";
        default: return "";
      }
    },    
   
  formatDistance(d) {
    if (!d) return "";
    // 大于 1000 米转 km
    return d > 1000 ? (d / 1000).toFixed(1) + " km" : Math.round(d) + " m";
  },
   goDetail() {
    this.$router.push({
      name: "makeupDetail",
      params: { id: this.data.id }
    });
  }
}

  
};
</script>

<style scoped>
/* —— 外层卡片 —— */
/* --- 卡片整体 --- */
.card {
   position: relative;
  background: #fff;
  width: 90%;
  margin: 1rem auto;
  border-radius: 0.9rem;
  display: flex;
  box-shadow: 0 0.15rem 0.4rem rgba(0, 0, 0, 0.05);
}

/* --- 左侧头像整体块 --- */
.avatar-wrap {
  width: 6.2rem;
  height: 9.1rem;
  border-radius: 0.9rem 0 0 0.9rem;
  overflow: hidden;
  background: #f7f4f5;
  flex-shrink: 0;
  margin-right: 1rem;
  border: 1px solid #d6d6d6;
    position: relative;
}
/* 底部“查看作品”遮罩条 */
.work-overlay {
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  padding: 0.25rem 0;
  background: rgba(238, 232, 232, 0.35);  /* 半透明黑 */
  color: #fff;
  font-size: 0.65rem;
  text-align: center;
  white-space: nowrap;
}

/* 头像填满外框 */
.avatar {
  width: 100%;
  height: 100%;
  object-fit: cover;
  /* 关键：填满裁剪 */
}

/* --- 右侧内容 --- */
.info {
  flex: 1;
}

/* 名称 + 在线状态 */
.row-top {
  margin-top: 0.5rem;
  display: flex;
  align-items: center;
  margin-bottom: 0.25rem;
}

.name {
  font-size: 0.9rem;
  font-weight: bold;
  margin-right: 0.5rem;
}

.state-tag {
  padding: 0.15rem 0.5rem;
  border-radius: 1rem;
  font-size: 0.75rem;
}

.green {
  background: #e6f8e6;
  color: #34b24a;
}

.gray {
  background: #eee;
  color: #999;
}
/* 描述标签容器 */
.desc-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.3rem;
  margin: 0.2rem 0 0.35rem 0;
}

/* 描述标签（椭圆气泡） */
.desc-tag {
  padding: 0.18rem 0.5rem;
  font-size: 0.6rem;
  border-radius: 1rem;
  background: #ffeaf2;   /* 粉色柔和背景 */
  color: #ff4177;        /* 粉色文本 */
  display: inline-block;
  white-space: nowrap;
}

/* 描述 */
.desc {
  color: #666;
  margin-bottom: 0.35rem;
  font-size: 0.8rem;
}

/* 评分 */
.rate {
  display: flex;
  align-items: center;   /* ⬅ 星星 + 文字垂直居中 */
  font-size: 0.6rem;
}

.score {
   color: #ff9b00;
  font-weight: bold;
  margin-left: 0.25rem;
}
.tag {
  padding: 0.15rem 0.45rem;
  font-size: 0.55rem;
  border-radius: 1rem;
  margin-right: 0.3rem;
  margin-bottom: 0.15rem;
}

/* 标签颜色 */
.pink {
  background: #ffe5f0;
  color: #ff3b6b;
}

.blue {
  background: #e5f0ff;
  color: #3f73ff;
}

.purple {
  background: #f0e6ff;
  color: #8b4cff;
}

.yellow {
  background: #fff9d5;
  color: #c9a100;
}

/* 按钮区域 */
.btns {
 
  position: absolute;
  right: 0.8rem;    /* 右边距 */
  bottom: 0.7rem;   /* 下边距 */
  display: flex;
  gap: 0.6rem;
  z-index: 10;       /* 确保在内容之上 */
}


/* 咨询按钮（白色+灰边） */
.btn-chat {
  background: #fff;
  border: 1px solid #d0d0d0;
  color: #666;
  padding: 0.2rem 0.8rem;
  border-radius: 1.5rem;
  font-size: 0.65rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.04);
}

/* 预约/下单按钮（粉色风格） */
.btn-order {
  background: linear-gradient(135deg, #ff7ca8 0%, #ff4b7d 100%);
  color: #fff;
  border: none;
  padding: 0.2rem 0.8rem;
  border-radius: 1.5rem;
  font-size: 0.65rem;
  font-weight: bold;
  box-shadow: 0 3px 6px rgba(255, 88, 125, 0.25);
}

/* 按下时小缩放动效 */
.btn-chat:active,
.btn-order:active {
  transform: scale(0.96);
  transition: 0.08s;
}

/* 化妆师头像区域 */
.heards {
  width: 3rem;
  height: 3rem;
  border-radius: 50%;
  background-color: #e4d9d9;
  margin-right: 0.5rem;

}
.star-img {
  width: 0.7rem;
  height: 0.7rem;
  object-fit: contain;
  margin-right: 0.15rem;
  display: inline-block;
  display: block; 
}

.heardss {
  width: 3rem;
  height: 3rem;
  border-radius: 50%;
}
.distance {                                                   
  margin-top: 4px;
  font-size: 0.6rem;
  color: #999;
}

.loc-icon {
  width: 0.8rem;
  height: 0.8rem;
  vertical-align: middle;   /* 图标和文字对齐 */
  opacity: 0.75;            /* 稍微透明一点更                     柔和 */
}
.price {
  margin-bottom: 2rem;
  font-size: 0.7rem;
  font-weight: bold;
  color: #ff4b7d;
}


</style>
