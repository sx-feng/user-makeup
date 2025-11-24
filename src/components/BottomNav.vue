<template>
  <div class="bottom-nav">
    <div
      v-for="item in tabs"
      :key="item.name"
      class="nav-item"
      :class="{ active: modelValue === item.name }"
      @click="switchTab(item.name)"
    >
      <img
        :src="modelValue === item.name ? item.selectedIcon : item.icon"
        class="nav-icon"
      />
      <div class="nav-text">{{ item.label }}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "BottomNav",
  props: {
    modelValue: String
  },

  computed: {
    tabs() {
      return [
        {
          name: "home",
          label: "化妆师",
          icon: "/icons/huazhuangshi.png",
          selectedIcon: "/icons/huazhuangshi1.png"
        },
        {
          name: "message",
          label: "消息",
          icon: "/icons/xiaoxi.png",
          selectedIcon: "/icons/xiaoxi1.png"
        },
        {
          name: "mine",
          label: "我的",
          icon: "/icons/wode.png",
          selectedIcon: "/icons/wode1.png"
        }
      ];
    }
  },

  methods: {
    switchTab(name) {
      this.$emit("update:modelValue", name); 
      this.$router.push({ name }); // 直接切换路由
    }
  }
};
</script>

<style scoped>
.bottom-nav {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 4.25rem;
  background: #fff;
  border-top: 1px solid #eee;
  display: flex;
  justify-content: space-around;
  align-items: center;
  z-index: 99;
}

.nav-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 0.8125rem;
  color: #666;
}

.nav-item.active {
  color: #ff3b6b;
}

.nav-icon {
  width: 1.5rem;
  height: 1.5rem;
  margin-bottom: 0.25rem;
}
</style>
