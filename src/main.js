// src/main.js
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './utils/rem'

const app = createApp(App)

app.use(router)

// ⭐ 关键：先挂载，再让 App.vue 填充 $loading 实例
app.mount('#app')

// ⭐ 全局占位（App.vue 会给它赋值）
app.config.globalProperties.$loading = null
