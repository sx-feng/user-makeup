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
        { label: "距离最近", value: "distance" },
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
  justify-content: space-between; /* ⭐ 自动等分布局 */
  padding: 0.6rem 1rem; 
  background: #fff;
  border-bottom: 0.0625rem solid #eee;
}

.tab-item {
  font-size: 0.9rem;  /* 14px -> rem */
  color: #888;
  cursor: pointer;
}

.tab-item.active {
  color: #ff3b6b;
  font-weight: 600;
}
</style>
