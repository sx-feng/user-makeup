<template>
  <div class="top-bar">
    <div class="title">消息</div>

    <div class="icons">
      <div class="bell-wrap">
        <img src="/icons/bell.png" class="icon" />
        <span class="dot"></span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "MessageTopBar"
};
</script>

<style scoped>
.top-bar {

  padding: 0.9rem 1rem;
  background: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #e5e5e5;
}

.title {
  font-size: 1.1rem;
  font-weight: 700;
  color: #333;
}

/* 图标容器 */
.icons {
  display: flex;
  align-items: center;
  gap: 1rem;
}

/* 铃铛带小绿点 */
.bell-wrap {
  position: relative;
}

.dot {
  position: absolute;
  bottom: 0;
  right: 0.15rem;
  width: 0.45rem;
  height: 0.45rem;
  background-color: #03c66a;
  border-radius: 50%;
}

/* 图标通用样式 */
.icon {
  width: 1.4rem;
  height: 1.4rem;
}
</style>
