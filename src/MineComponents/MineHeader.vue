<template>
  <div class="mine-header">
    <!-- 左侧：头像 + 文本信息 -->
    <div class="mine-header-left">
      <div class="avatar-wrapper">
        <img
          v-if="avatar"
          :src="avatar"
          alt="avatar"
          class="avatar-img"
        />
        <!-- 没有头像时，显示占位圆头像 -->
        <div v-else class="avatar-placeholder">
          {{ name?.[0] || "用户" }}
        </div>
      </div>

      <div class="user-info">
        <div class="user-name-row">
          <span class="user-name">{{ name }}</span>
          <span v-if="tag" class="user-tag">{{ tag }}</span>
        </div>
        <div class="user-account">
          平台账号：{{ account }}
        </div>
        <div v-if="statsText" class="user-stats">
          {{ statsText }}
        </div>
      </div>
    </div>

    <!-- 右侧：客服 & 设置 -->
    <div class="mine-header-right">
      <button class="icon-btn" @click="$emit('service-click')">
        <span class="icon-symbol">🎧</span>
      </button>
      <button class="icon-btn" @click="$emit('setting-click')">
        <span class="icon-symbol">⚙️</span>
      </button>
    </div>
  </div>
</template>

<script setup>
import { computed } from "vue";

const props = defineProps({
  name: {
    type: String,
    default: "长风",
  },
  account: {
    type: String,
    default: "",
  },
  avatar: {
    type: String,
    default: "",
  },
  tag: {
    type: String,
    default: "普通用户",
  },
  stats: {
    type: Object,
    default: () => ({
      orders: 0,
      totalAmount: 0,
    }),
  },
});

const statsText = computed(() => {
  if (!props.stats) return "";
  const { orders, totalAmount } = props.stats;
  return `已预约 ${orders} 次 · 累计消费 ¥${totalAmount}`;
});
</script>

<style scoped>
.mine-header {
    margin-top: 0.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.75rem 1rem; /* 12px 16px */

  box-sizing: border-box;
   border-bottom: 1px solid #e5e5e5;
}

.mine-header-left {
  display: flex;
  align-items: center;
  min-width: 0;
}

.avatar-wrapper {
  width: 3.25rem;  /* 52px */
  height: 3.25rem; /* 52px */
  border-radius: 50%;
  overflow: hidden;
  background: #f8c6d8;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 0.75rem; /* 12px */
  flex-shrink: 0;
}

.avatar-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.avatar-placeholder {
  width: 100%;
  height: 100%;
  border-radius: 50%;
  background: #f8c6d8;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.125rem; /* 18px */
  color: #ffffff;
}

.user-info {
  display: flex;
  flex-direction: column;
  min-width: 0;
}

.user-name-row {
  display: flex;
  align-items: center;
  margin-bottom: 0.125rem; /* 2px */
}

.user-name {
  font-size: 1rem; /* 16px */
  font-weight: 600;
  color: #333333;
  margin-right: 0.375rem; /* 6px */
}

.user-tag {
  font-size: 0.6875rem; /* 11px */
  padding: 0.125rem 0.375rem; /* 2px 6px */
  border-radius: 999px;
  background-color: rgba(255, 255, 255, 0.8);
  color: #ff6b9e;
}

.user-account {
  font-size: 0.75rem; /* 12px */
  color: #666666;
}

.user-stats {
  font-size: 0.75rem; /* 12px */
  color: #999999;
  margin-top: 0.125rem; /* 2px */
}

.mine-header-right {
  display: flex;
  align-items: center;
  gap: 0.5rem; /* 8px */
}

.icon-btn {
  border: none;
  background: transparent;
  padding: 0.25rem; /* 4px */
  border-radius: 999px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
}

.icon-btn:active {
  background-color: rgba(255, 255, 255, 0.8);
}

.icon-symbol {
  font-size: 1.5rem; /* 24px → 保持你的原样 */
}
</style>
