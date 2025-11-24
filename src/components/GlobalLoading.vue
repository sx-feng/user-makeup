<template>
  <div v-if="visible" class="loading-mask">
    <div class="loading-box">
      <div class="spinner"></div>
      <div class="text">加载中...</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "GlobalLoading",
  data() {
    return {
      visible: false
    };
  },
  methods: {
    show() {
      this.visible = true;
    },
    hide() {
      this.visible = false;
    }
  }
};
</script>

<style scoped>
.loading-mask {
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background: rgba(0,0,0,0.35);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
}

.loading-box {
  background: white;
  padding: 20px 30px;
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.spinner {
  width: 32px;
  height: 32px;
  border: 4px solid #ff88aa;
  border-top-color: transparent;
  border-radius: 50%;
  animation: spin 0.7s linear infinite;
}

.text {
  margin-top: 10px;
  color: #666;
  font-size: 14px;
}

@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}
</style>
