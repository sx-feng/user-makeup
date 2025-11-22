<template>
  <div class="message-page">
    <TopBar />

    <!-- 聊天 / 互动 -->
    <ChatSwitch v-model="mode" />

    <!-- 全部 / 婚庆公司 / 化妆师 -->
    <CategorySelector v-model="category" />

    <!-- 会话列表 -->
    <MessageList
      :list="messageList"
      :active-id="activeId"
      @select="handleSelect"
    />
  </div>
</template>

<script>
import TopBar from "@/MessageComponents/TopBar.vue";
import ChatSwitch from "@/MessageComponents/ChatSwitch.vue";
import CategorySelector from "@/MessageComponents/CategorySelector.vue";
import MessageList from "@/MessageComponents/MessageList.vue";
import systemAvatar from "@/assets/avater.png";
import avatar1 from "@/assets/avatar1.png";
import avatar2 from "@/assets/avatar2.png";
import avatar3 from "@/assets/avatar3.png";

export default {
  name: "MessagePage",
  components: {
    TopBar,
    ChatSwitch,
    CategorySelector,
    MessageList
  },
  data() {
    return {
      mode: "chat",
      category: "all",
      activeId: 2,

      // ✅ 模拟“后端返回的最终格式”
      messageList: [
        {
          id: 1,
          name: "系统通知",
          preview: "您有新的婚庆订单消息",
          time: "11:29",
          type: "system",
          avatar: systemAvatar  // <--- 正确：头像字段叫 avatar
        },
        {
          id: 2,
          name: "贾先生",
          preview: "你好，我要新娘妆容……",
          time: "11:30",
          type: "user",
          avatar: avatar2,  // <--- 正确
          role: "client"
        },
        {
          id: 3,
          name: "贾先生",
          preview: "麻烦帮我确认下档期～",
          time: "11:30",
          type: "user",
          avatar: avatar3,  // <--- 正确
          role: "client"
        },
        {
          id: 4,
          name: "张女士",
          preview: "好的，谢谢～",
          time: "11:32",
          type: "user",
           avatar: avatar1,        // <--- 没头像用默认头像
          role: "client"
        }
      ]
    };
  },
  methods: {
    handleSelect(item) {
      this.activeId = item.id;
    }
  }
};
</script>

<style scoped>
.message-page {
  padding: 10px;
}
</style>
