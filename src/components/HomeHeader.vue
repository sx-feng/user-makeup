<template>
  <div class="home-header">
    <!-- 左侧标题 -->


    <!-- 中间搜索框 -->
   <div class="search-box">
  <img class="search-icon" src="/icons/搜索.png" />
   <input
        type="text"
        :value="modelValue"
        @input="onInput"
        @keyup.enter="emitSearch"
        placeholder="搜索"
      />
      <!-- 右侧筛选 -->
        <img
        class="bell"
        src="/icons/筛选.png"
        @click="$emit('open-filter')"
      /></div>
</div>
</template>

<script>
export default {
  name: 'HomeHeader',
   props: {
    modelValue: {
      type: String,
      default: ""
    }
  },
   emits: ["update:modelValue", "search", "open-filter"],
   methods: {
    onInput(e) {
      this.$emit("update:modelValue", e.target.value);
    },
    emitSearch() {
      // 把当前关键字传给父组件
      this.$emit("search", this.modelValue);
    }
  }
}
</script>

<style scoped>
.home-header {
  padding: 0.6rem 1rem;   
  display: flex;
  align-items: center;
  background: #fff;
  /* border-bottom: 0.0625rem solid #eee; */
}

.title {
  font-size: 1.05rem;   /* 自适应字体 */
  font-weight: 700;
  margin-right: 0.6rem;
  white-space: nowrap;
}

.search-box {
  flex: 1;
  display: flex;
  align-items: center;
  padding: 0.4rem 0.8rem;
  border-radius:0.5rem;
  background: #f5f5f5;
  border: 0.0625rem solid #ffffff;
}

.search-icon {
  margin-right: 0.4rem;
  color: #999;
  font-size: 0.9rem;
}

.search-box input {
  border: none;
  outline: none;
  background: none;
  width: 100%;
  font-size: 0.9rem;
  color: #333;
}

.bell {
  width: 1.3rem;
  height: 1.3rem;
  margin-left: 0.6rem;
  font-size: 1.3rem;
  color: #666;
}
.search-icon {
  width: 1.1rem;
  height: 1.1rem;
  margin-right: 0.4rem;
  object-fit: contain;
  display: block;
}

</style>
