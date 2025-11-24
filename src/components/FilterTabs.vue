<template>
  <div class="filter-tabs">
    <span
      v-for="item in tabs"
      :key="item.value"
      class="tab-item"
      :class="{ active: modelValue === item.value }"
      @click="onSelect(item.value)"
    >
      {{ item.label }}
    </span>
  </div>
</template>

<script>
export default {
  name: "FilterTabs",
  props: {
    modelValue: { type: String, required: true }
  },
  emits: ["update:modelValue"],
  data() {
    return {
     tabs: [
  { label: "公司推荐", value: "recommend" },
  { label: "距离最近", value: "near" },    
  { label: "评分最高", value: "score" },
  { label: "价格最优", value: "price" }
]

    };
  },
  methods: {
    onSelect(val) {
      this.$emit("update:modelValue", val);
    }
  }
};
</script>

<style scoped>
.filter-tabs {
  display: flex;
  gap: 0.5rem;       /* 按钮间距 */
  padding: 0.6rem 1rem;
  background: #fff;
  border-bottom: 0.0625rem solid #eee;
}

/* 椭圆按钮基础样式 */
.tab-item {
  padding: 0.35rem 0.8rem;
  font-size: 0.8rem;
  border-radius: 999px;       /* ← 关键：变成椭圆 */
  background: #f7f7f7;
  color: #666;
  border: 1px solid #ddd;
  cursor: pointer;
  white-space: nowrap;        /* 文字不换行 */
  transition: all 0.2s ease;
}

/* 选中高亮（粉色主题） */
.tab-item.active {
  background: #ffe4ef;        /* 粉色淡背景 */
  color: #ff3b6b;             /* 粉色文字 */
  border-color: #ff8db3;
  font-weight: 600;
}

</style>
