<template>
  <div class="category-bar">

    <div
      v-for="item in list"
      :key="item.value"
      class="cat-item"
      :class="{ active: modelValue === item.value }"
      @click="select(item.value)"
    >
      {{ item.label }}
    </div>

  </div>
</template>

<script>
export default {
  name: "CategorySelector",
  props: {
    modelValue: {
      type: String,
      default: "all"
    }
  },
  emits: ["update:modelValue"],
  data() {
    return {
      list: [
        { label: "全部", value: "all" },
        { label: "婚庆公司", value: "wedding" },
        { label: "化妆师", value: "makeup" }
      ]
    };
  },
  methods: {
    select(v) {
      this.$emit("update:modelValue", v);
    }
  }
};
</script>

<style scoped>
.category-bar {
  display: flex;
  align-items: center;
  padding: 0.4rem 0.6rem;
  gap: 0.6rem;
  background: #fff;
  box-sizing: border-box;
}

.cat-item {
  padding: 0.25rem 0.6rem;
  font-size: 0.85rem;
  color: #555;
  border-radius: 0.5rem;
  background: #f7f7f7;
  cursor: pointer;
  transition: 0.2s;
}

.cat-item.active {
  background: #d7e8ff;
  color: #0a59ff;
  font-weight: 600;
}
</style>
