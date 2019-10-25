<template>
<div class="home">
    <div class="tanchutc" v-show="tc">
        <div class="tanchulie">
             <div class="tanchulied">
                 <router-link to="/caipu">
                <div class="tanchuimg"><img src="../assets/tanchu/shouji.png"></div>
                <div class="tanchutxt">上传</div>
                </router-link>
            </div>


            <div class="tanchulied">
                <div class="tanchuimg"><img src="../assets/tanchu/xiangce.png"></div>
               <div class="tanchutxt">图片</div>
            </div>
            <div class="tanchulied">
                <div class="tanchuimg"><img src="../assets/tanchu/fabiao.png"></div>
                <div class="tanchutxt">文字</div>
            </div>
            <div class="tanchulied">
                <div class="tanchuimg"><img src="../assets/tanchu/lianjie.png"></div>
                <div class="tanchutxt">连接</div>
            </div>
        </div>
        <div class="fanhui" @click="fanh"><img src="../assets/tanchu/fanhui.png"></div>
    </div>
         <mt-tab-container v-model="active"> 
            <mt-tab-container-item id="menu">
                <div>
                    <index></index>
                </div>
            </mt-tab-container-item>
            <mt-tab-container-item id="square">
                 <div>
                     <!-- 组件hongGc广场 -->
                     <gc></gc>
                 </div>
            </mt-tab-container-item>
            <!-- <mt-tab-container-item id="add">
                 <div>第三个页面</div>
            </mt-tab-container-item> -->
            <mt-tab-container-item id="message">
                <tongzhi></tongzhi>
            </mt-tab-container-item>
            <mt-tab-container-item id="me">
                 <div>
                    <login v-if="isLogin" v-on:pass="passout"></login>
                    <user v-else></user>
                 </div>
            </mt-tab-container-item>
        </mt-tab-container>
        <!-- 底部导航条 start -->
        <mt-tabbar v-model="active" fixed>
            <!-- 第一个按钮 菜谱-->
            <mt-tab-item id="menu" @click.native="changeState(0)">
                <tabbar :selectedImage="require('../img/activity_main_tab01_red.png')"
                        :normalImage="require('../img/activity_main_tab01_gray.png')"
                        :focused="currentIndex[0].isSelect">
                        </tabbar>    
                菜谱
            </mt-tab-item>
            <!-- 第二个按钮 广场 -->
            <mt-tab-item id="square" @click.native="changeState(1)">
            <tabbar :selectedImage="require('../img/activity_main_tab02_red.png')"
                    :normalImage="require('../img/activity_main_tab02_gray.png')"
                    :focused="currentIndex[1].isSelect">
                    </tabbar>
                广场
            </mt-tab-item>
             <!-- 第三个按钮 + -->
            <!-- <mt-tab-item id="add" @click.native="changeState(2)">
                <tabbar :selectedImage="require('../img/activity_main_tab03_red.png')"
                    :normalImage="require('../img/activity_main_tab03_red.png')"
                    :focused="currentIndex[2].isSelect"></tabbar>
            
            </mt-tab-item> -->
            <div class="tanchuzj" @click="tcshijian">
                <img src="../img/activity_main_tab03_red.png" >
            </div>
            <!-- 第四个按钮 消息 -->
            <mt-tab-item id="message" @click.native="changeState(3)">
                <tabbar :selectedImage="require('../img/activity_main_tab04_red.png')"
                    :normalImage="require('../img/activity_main_tab04_gray.png')"
                    :focused="currentIndex[3].isSelect"></tabbar>
                消息
            </mt-tab-item>
            <!-- 第五个按钮 我的 -->
            <mt-tab-item id="me" @click.native="changeState(4)">
                <tabbar :selectedImage="require('../img/activity_main_tab05_red.png')"
                    :normalImage="require('../img/activity_main_tab05_gray.png')"
                    :focused="currentIndex[4].isSelect"></tabbar>
                我的
            </mt-tab-item>
        </mt-tabbar>
    
</div>
</template>
<script>
import TabBar from "./TabBar.vue"
import tongzhi from "../components/tongzhi"
import gc from "../components/gc/HomeGc"
import login from "./Login.vue"
import index from "../components/zy/index.vue"
import User from "./User.vue"

export default {
    data(){
        return{
            tc:false,
            //面板中显示子组件id
            active:"menu",
            //创建数组保存图片焦点状态
            currentIndex:[
                {isSelect:true},
                {isSelect:false},
                {isSelect:false},
                {isSelect:false},
                {isSelect:false},
            ],
            login:false,
            isLogin:true,
        }
    },
    methods:{
        changeState(n){
            //函数功能：将当前参数下标
            //对应数组值修改true其它修改false
            //1.创建循环，循环数组中内容
            for(var i=0;i<this.currentIndex.length;i++){
                if(n==i){
                    this.currentIndex[i].isSelect=true;
            }else{
                  this.currentIndex[i].isSelect=false;
            }
        }

    },
    passout(data){
       if(data>0){
           this.isLogin=false;
       }
    },
    tcshijian(){
        this.tc=true;
    },
    fanh(){
        this.tc=false;
    }
},
      components:{
          "tabbar":TabBar,
          "tongzhi":tongzhi,
          "gc":gc,
          "login":login,
          "index":index,
          "user":User
      }
}
</script>
<style  scoped>

/*最外层父元素Home.vue*/
.page-tabbar{
  overflow: hidden;/*溢出隐藏*/
}
/*修改 tabbar 默认文字颜色*/
.mint-tabbar>.mint-tab-item{
  color:#999999;
}
/*修改默认tab选中文字样式*/
.mint-tabbar>.mint-tab-item.is-selected{
  background-color: transparent;
  color:#45c018;
}

.page-wrap{
  overflow:auto;/*溢出显示轮动条*/
  padding-bottom: 60px;
}
.tanchuzj{
    width: 40px;
    height: 40px;
}
.tanchuzj>img{
    max-width: 100%;
    max-height: 100%;
    vertical-align:middle;
}
.tanchutc{
    position: fixed;
    top: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.671);
    z-index: 99999;
}
.tankuang{
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
}
.tanchulie{
  width: 80%;
  position: absolute;
  bottom: 150px;
  left: 0;
  display: flex;
  justify-content: space-between;/*左右对齐*/
  align-items: center;/*垂直居中*/
  margin-left: 10%;
  background-color: rgba(0, 0, 0, 0);

}
.tanchulied{
  width: 50px;
  text-align: center;
  background-color: rgba(0, 0, 0, 0);
}
.fanhui{
  position: absolute;
  width: 42px;
  bottom: 7px;
  left: 50%;
  margin-left: -21px;
  background-color: rgba(0, 0, 0, 0);
}
.fanhui>img{
    max-width: 100%;
    background-color: rgba(0, 0, 0, 0);
}
.tanchuimg{
    width: 30px;
    margin: 0 auto;
    background-color: rgba(0, 0, 0, 0);
}
.tanchuimg>img{
    max-width: 100%;
    background-color: rgba(0, 0, 0, 0);
}
.tanchutxt{
    background-color: rgba(0, 0, 0, 0);
    text-align: center;
    color:#fff;
    font-size: 15px;
    margin-top: 6px;
}
</style>