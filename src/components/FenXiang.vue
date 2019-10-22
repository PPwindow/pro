<template>
    <div id="container">
        <div class="touxiang"><img :src="require('../../assets/img/meiguihua.jpg')" ></div>
        <div class="right_body">
            <div>
               <h3>肥肥美食</h3>
               <p>9小时前</p>
               <h3>继续蛋糕、酸奶</h3>
               <h3>#早餐#</h3>
            </div>
            <div class="imgcontainer">
                <div class="left_img"><img :src="require('../../assets/img/mianbao1.jpg')"></div>
                <div class="right_img">
                    <div><img :src="require('../../assets/img/mianbao2.jpg')"></div>
                    <div><img :src="require('../../assets/img/mianbao3.jpg')"></div>
                    <div><img :src="require('../../assets/img/mianbao4.jpg')"></div>
                </div>
            </div>
            <div class="bottom_img">
                <div class="shoucang">
                    <img :src="shoucang_img" @click="sc">
                </div>
                <div class="dianzhan">
                    <span v-text="dianzan"></span>
                    <img :src="dianzan_img" @click="dz">
                </div>
                <div class="pinlun">
                    <span v-text="pinlun"></span>
                    <img :src="pinlun_img" @click="pl">
                </div>
            </div>
            <div class="cut_off_rule"></div>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return{
            shoucang_img:require('../../assets/img/banner_fav_icon_gray.png'),
            dianzan:8,
            dianzan_img:require('../../assets/img/bottom_zan_gray.png'),
            pinlun:6,
            pinlun_img:require('../../assets/img/comment_unselect.png'),
        }
    },
    methods:{
        //(1)收藏事件
        sc(){
            if(this.shoucang_img==require('../../assets/img/banner_fav_icon_gray.png')){
                this.shoucang_img=require('../../assets/img/banner_fav_icon_red.png');
            }else{
                this.shoucang_img=require('../../assets/img/banner_fav_icon_gray.png');
            }
        },
        dz(){
            var n=this.dianzan;
            if(this.dianzan_img==require('../../assets/img/bottom_zan_gray.png')){
                this.dianzan_img=require('../../assets/img/bottom_zan_red.png');
                n++;
                this.dianzan=n;
            }else{
                this.dianzan_img=require('../../assets/img/bottom_zan_gray.png');
                n--;
                this.dianzan=n;
            }
        },
        pl(){}
    }
}
</script>
<style scoped>
   #container>div{
       width: 358px;
       float: left;
   }
   #container :after{
       content:""; /*空内容*/
       display:block;/*显示方式:块级*/
       clear:both;/*清除浮动带来的影响*/
   }
   #container .touxiang{
       width: 40px;
       height: 40px;
       border-radius:50%;
   }
   #container .touxiang img{
       width: 40px;
       height: 40px;
       border-radius: 50%;
   }
   #container .right_body{
       width: 308px;
       margin-top: -21px;
       margin-left: 10px;
   }
   #container .right_body div p{
       font-size:14px;
       color:#ddd;
       margin-top: -11px;
   }
   #container .right_body :first-child :nth-child(3){
       margin-top: -5px;
   }
   #container .right_body :first-child :last-child{
       color:#f00;
   }
   #container .imgcontainer{
      display: flex;
      /* position: fixed;
      z-index:999; */
      width: 312px;
      height:158px;
      justify-content: space-between; /*两端对齐*/
      align-items: center; /*y轴上居中显示*/
      /* padding-left: 7px; 
      padding-right: 7px; */
      background-color:#e8e8e8;
   }
   #container .imgcontainer .left_img{
      width: 152px;
      height: 100%;
   }
   #container .imgcontainer .left_img img{
       width: 152px;
       height: 158px;
   }
   #container .imgcontainer .right_img{
      width: 152px;
      height: 100%;
      display:flex;
      justify-content: space-between; /*两端对齐*/
      align-items: center;/*交叉轴轴上居中显示*/
      flex-wrap:wrap;/*项目总宽度大于容器宽度是否换行:换行*/
   }
   #container .imgcontainer .right_img :not(:last-child){
       width: 74px;
       height: 77px;
   }
   #container .imgcontainer .right_img :nth-child(3){
       width: 100%;
       height: 77px;
   }
   #container .imgcontainer .right_img :not(:last-child) img{
       width: 74px;
       height: 77px;
   }
   #container .imgcontainer .right_img :nth-child(3) img{
       width: 152px;
       height: 77px;
   }
   #container .right_body .bottom_img{
       width: 308px;
       margin-left: 177px;
       margin-top: 8px;
   }
   #container .right_body .bottom_img div{
       margin-right: 33px;
       float:left;
   }
   #container .right_body .bottom_img div img{
       width: 16px;
       height: 16px;
   }
   #container .right_body .bottom_img div span{
       display:inline-block;
       margin-right: 3px;
       font-size:12px;
       color:#ddd;
   }
   #container .right_body .bottom_img :after{
       content:""; 
       display:block;
       clear:both;
   }
   #container .right_body .cut_off_rule{
       width: 120%;
       height: 0;
       border-top: 1px solid #ddd;
       margin-top: 6px;
   }
</style>
