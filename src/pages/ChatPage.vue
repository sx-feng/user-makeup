<template>
  <div class="chat-page" v-if="user">

    <!-- 顶部栏 -->
    <div class="chat-header">
      <button class="back" @click="$router.back()"> <img src="/icons/返回.png" /></button>
      <img :src="user.avatar" class="avatar" />
      <span class="name">{{ user.name }}</span>
    </div>

    <!-- 聊天内容（可自己扩展） -->
    <div class="chat-body">
      <p class="tip">你正在与 {{ user.name }} 对话</p>
    </div>

    <!-- 底部输入框 -->
    <div class="chat-input">
      <input type="text" placeholder="请输入消息..." />
      <button>发送</button>
    </div>

  </div>
</template>

<script>
import avatar1 from "@/assets/avatar1.png";
import avatar2 from "@/assets/avatar2.png";
import avatar3 from "@/assets/avatar3.png";

export default {
  name: "ChatPage",

  data() {
    return {
      allUsers: [
        { id: 1, name: "喜羊羊", avatar: avatar1 },
        { id: 2, name: "美羊羊", avatar: avatar2 },
        { id: 3, name: "美羊羊", avatar: avatar3 }
      ]
    };
  },

  computed: {
    user() {
      const id = Number(this.$route.params.id);
      return this.allUsers.find(u => u.id === id);
    }
  }
};
</script>

<style scoped>
.chat-header {
  height: 3rem;
  background: #fff;
  display: flex;
  align-items: center;
  padding: 0 0.6rem;
  box-shadow: 0 2px 4px rgba(0,0,0,0.06);
}

.back {
  border: none;
  background: none;
  font-size: 1.2rem;
  margin-right: 0.5rem;
}
.back img{
     width: 0.9rem;
  height: 0.9rem;
}
.avatar {
  width: 2rem;
  height: 2rem;
  border-radius: 50%;
  margin-right: 0.5rem;
}

.name {
  font-size: 1rem;
  font-weight: bold;
}

.chat-body {
  height: calc(100vh - 6rem);
  background: #f5f5f5;
  padding: 1rem;
}

.tip {
  color: #888;
  font-size: 0.9rem;
}

.chat-input {
  display: flex;
  padding: 0.4rem;
  background: #fff;
  border-top: 1px solid #eee;
}

.chat-input input {
  flex: 1;
  border: 1px solid #ddd;
  border-radius: 1rem;
  padding: 0.3rem 0.6rem;
}

.chat-input button {
  margin-left: 0.4rem;
  padding: 0 0.8rem;
  background: #ff4b7d;
  color: #fff;
  border: none;
  border-radius: 1rem;
}
</style>
