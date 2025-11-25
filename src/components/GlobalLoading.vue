<template>
  <transition name="page-fade">
    <div v-if="visible" class="page-mask"></div>
  </transition>
</template>

<script>
export default {
  name: "PageTransition",

  props: {
    visible: { type: Boolean, required: true }
  }
}
</script>

<style scoped>
.page-mask {
  position: fixed;
  inset: 0;
  background: #fff;
  z-index: 9999;
}

/* 淡出动画 */
.page-fade-enter-active,
.page-fade-leave-active {
  transition: opacity 0.35s ease;
}

.page-fade-enter-from,
.page-fade-leave-to {
  opacity: 0;
}
</style>
