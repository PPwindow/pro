<template>
    <div>
         <mt-tab-container v-model="active"> 
            <mt-tab-container-item id="menu">
                <div>第一个页面</div>
            </mt-tab-container-item>
            <mt-tab-container-item id="square">
                 <div>第二个页面</div>
            </mt-tab-container-item>
            <mt-tab-container-item id="add">
                 <div>第三个页面</div>
            </mt-tab-container-item>
            <mt-tab-container-item id="message">
                <tongzhi></tongzhi>
            </mt-tab-container-item>
            <mt-tab-container-item id="me">
                 <div>第四个页面</div>
            </mt-tab-container-item>
        </mt-tab-container>
        <!-- 底部导航条 start -->
        <mt-tabbar v-model="active" fixed>
        <!-- 第一个按钮 菜谱-->
            <mt-tab-item id="menu" @click.native="changeState(0)">
            <tabbar :selectedImage="require('../img/activity_main_tab01_red.png')"
                    :normalImage="require('../img/activity_main_tab01_gray.png')"
                    :focused="currentIndex[0].isSelect"></tabbar>    
            菜谱
            </mt-tab-item>
            <!-- 第二个按钮 广场 -->
            <mt-tab-item id="square" @click.native="changeState(1)">
                <tabbar :selectedImage="require('../img/activity_main_tab02_red.png')"
                    :normalImage="require('../img/activity_main_tab02_gray.png')"
                    :focused="currentIndex[1].isSelect"></tabbar>
                广场
            </mt-tab-item>
             <!-- 第三个按钮 + -->
            <mt-tab-item id="add" @click.native="changeState(2)">
                <tabbar :selectedImage="require('../img/activity_main_tab03_red.png')"
                    :normalImage="require('../img/activity_main_tab01_gray.png')"
                    :focused="currentIndex[2].isSelect"></tabbar>
            00
            </mt-tab-item>
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
export default {
    data(){
        return{
            //面板中显示子组件id
            active:"menu",
            //创建数组保存图片焦点状态
            currentIndex:[
                {isSelect:true},
                {isSelect:false},
                {isSelect:false},
                {isSelect:false},
                {isSelect:false},
            ]
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
    }
},
      components:{
          "tabbar":TabBar,
          "tongzhi":tongzhi
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
</style>