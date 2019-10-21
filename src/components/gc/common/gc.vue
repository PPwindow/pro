<template>
  <div>
    <!-- <h3>广场</h3> -->
    <div class="search-btn">
      <input type="text" placeholder="搜索帖子" class="search" />
      <button class="my-btn">任务奖励</button>
    </div>
    <div class="tasks-container">
      <div class="tasks">
        <div class="tasks-img">
          <img src="../../../assets/pic/shuiguo1.png" alt />
        </div>
        <p class="tasks-txt">秋季水果</p>
      </div>
      <div class="tasks">
        <div class="tasks-img">
          <img src="../../../assets/pic/shuiguo1.png" alt />
        </div>
        <p class="tasks-txt">秋季水果</p>
      </div>
      <div class="tasks">
        <div class="tasks-img">
          <img src="../../../assets/pic/shuiguo1.png" alt />
        </div>
        <p class="tasks-txt">秋季水果</p>
      </div>
      <div class="tasks">
        <div class="tasks-img">
          <img src="../../../assets/pic/shuiguo1.png" alt />
        </div>
        <p class="tasks-txt">秋季水果</p>
      </div>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style scoped>
.tasks-container{
    display: flex;
    flex-wrap:nowrap; 
}
.tasks {
  margin: 10px;
}
.tasks-txt {
  width: 100px;
  text-align: center;
}
.tasks-img {
  width: 100px;
  height: 100px;
  border-radius: 5%;
}
.tasks-img img {
  width: 100%;
  height: 100px;
  border-radius: 5%;
}

.search-btn {
  margin-top: 20px;
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  margin-left: 10px;
  margin-right: 10px;
}
.search {
  background-image: url(../../../assets/pic/search.png);
  background-repeat: no-repeat;
  background-size: 16px 16px;
  background-position: 10px 7px;
  background-color: #f5f5f5;
  outline: none;
  border: 1px solid #ddd;
  border-radius: 6px;
  width: 65%;
  height: 30px;
  font-size: 14px;
  padding-left: 32px;
}
.my-btn {
  background-color: #f5f5f5;
  margin: 0;
  margin-left: 10px;
  padding: 0px;
  padding-left: 32px;
  padding-right: 10px;
  border: 1px solid transparent;
  border-radius: 6px;
  outline: none;
  border: 1px solid #ddd;
  width: 35%;
  height: 32px;
  background-image: url(../../../assets/pic/main_duty_icon.png);
  background-repeat: no-repeat;
  background-size: 16px 16px;
  background-position: 10px 7px;
  font-size: 14px;
  color: #777;
}
</style>