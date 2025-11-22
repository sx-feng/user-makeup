<template>
  <div class="app">
    <div class="page-wrapper">
      <router-view />
    </div>

    <!-- 用 $route.name 来控制底部高亮 -->
    <BottomNav
      :modelValue="$route.name"
      @update:modelValue="onTabChange"
    />
  </div>
</template>

<script>
import BottomNav from "./components/BottomNav.vue";

export default {
  name: "App",
  components: { BottomNav },

  methods: {
    onTabChange(name) {
      if (name && name !== this.$route.name) {
        this.$router.push({ name });   // 点击底部 tab 时切换路由
      }
    }
  }
};
</script>

<style>
html, body {
  margin: 0;
  padding: 0;
  overflow-x: hidden;
}

.app {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
    background-color: #faf8f8;
}

.page-wrapper {
  flex: 1;
  overflow-y: auto;
  padding-bottom: 4.25rem; /* 给底部导航留空间 */
}
</style>
