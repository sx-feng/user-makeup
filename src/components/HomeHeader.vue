<template>
  <div class="home-header">
    <!-- 左侧标题 -->
    <div class="title">用户端首页</div>

    <!-- 中间搜索框 -->
   <div class="search-box">
  <img class="search-icon" src="/icons/搜索.png" />
  <input type="text" placeholder="搜索化妆师..." />
</div>


    <!-- 右侧铃铛 -->
  <div>
    <img class="bell" src="/icons/211铃铛-线性.png"/></div>
  </div>
</template>

<script>
export default {
  name: 'HomeHeader'
}
</script>

<style scoped>
.home-header {
 
  padding: 0.6rem 1rem;   
  display: flex;
  align-items: center;
  background: #fff;
  border-bottom: 0.0625rem solid #eee;
}

.title {
  font-size: 1.05rem;   /* 自适应字体 */
  font-weight: 700;
  margin-right: 0.6rem;
  white-space: nowrap;
}

.search-box {
  flex: 1;
  display: flex;
  align-items: center;
  padding: 0.4rem 0.8rem;
  border-radius: 999px;
  background: #f5f5f5;
  border: 0.0625rem solid #ddd;
}

.search-icon {
  margin-right: 0.4rem;
  color: #999;
  font-size: 0.9rem;
}

.search-box input {
  border: none;
  outline: none;
  background: none;
  width: 100%;
  font-size: 0.9rem;
  color: #333;
}

.bell {
  width: 1.7rem;
  height: 1.7rem;
  margin-left: 0.6rem;
  font-size: 1.3rem;
  color: #666;
}
.search-icon {
  width: 1.2rem;
  height: 1.2rem;
  margin-right: 0.4rem;
  object-fit: contain;
  display: block;
}

</style>
