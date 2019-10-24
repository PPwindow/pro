<template>
    <div>
        <div class="div_style_big">
            <div class="div_style_1">
                <input type="text" placeholder="搜索食谱菜单、食材、帖子">
                <a href="">
                     <img :src="img_s[1]" alt="">
                </a>
                <button>今日签到</button>
                <img :src="img_s[0]" alt="">
            </div>
            <mt-swipe :auto="4000" style="width:355px; height:200px" :show-indicators="false">
                <mt-swipe-item v-for="(item,i) of imgs" :key="i">
                    <img :src="item" alt="" style="width:355px;height:200px;">
                </mt-swipe-item>
            </mt-swipe>
            <div class="div_style_2">
                    <span>自制炸鸡，不输炸鸡店！真的太香了</span>
                    <div>
                        <img src="../../../assets/index/index01.png" alt="">
                        <img src="../../../assets/index/index02.png" alt="">
                        <img src="../../../assets/index/index03.png" alt="">
                        <div>
                            <a href="">菜单</a>
                            <span>{{n}}</span>
                            <a href="javascript:;">
                                <img :src="img_s[changecolor]" @click="change"  alt="">
                            </a>
                        </div>
                    </div>
            </div>
            <div class="div_style_2" v-for="(item,i) of img_all" :key="i">
                    <span>{{item.title}}</span>
                    <div>
                        <img :src="item.src" alt="">
                        <img :src="item.src" alt="">
                        <img :src="item.src" alt="">
                        <div>
                            <a href="">{{item.uname}}</a>
                            <span>{{item.num}}</span>
                            <a href="javascript:;">
                                <img src=""   alt="">
                            </a>
                        </div>
                    </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return{
            imgs:[
            require('../../../assets/index/lunbo01.png'),
            require("../../../assets/index/lunbo02.png"),
            require("../../../assets/index/lunbo03.png"),
            require("../../../assets/index/lunbo04.png"),
            require("../../../assets/index/lunbo05.png"),
            ],
            img_s:[
            require("../../../assets/index/main_sign_icon.png"),
            require("../../../assets/index/search_icon_black.png"),
            require("../../../assets/index/banner_fav_icon_gray.png"),
            require("../../../assets/index/fav_selected.png")
            ],
            img_all:[
                {title:"自制炸鸡，不输炸鸡店！真的太香了",src:require("../../../assets/index/index01.png"),uname:"菜单",num:0,},
                {title:"自制炸鸡，不输炸鸡店！真的太香了",src:require("../../../assets/index/index01.png"),uname:"菜单",num:2,},
                {title:"自制炸鸡，不输炸鸡店！真的太香了",src:require("../../../assets/index/index01.png"),uname:"菜单",num:3,}
            ],
            changecolor:2,
            n:0
        }
    },
    methods: {
        change(){
            var i=this.n
            if (this.changecolor==2) {
                this.changecolor=3
                i++;
                this.n=i
            }else{
                this.changecolor=2
                i--
                this.n=i
            }
        }
    },
}
</script>
<style scoped>
   .div_style_big{
       margin: 0px 10px;;
          padding: 0;
   }
   .div_style_1{
       width: 355px;
       height: 40px;
       position:relative;
   }
   .div_style_1 input{
       display: inline-block;
       width: 250px;
       height: 25px;
       border-radius: 5px;
       outline: none;
       border: 1px solid #999;
       
       margin-top: 5px;
       text-align: center;
       line-height: 50px;
   }
   .div_style_1 a img{
       position:absolute;
       width: 18px;
       height: 18px;
       left: 10px;
       top:10px; 
   }
   .div_style_1>img{
       position:absolute;
       width: 18px;
       height: 18px;
       top: 9px;
       right: 70px;
   }
   .div_style_1 button{
       width: 90px;
       height: 25px;
       text-align: right;
       border: 1px solid #999;
       display: inline-block;
       margin-left: 10px;
       font-size: 12px;
       color: #888;
       outline: none;
       line-height: 25px;
       padding-right: 5px;
       border-radius: 5px;
   }
   .mint-swipe .mint-swipe-items-wrap .mint-swipe-item img{
       border-radius: 5px;
   }
   .div_style_2{
       width: 22.1875rem;
       height: 10.55rem;
       margin-top: .3125rem;
   }
   .div_style_2 a{
       text-decoration: none;
       color: #666;
   }
   .div_style_2 div img{
       width: 7.14rem;
       height: 7.5rem;
       border-radius: .3125rem;
       padding: 0px 2px;
   }
   .div_style_2 a div{
       margin-top: .3125rem;
   }
   .img_style_1{
       width: 5px;
       height: 5px;
   }
   .div_style_2>div>div>a>img{
       width:15px;
       height: 15px;
   }
   .div_style_2>div>div>a:last-child{
       margin-left:0.2rem;
   }
   .div_style_2>div>div>span{
       margin-left: 17rem;
       color: #666;
   }
</style>