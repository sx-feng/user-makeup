<template>
  <div class="message-list">

    <div
      v-for="item in systemItems"
      :key="'sys-' + item.id"
      class="system-row"
      @click="$emit('select', item)"
    >
      <div class="system-icon">
      
        
      </div>
      <div class="system-text">{{ item.name }}</div>
    </div>

    <!-- ✅ 普通会话列表 -->
    <div
      v-for="item in userItems"
      :key="item.id"
      class="message-row"
      :class="{ active: item.id === activeId }"
      @click="$emit('select', item)"
    >
      <!-- 头像 -->
      <div class="avatar-wrap">
        <div class="avatar">
         <img :src="item.avatar" />
          <span class="avatar-placeholder"></span>
        </div>
      </div>

      <!-- 右侧内容 -->
      <div class="message-content">
        
        <div class="row-top">
          <span class="name">{{ item.name }}</span>
          <span class="time">{{ item.time }}</span>
        </div>

        <div class="row-bottom">
          <span class="preview">
            {{ item.preview }}
          </span>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: "MessageList",
  props: {
    list: {
      type: Array,
      default: () => []
    },

    activeId: {
      type: [Number, String],
      default: null
    }
  },
  computed: {
    systemItems() {
      return this.list.filter(item => item.type === "system");
    },
    userItems() {
      return this.list.filter(item => item.type !== "system");
    }
  }
};
</script>

<style scoped>
.message-list {
  margin-top: 10px;
  font-size: 14px;
  color: #333;
}

/* ====== 系统通知行 ====== */
.system-row {
  display: flex;
  align-items: center;
  padding: 6px 10px;
  color: #666;
}

.system-icon {
  width: 24px;
  height: 24px;
  border-radius: 50%;
  background: #4caf50;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 6px;
  font-size: 14px;
  color: #fff;
}

.system-text {
  font-size: 13px;
}

/* ====== 普通会话行 ====== */
.message-row {
  display: flex;
  align-items: flex-start;
  padding: 8px 10px;
  cursor: pointer;
}

/* 选中高亮，参考你截图中蓝色边框 */
.message-row.active {
  border: 1px solid #4c8fff;
  border-radius: 6px;
  background: #f5f8ff;
}

/* 头像区域 */
.avatar-wrap {
  margin-right: 8px;
}

.avatar {
  width: 34px;
  height: 34px;
  border-radius: 50%;
  background: #e0f2ff;
  display: flex;
  align-items: center;
  justify-content: center;
}

.avatar-placeholder {
  width: 24px;
  height: 24px;
  border-radius: 50%;
  background: #3f51b5;
}

/* 右侧内容 */
.message-content {
  flex: 1;
  border-bottom: 1px solid #f0f0f0;
  padding-bottom: 6px;
}

/* 第一行：名字 + 时间 */
.row-top {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.name {
  font-weight: 600;
  font-size: 14px;
}

.time {
  font-size: 12px;
  color: #999;
}

/* 第二行：预览内容，单行省略号 */
.row-bottom {
  margin-top: 2px;
}

.preview {
  display: inline-block;
  max-width: 180px; /* 可以根据整体宽度调整 */
  font-size: 12px;
  color: #999;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
</style>
