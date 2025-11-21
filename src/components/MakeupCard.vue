<template>
  <div class="card">
    <!-- 左侧头像（固定宽高） -->
    <div class="avatar-wrap">
    <img :src="data.avatar" class="avatar" />
</div> 
    <!-- 右侧内容 -->
    <div class="info">

      <!-- 名称 + 在线状态同行 -->
      <div class="row-top">
        <div class="name">{{ data.name }}</div>

        <!-- 在线状态放在头像正下方的一列，但仍保持对齐方式 -->
        <div class="state">
          <span
            class="state-tag"
            :class="data.status === 'online' ? 'green' : 'gray'"
          >
            {{ data.status === 'online' ? '在线' : '离线' }}
          </span>
        </div>
      </div>

      <!-- 描述 -->
      <div class="desc">{{ data.desc }}</div>

      <!-- 评分 -->
      <div class="rate">
        ⭐⭐⭐⭐⭐ <span class="score">{{ data.score }}</span>
        （{{ data.comments }}条评价）
      </div>

      <!-- 标签（新娘妆、写真妆等） -->
      <div class="tags">
        <span
          v-for="(tag, index) in data.tags"
          :key="index"
          class="tag"
          :class="tagClass(tag)"
        >
          {{ tag }}
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
    }
  }
};
</script>

<style scoped>
/* —— 外层卡片 —— */
.card {
  position: relative;
  background: #fff;
  margin: 1rem auto;
  padding: 0.8rem 0.8rem 3.5rem;
  border-radius: 0.7rem;
  display: flex;
  width: 88%;
  height: 7.5rem;
  box-shadow: 0 0.15rem 0.35rem rgba(0, 0, 0, 0.05);
}

/* —— 头像 —— */
.avatar-wrap {
  width: 6rem;                 /* 整体比头像大一圈 */
  height:8rem;
  background: #f7f4f5;           /* 背景色（淡粉区分） */
  border-radius: 0.8rem;         /* 外框圆角更圆润 */
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 1rem;
}

.avatar {
  width: 5rem;
  height: 7rem;
  border-radius: 0.5rem;         /* 头像圆角 */
  object-fit: cover;             /* 保证图片不变形 */
}


/* —— 行布局（名字 + 状态） —— */
.row-top {
  display: flex;
  align-items: center;
  margin-bottom: 0.25rem;
}

/* 名称 */
.name {
  font-size: 1.05rem;
  font-weight: bold;
  margin-right: 0.5rem;
  white-space: nowrap;
}

/* —— 在线标签 —— */
.state-tag {
  padding: 0.15rem 0.55rem;
  border-radius: 1rem;
  font-size: 0.75rem;
}

.green {
  background: #e6f8e6;
  color: #34b24a;
}

.gray {
  background: #efefef;
  color: #999;
}

/* 描述 */
.desc {
  font-size: 0.9rem;
  color: #777;
  margin-bottom: 0.3rem;
}

/* 评分 */
.rate {
  font-size: 0.9rem;
  margin-bottom: 0.4rem;
}

.score {
  color: #ff9900;
  font-weight: bold;
}

/* —— 标签 —— */
.tags {
  margin-top: 0.2rem;
}

.tag {
  display: inline-block;
  padding: 0.25rem 0.55rem;
  border-radius: 1rem;
  font-size: 0.75rem;
  margin-right: 0.4rem;
  margin-bottom: 0.25rem;
}

/* 四种类型 */
.pink { background: #ffe5f0; color: #ff3b6b; }
.blue { background: #e5f0ff; color: #3f73ff; }
.purple { background: #f0e6ff; color: #8b4cff; }
.yellow { background: #fff9d5; color: #c9a100; }

/* —— 按钮组 —— */
.btns {
  position: absolute;
  right: 0.8rem;
  bottom: 0.8rem;
  display: flex;
  gap: 0.6rem;
}

.btn-chat {
  background: #fff;
  border: 1px solid #aaa;
  padding: 0.3rem 1.1rem;
  border-radius: 1rem;
  font-size: 0.8rem;
}

.btn-order {
  background: #ff3b6b;
  color: #fff;
  border: none;
  padding: 0.3rem 1.1rem;
  border-radius: 1rem;
  font-size: 0.8rem;
}
</style>
