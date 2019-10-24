<template>
    <div>
        <div class="div_style_big">
            <div class="div_style_1">
                <a href="">
                    <img src="../assets/user/share_user_banner_black.png" alt="">
                </a>
                <router-link to="/userSet">
                   <img src="../assets/user/user_setting_icon_black.png" alt="">
                </router-link>
            </div>
            <div class="div_style_2">
                <a href="">
                    <img src="../assets/user/user_setting_icon_black.png" alt="">
                </a>
                <div class="div_style_3">
                    <a href="">用户名</a>
                    <img src="" alt="">
                    <ul class="ul_style_1">
                        <ol>
                           <a href="">
                               <span>0</span>
                               <span>赞与收藏</span> 
                           </a>
                        </ol>
                        <ol>
                            <a href="">
                               <span>0</span>
                               <span>粉丝</span> 
                           </a>
                        </ol>
                        <ol>
                            <a href="">
                               <span>10</span>
                               <span>关注</span> 
                           </a>
                        </ol>
                    </ul>
                </div>
            </div>
            <div class="div_style_4">
                <a href="">
                    <span>0</span>
                    你好
                </a>
                <img class="img_style_1" src="../assets/user/user_setting_icon_black.png" alt="">
                <img class="img_style_2" src="../assets/user/user_setting_icon_black.png" alt="">
                <button>福利社</button>
                <button>任务奖励</button>
            </div>
            <ul class="ul_style_2">
                <li v-for="(lists,i) of list" :key="i" data-i="i" :class="isShow==i?'active':''" @mouseover="handleover($event,i)">{{lists.title}}
                </li>
            </ul>
            <div v-for="(lis,i) of list" :key="i" data-i="i" v-show="isShow==i">{{lis.content}}</div>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return{
            isShow:0,
               list:[
                   {title:'菜谱',content:`菜谱`},
                   {title:'帖子',content:`帖子`},
                   {title:'收藏',content:`收藏`}
               ]
        }
    },
    methods: {
              handleover($event,i){
                this.isShow=i;
              },
              handleout($event,i){
                this.isShow=i
              },
            },
    components:{
        
    }
}
</script>
<style lang="scss" scoped>
    .div_style_big{
        margin: 0px 10px;;
        padding: 0;
    }
    .div_style_1{
        width:355px;
        height: 30px;
        margin:10px 0px;
        position: relative;
    }
    .div_style_1 a:first-child{
        position: absolute;
        right: 60px;
    }
    .div_style_1 a:last-child{
        position: absolute;
        right: 15px;
    }
    .div_style_1 a img{
        width: 25px;
        height: 25px;
    }
    .div_style_2{
        width: 22.1875rem;
        height: 9.375rem;
        a{
            display: inline-block;
            width: 5rem;
            height: 5rem;
            img{
                width: 5rem;
                height: 5rem;
                border-radius: 50%
            }
        }
    }
    .div_style_3{
        display: inline-block;
        width:16rem;
        height: 5rem;
        margin-left: .3125rem;
        a{
            text-decoration: none;
            color:#000;
        }
        .ul_style_1{
            ol{
                display: inline-block;
                a{
                   span{
                       display: block;
                   }
                }
            }
        }
    }
    .div_style_4{
        width: 22.1875rem;
        height: 25px;
        position: relative;
        a{
            display: inline-block;
            width: 9.875rem;
            height: 1.5625rem;
            text-decoration: none;
            color:#000;
        }
        img{
            width: 1.25rem;
            height: 1.25rem;
        }
        button{
            width: 5.5rem;
            height: 1.5625rem;
            border: 1px solid rgb(236, 148, 148);
            background-color: rgb(236, 148, 148);
            border-radius: .3125rem;
            color: #fff;
            text-align: right;
            padding-right: .125rem;
            margin-left: .3125rem;
        }
    }
    .div_style_4 .img_style_1{
       position: absolute;
       left: 10.5rem;
       top:.125rem;
    }
    .div_style_4 .img_style_2{
       position: absolute;
       right:4.625rem;
       top:.125rem;
    }
    .ul_style_2{
            margin-top:.625rem;
            padding:0;
            list-style: none;
            width: 22.1875rem;
            height:2.5rem;
            background:#ddd;
            line-height: 2.5rem;
            border-bottom: 1px solid #000;
        li{
            width:7.39rem;
            text-align: center;
            float:left;
            cursor:pointer;
            transition:all .2s linear
        }
    }
       .ul_style_2 li.active{
            color:#e4393c;
        }
</style>