<template>
<div class="txiaoxia">
  <!-- 顶部切换样式 -->
  <div class="txiaoxihd" v-show="fan">
    <div class="txiaoxihdfanhui" @click="back"><img src="../assets/txiaoxi/tfanhui.png"></div>
    <div @click="qiehuan" v-show="sc">删除</div>
  </div>
  <div class="txiaoxihd" v-show="!fan">
    <div @click="fanhuia">返回</div>
    <div @click="dela">全部删除</div>
  </div>
  <!-- 底部内容样式 -->
  <div class="txiaoxibtA" v-show="sh">
    <ul class="txiaoxibtAul" @click="del($event)">
      <li v-for="(tass,i) of tasks" :key="i">
        <div class="txiaoxibtA1">
          <div class="txiaoxibtA1img"><img src=""></div>
          <div class="txiaoxibtA1txt">
            <div class="txiaoxibtA1txta">{{tass.biaoti}}</div>
            <div class="txiaoxibtA1txtb">{{tass.time}}</div>
            <div class="txiaoxibtA1txtc">{{tass.neirong}}</div>
          </div>
        </div>
        <b class="shanchu" :data-i="i" v-show="x">x</b>
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
      sh:true,
      fan:true,
      x:false,
      sc:false,
      tasks:[
        {biaoti:"欢迎啊A",time:"1天前",neirong:"您已经获得尊贵vip，惊不惊喜"},
        {biaoti:"欢迎啊B",time:"1天前",neirong:"您已经获得尊贵vip，惊不惊喜"},
        {biaoti:"欢迎啊C",time:"1天前",neirong:"您已经获得尊贵vip，惊不惊喜"},
        {biaoti:"欢迎啊D",time:"1天前",neirong:"您已经获得尊贵vip，惊不惊喜"},
        {biaoti:"欢迎啊E",time:"1天前",neirong:"您已经获得尊贵vip，惊不惊喜"}
      ]
    }
  },
  methods:{
    qiehuan(){
      this.fan=false;
      this.x=true;
    },
    fanhuia(){
      this.fan=true;
      this.x=false;
    },
     del(e){
          //只有b元素才能触发事件
          if(e.target.nodeName==="B"){
    //获得当前b元素上绑定的自定义扩展属性的i的值，当前li的下标
            var i=e.target.dataset.i;
            //删除当前li
            
          this.tasks.splice(i,1)
          }
     },
     dela(e){
       var i=e.target.dataset.i;
       this.tasks.splice(i)
     },
     createcode(){
        console.log(this.tasks.length)
        if(this.tasks.length>0){
          this.sc=true;
        }else{
          this.sc=false;
        }
     },
     back(){
       this.$router.go(-1);
     }


  },
  mounted:function(){
    this.createcode();
  }

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
.txiaoxihdfanhui{
  width: 20px;
  height: 20px;
}
.txiaoxihdfanhui>img{
  max-width: 100%;
  max-height: 100%;
}
.txiaoxibtAul>li{
  margin-bottom: 20px;
  position: relative;
}
.shanchu{
  position: absolute;
  top: 0;
  right: 0;
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