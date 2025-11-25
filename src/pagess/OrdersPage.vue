<template>
    <div class="orders-page">
        <!-- 顶部标题栏 -->
        <div class="header">
            <button class="back-btn" @click="router.back()">
                <img src="/icons/返回.png" class="icon" />
            </button>

            <div class="search-box">
                <img src="@/assets/search.png" class="search-icon" />
                <input
                    type="text"
                    class="search-input"
                    placeholder="搜索"
                    v-model="keyword"
                />
            </div>
        </div>

        <!-- 订单菜单栏 -->
        <div class="tabs">
            <div
                v-for="item in tabList"
                :key="item.key"
                :class="['tab', activeTab === item.key ? 'active' : '']"
                @click="activeTab = item.key"
            >
                {{ item.name }}
            </div>
        </div>

        <!-- 内容区域 -->
        <div class="order-list">
            <div
                class="order-card"
                v-for="o in filteredOrders"
                :key="o.id"
                @click="goDetail(o)"
            >
                <div class="order-top">
                    <span class="order-title">{{ o.title }}</span>
                    <span class="order-status" :class="o.status">
                        {{ getStatusText(o.status) }}
                    </span>
                </div>

                <div class="order-info">
                    <div>服务时间：{{ o.date }}</div>
                    <div>金额：￥{{ o.amount }}</div>
                </div>
            </div>

            <!-- 空状态 -->
            <div v-if="filteredOrders.length === 0" class="empty-box">
                <img src="/icons/empty.png" class="empty-img">
                <div class="empty-text">暂无订单</div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, computed } from "vue";
import { useRouter } from "vue-router";   // ✅ 正确引入 router

const router = useRouter();  // ✅ 替代 $router

const keyword = ref("");
const activeTab = ref("all");

const tabList = [
    { name: "全部", key: "all" },
    { name: "待付款", key: "pay" },
    { name: "待服务", key: "wait" },
    { name: "已完成", key: "done" }
];

// 模拟订单数据
const orders = ref([
    { id: 1, title: "新娘妆服务", status: "pay", amount: 599, date: "2025-05-01" },
    { id: 2, title: "写真妆容", status: "wait", amount: 299, date: "2025-05-08" },
    { id: 3, title: "舞台妆预约", status: "done", amount: 399, date: "2025-04-30" }
]);

// 过滤功能
const filteredOrders = computed(() => {
    let list = orders.value;

    // 搜索
    if (keyword.value.trim()) {
        list = list.filter(o =>
            o.title.includes(keyword.value.trim())
        );
    }

    // Tabs
    if (activeTab.value === "all") return list;
    return list.filter(o => o.status === activeTab.value);
});

// 状态文字
const getStatusText = (s) => {
    switch (s) {
        case "pay": return "待付款";
        case "wait": return "待服务";
        case "done": return "已完成";
        default: return "";
    }
};

// 点击订单跳转
const goDetail = (order) => {
    router.push(`/order-detail/${order.id}`);   // 你之后可以创建详情页
};
</script>

<style scoped>
.orders-page {
    padding-bottom: 1rem;
}

/* 顶部返回栏 */
.header {
    display: flex;
    align-items: center;
    padding: 0.8rem 1rem;
    border-bottom: 1px solid #eee;
}

.back-btn {
    background: none;
    border: none;
    padding: 0;
}

.icon {
    width: 1.2rem;
    height: 1.2rem;
    margin-right: 0.4rem;
}

.title {
    flex: 1;
    text-align: center;
    font-size: 1.1rem;
    margin-right: 1.2rem;
}

/* Tabs */
.tabs {
    display: flex;
    justify-content: space-around;
    padding: 0.6rem 0;
    border-bottom: 1px solid #eee;
}

.tab {
    font-size: 0.9rem;
    color: #666;
    padding-bottom: 0.3rem;
}

.tab.active {
    color: #ff4f88;
    font-weight: bold;
    border-bottom: 2px solid #ff4f88;
}

/* 订单卡片 */
.order-card {
    margin: 0.8rem;
    padding: 1rem;
    background: #fff;
    border-radius: 0.6rem;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
}

.order-top {
    display: flex;
    justify-content: space-between;
    margin-bottom: 0.5rem;
}

.order-title {
    font-size: 1rem;
    font-weight: 600;
}

.order-status {
    font-size: 0.85rem;
}

.order-status.pay {
    color: #ff4f4f;
}

.order-status.wait {
    color: #f79c25;
}

.order-status.done {
    color: #52c41a;
}

.order-info {
    font-size: 0.85rem;
    color: #666;
    line-height: 1.3rem;
}

/* 空状态 */
.empty-box {
    padding-top: 3rem;
    text-align: center;
}

.empty-img {
    width: 6rem;
    opacity: 0.6;
}

.empty-text {
    margin-top: 1rem;
    color: #888;
    font-size: 0.9rem;
}
.search-box {
    flex: 1;
    display: flex;
    align-items: center;
    background: #f5f5f5;
    border-radius: 0.6rem;
    padding: 0 0.6rem;
    height: 2.2rem; /* 搜索框高度 */
}

.search-icon {
    width: 1rem;   /* 图标宽度 */
    height: 1rem;  /* 图标高度 */
    margin-right: 0.4rem;
    opacity: 0.6;
}

.search-input {
    flex: 1;
    border: none;
    background: transparent;
    outline: none;
    font-size: 0.9rem;
}

</style>
