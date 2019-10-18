<template>
<div class="txiaoxia">
  <div class="txiaoxihd">
    <router-link to="/tongzhi"><div>返回</div></router-link>
    <div>删除</div>
  </div>
  <div class="txiaoxibtA" v-show="sh">
    <ul class="txiaoxibtAul">
      <li>
        <div class="txiaoxibtA1">
          <div class="txiaoxibtA1img"><img src=""></div>
          <div class="txiaoxibtA1txt">
            <div class="txiaoxibtA1txta">欢迎加入</div>
            <div class="txiaoxibtA1txtb">1天前</div>
            <div class="txiaoxibtA1txtc">您已经获得尊贵vip，惊不惊喜</div>
          </div>
        </div>
      </li>
      <li>
        <div class="txiaoxibtA1">
          <div class="txiaoxibtA1img"><img src=""></div>
          <div class="txiaoxibtA1txt">
            <div class="txiaoxibtA1txta">欢迎加入</div>
            <div class="txiaoxibtA1txtb">1天前</div>
            <div class="txiaoxibtA1txtc">您已经获得尊贵vip，惊不惊喜</div>
          </div>
        </div>
      </li>
    </ul>
  </div>
  <div class="txiaoxibtB" v-show="!sh">
    <div class="txiaoxibtBa">还没有收到消息</div>
  </div>
</div>
</template>
<script>
export default {
  data() {
    return {
      sh:true
    }
  },
}
</script>
<style scoped>
 li{
  list-style: none;
}
/* 去掉a标签下划线 */
a{text-decoration:none}

.txiaoxia{
  width: 90%;
  margin: 0 auto;
}
.txiaoxihd{
  height: 50px;
  width: 100%;
  display: flex;/*弹性布局*/
  justify-content: space-between;/*左右对齐*/
  align-items: center;/*垂直居中*/
  border-bottom:1px solid #d4d4d4;
  
}
.txiaoxibtAul>li{
  margin-bottom: 20px;
}

.txiaoxibtBa{
  margin: 30px auto 0;
  text-align: center;
}
.txiaoxibtA{
  padding-top: 10px;
}
.txiaoxibtA1{
  display: flex;/*弹性布局*/
}
.txiaoxibtA1img{
  width: 50px;
}
.txiaoxibtA1img>img{
  max-width: 100%;
}
.txiaoxibtA1txt{
  width: 100%;
  border-bottom:1px solid #d4d4d4;
}
.txiaoxibtA1txta{
  font-size: 20px;
  white-space:nowrap;
  overflow:hidden;
  text-overflow:ellipsis;
  margin-bottom: 5px;
}
.txiaoxibtA1txtb{
  font-size: 8px;
  color: #918a8a;
  white-space:nowrap;
  overflow:hidden;
  text-overflow:ellipsis;
  margin-bottom: 10px;
}
.txiaoxibtA1txtc{
  font-size: 15px;
  white-space:nowrap;
  overflow:hidden;
  text-overflow:ellipsis;
  margin-bottom: 10px;
}

</style>