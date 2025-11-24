<template>
  <router-view />
  <GlobalLoading ref="loading" />
</template>

<script>
import GlobalLoading from "@/components/GlobalLoading.vue";

export default {
  components: { GlobalLoading },
  mounted() {
    // 挂载全局 loading 供所有页面使用
    this.$loading = this.$refs.loading;
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
    
}

.page-wrapper {
  flex: 1;
  overflow-y: auto;
  padding-bottom: 4.25rem; /* 给底部导航留空间 */
}
</style>
