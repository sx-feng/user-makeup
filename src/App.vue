<template>
  <router-view />
  <GlobalLoading :visible="loading" />
</template>

<script>
import GlobalLoading from "@/components/GlobalLoading.vue";
import { ref } from "vue"
import router from "@/router"
export default {
  components: { GlobalLoading },

  setup() {
    const loading = ref(false)

    router.beforeEach((to, from, next) => {
      loading.value = true
      next()
    })

    router.afterEach(() => {
      setTimeout(() => {
        loading.value = false
      }, 200)  // 动画时间与组件同步
    })

    return { loading }
  }
}
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
