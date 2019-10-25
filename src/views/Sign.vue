// 登录页面
<template>
    <div>
        <div class="div_style_big">
            <div class="div_style_1">
                <router-link to="/Home"><img src="../assets/pic/web_back.png" alt=""></router-link>
                <a href="">
                    <img src="../assets/user/user_setting_icon_black.png" alt="">
                </a>
            </div>
            <div class="div_style_2">
                <span>验证码登录</span>
                <span>接收手机验证码，快速注册或登录</span> 
            </div>  
            <div class="div_style_3" :style="height1">
                <input style="border:none;outline:medium;" placeholder="手机号码" v-model="photo" :attr="{autofocus:true}">
                <div :style="eject" class="eject_style_1">
                    <input type="text" v-model="message" style="border:none;outline:medium;" placeholder="请输入验证码">
                    <button style="outline:medium;" @click="ajax">{{text}}</button>
                </div>
            </div>
            <div class="div_style_4" :style="height2">
                <button style="outline:medium;" class="button_style_1" @click="fun">确认</button>
                <router-link to="/Login">用户名密码登录</router-link>
            </div>
            <div class="div_style_5">
                <span>其他登录方式</span>
                <a href="">
                    <img src="../assets/pic/ssdk_oks_classic_wechat.png" alt="">
                    微信
                </a>
                <a href="">
                    <img src="../assets/pic/ssdk_oks_classic_qq.png" alt="">
                    QQ
                </a>
                <a href="">
                    <img src="../assets/pic/ssdk_oks_classic_sinaweibo.png" alt="">
                    微博
                </a>
            </div>
            <span class="span_style">登录注册表示同意<router-link to="/Agreement">《美食随手拍用户协议》</router-link></span>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return{
           photo:"",
           message:"",
           eject:"display:none", 
           height1:"height:40px",
           height2:"height:250px",
           text:"获取验证码"
        }
    },
    methods: {
        //axios请求 
        fun(){
            var eject=this.eject;
            var height1=this.height1;
            var height2=this.height2;
            eject="display:block"
            height1="hieght:40px"
            height2="height:220px"
            this.height1=height1;
            this.height2=height2;
            this.eject=eject;   
        },
        ajax(){
            var text=this.text 
            var n=60; 
            var times=setInterval(()=>{
                n--;
                if(n==-1){
                   clearInterval(times)
                   this.text="获取验证码";
                }else{
                    text=n+"s";
                    this.text=text;
                }
            },1000)
            
        }
        //     var uname=this.uname
        //     var upwd=this.upwd
        //     var url="login"
        //     var obj={uname:uname,upwd:upwd}
        //     this.axios.get(
        //         url,
        //         {params:obj}
        //         ).then(res=>{
        //             if(res.data.code<0){
        //                 this.$messagebox("消息","用户名密码有误")
        //             }else{
        //                 this.$router.push("/User")
        //             }
        //         })
        // },
        //密码框变化及图片
    //     change(){
    //         if(this.type=="password"){
    //            this.type="text";
    //            this.i=1
    //         }else{
    //             this.type="password";
    //             this.i=0
    //         }

    //     }
    },
    watch:{
        
    }
}
</script>
<style lang="scss" scoped>
/* 总体 */
      .div_style_big{
          margin: 0px 10px;;
          padding: 0;
      }
      /* 返回 */
      .div_style_1{
          width:355px;
          height:25px;
          margin-top:10px;
          margin-bottom: 10px;
      }
      .div_style_1 a:first-child img{
          width:30px;
          height:30px;
      }
      .div_style_1 a:last-child{
          float: right;
      }
      .div_style_1 a:last-child img{
          width:25px;
          height:25px;
          margin-right: 5px;
          margin-top: 5px;
      }
      /* 第二行文字 */
      .div_style_2{
          width:355px;
          height: 75px;
      }
      .div_style_2 span:first-child{
          display: block;
          color: #000;
          font-size: 20px;
          font-weight: 900;
          margin-bottom: 5px;
      }
      .div_style_2 span:last-child{
          color: #999;
          font-size: 14px;
      }
      /* 登录框 */
      .div_style_3{
          width:355px;
          color: #999;
          position: relative;
      }
      .div_style_3 input:first-child{
          display: block;
          width:355px;
          height: 50px;
          font-size: 20px;
          border:#fff;
          border-bottom:1px solid #999 ;
          margin-bottom: 5px;
      }
      .button_style_1{
          display: block;
          width: 355px;
          height:40px;
          color: #fff;
          font-size: 15px;
          background-color: rgb(236, 148, 148);
          border:1px solid rgb(236, 148, 148);
          border-radius: 5px;
          margin-top: 20px;
      }
      .eject_style_1{
          width: 22.1875rem;
          height: 2.5rem;
          input{
              display: inline-block !important;
              width: 15.9375rem !important;
              height: 2.5rem !important;
              border-bottom:1px solid #999 !important;
          }
          button{
              display: inline-block;
              width: 5.3rem;
              height: 2.5rem;
              border:none;
              background-color: rgb(236, 148, 148);
              font-size: .9375rem;
              border-radius: .3125rem;
              color: #fff;
          }
      }
      /* 转到用户名密码登录页 */
      .div_style_4{
          width: 355px;
         
      }
      .div_style_4 a{
          display: flex;
          float: left;
          color: rgb(236, 148, 148);
          text-decoration: none;
      }
      /* 其他登录方式 */
      .div_style_5{
          width: 355px;
          height: 100px;
      }
      .div_style_5 span:first-child{
          display: block;
          text-align: center;
      }
      .div_style_5 a{
          display: inline-block;
          text-align: center;
          text-decoration: none;
          margin-left: 58px;
          color:#000;
      }
      .div_style_5 a img{
          display:block;
          width:40px;
          height: 40px;
      }
      /* 协议 */
      .span_style{
          display: block;
          width: 355px;
          height:25px;
          text-align: center;
          margin-left: 10px;
      }
      .span_style a{
          color:rgb(236, 148, 148);
          text-decoration: none
      }
</style>