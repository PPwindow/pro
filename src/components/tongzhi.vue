<template>
  <div>
    <div class="ttongzhi">
      <div class="ttongzhihd">
          <div class="ttongzhit" @click="huan" data-id="tab1" 
          :class="{ttongzhihdd:ttong==ta}"
          >通知</div>
          <div class="ttongzhis" @click="huan" data-id="tab2"
          :class="{ttongzhihdd:ttong==tb}">
            私信</div>
      </div>
    <mt-tab-container v-model="active"> 
      <mt-tab-container-item id="tab1">
        <div class="ttongzhiA">
          <router-link to="/txiaoxi" ><div class="ttongzhia">
            <div>系统消息</div> <div class="ttongzhiaimg"><img src="../assets/txiaoxi/tjingru.png"></div>
            </div></router-link>
          <router-link to="/txiaoxi"><div class="ttongzhia">
           <div>@我的</div> <div class="ttongzhiaimg"><img src="../assets/txiaoxi/tjingru.png"></div>
          </div></router-link>
          <router-link to="/txiaoxi"><div class="ttongzhia">
           <div>评论通知</div> <div class="ttongzhiaimg"><img src="../assets/txiaoxi/tjingru.png"></div>
          </div></router-link>
          <router-link to="/txiaoxi"><div class="ttongzhia">
           <div>更多通知</div> <div class="ttongzhiaimg"><img src="../assets/txiaoxi/tjingru.png"></div>
          </div></router-link>
          <router-link to="/tongzhi"><div class="ttongzhia">
           <div>阅读推荐</div> <div class="ttongzhiaimg"><img src="../assets/txiaoxi/tjingru.png"></div>
          </div></router-link>
          <div class="ttongzhiimg"><img src=""></div>
          <div class="ttongzhitxt">
              <span>10月1日</span>
              <span>进行中</span>
          </div>
          <router-link to="/tongzhi"><div class="ttongzhic">
            查看全部活动
          </div></router-link>
        </div>
      </mt-tab-container-item>
      <mt-tab-container-item id="tab2">
        <div class="ttongzhiB">还没有收到私信</div>
      </mt-tab-container-item>
    </mt-tab-container>
    </div>
  </div>
</template>
<script>
export default {
  data() {
      return {
        active:"tab1",
        ta:"tab1",
        tb:"tab2",
        ttong:"tab1"
      }
  },
  methods:{
    huan(event){
        var aa=event.target.dataset.id;
        this.active=aa;
        this.ttong=aa;
      }
  }
}
</script>
<style  scoped>
/* 主体盒子样式 */
.ttongzhi{
  width: 90%;
  margin: 0 auto;
}
/* 跳转内容样式 */
.ttongzhiA{
  margin-top: 10px;
}
.ttongzhia{
  height: 50px;
  line-height: 50px;
  color: #000;
  border-bottom:1px solid #d4d4d4;
  display: flex;
  justify-content: space-between;/*左右对齐*/
  align-items: center;/*垂直居中*/
}
.ttongzhiaimg{
  width: 20px;
  height: 20px;
}
.ttongzhiaimg>img{
  max-width: 100%;
  max-height: 100%;
  vertical-align: top;
}
.ttongzhiB{
  margin-top: 50px;
  text-align: center;
}
/* 去掉a标签下划线 */
a{text-decoration:none}

/*切换标签样式*/
.ttongzhihd{
  height: 50px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.ttongzhit{
  font-size: 20px;
  width: 60px;
  text-align: center;
  line-height: 50px;
  margin-left: -20px;
}
.ttongzhis{
  font-size: 20px;
  width: 60px;
  text-align: center;
  line-height: 50px;
}
.ttongzhihdd{
  color: red;
  border-bottom:2px solid red;
}
/* 底部图片和文字样式 */
.ttongzhiimg{
  width: 100%;
}
.ttongzhiimg>img{
  max-width: 100%;
}
.ttongzhitxt{
  height: 15px;
  display: flex;/*弹性布局*/
  justify-content: space-between;/*左右对齐*/
  align-items: center;/*垂直居中*/
  font-size: 10px;
  color: #918a8a;
  margin-top: 10px;
}
/* 查看全部活动 */
.ttongzhic{
  width: 95%;
  height: 40px;
  margin: 50px auto 0;
  text-align: center;
  line-height: 40px;
  border:1px solid red;
  color: red;
  font-size: 16px;
  border-radius:10px;
}
</style>