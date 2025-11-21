<template>
  <div class="message-page">
    <TopBar />

    <!-- 顶部 “聊天 / 互动” 切换 -->
    <ChatSwitch v-model="mode" />

    <!-- “全部 / 婚庆公司 / 化妆师” -->
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
      mode: "chat",        // 聊天 / 互动
      category: "all",     // 全部 / 婚庆公司 / 化妆师
      activeId: 2,         // 当前选中的会话 id（用于高亮）
      messageList: [
        {
          id: 1,
          name: "系统通知",
          preview: "您有新的婚庆订单消息",
          time: "11:29",
          type: "system"    // 特殊：系统通知
        },
        {
          id: 2,
          name: "贾先生",
          preview: "你好，我要新娘妆容……",
          time: "11:30",
          type: "user",
          avatar: "",       // 可以放头像地址，没有就用默认头像
          role: "client"    // 婚庆公司 / 化妆师 / 普通用户（可选字段）
        },
        {
          id: 3,
          name: "贾先生",
          preview: "麻烦帮我确认下档期～",
          time: "11:30",
          type: "user",
          avatar: "",
          role: "client"
        },
        {
          id: 4,
          name: "贾先生",
          preview: "好的，谢谢～",
          time: "11:32",
          type: "user",
          avatar: "",
          role: "client"
        }
      ]
    };
  },
  methods: {
    handleSelect(item) {
      this.activeId = item.id;
      // 这里之后可以做：切到右侧聊天窗口 / 打开详情等
      // console.log("选中了会话：", item);
    }
  }
};
</script>

<style scoped>
.message-page {
  padding: 10px;
}
</style>
