<template>
  <div class="hot-wrap">
    <div class="hot-title">热门分类</div>

    <div class="hot-list">
      <div class="hot-item" v-for="(item, i) in list" :key="i">
        <img class="hot-icon" :src="item.icon" :alt="item.label" />
        <div class="hot-label">{{ item.label }}</div>
      </div>
    </div>

    <div class="divider"></div>
  </div>
</template>

<script>
export default {
  name: "HotCategories",
  data() {
    return {
      list: [
        { icon: "/icons/xinniang.png", label: "新娘妆" },
        { icon: "/icons/wutai.png", label: "舞台妆" },
        { icon: "/icons/richang.png", label: "日常妆" },
        { icon: "/icons/xiezhen.png", label: "写真妆" }
      ]
    };
  }
};
</script>

<style scoped>
.hot-wrap {
  padding: 0.75rem 1rem 1rem; /* 自适应 rem */
  background: #fff;
}

/* 标题 */
.hot-title {
  font-size: 1rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
}

/* 图标列表：四个一行 */
.hot-list {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

/* 每个分类 */
.hot-item {
  width: 22%; /* 自动适应四等分 */
  display: flex;
  flex-direction: column;
  align-items: center;
}

/* 分类图标 */
.hot-icon {
  width: 3.2rem;
  height: 3.2rem;
  border-radius: 0.75rem;
  box-shadow: 0 0 0.25rem rgba(0, 0, 0, 0.08);
  background: #fff;
}

/* 分类文字 */
.hot-label {
  margin-top: 0.3rem;
  font-size: 0.8rem;
  color: #333;
}

/* 下方分割线 */
.divider {
  width: 100%;
  height: 1px;
  background: #eee;
  margin-top: 1rem;
}
</style>
