// 登录页面
<template>
    <div>
        <div class="div_style_big">
            <div class="div_style_1">
                <router-link to="/Sign"><img src="../assets/pic/web_back.png" alt=""></router-link>     
            </div>
            <div class="div_style_2">
                <span>密码登录</span>
                <span>使用你在美食随手拍设置的密码登录</span> 
            </div>  
            <div class="div_style_3">
                <input style="border:none;outline:medium;" placeholder="手机号码/用户名" v-model="uname" :attr="{autofocus:true}">
                <input style="border:none;outline:medium;" class="input_style" placeholder="密码" v-model="upwd" :type="type">
                <a href="javascript:;" @click="change">
                    <img :src="imgs[i]" alt="">
                </a>
                <button @click="fun">登录</button>
            </div>
            <div class="div_style_4">
                <router-link to="/Sign">手机验证码登录</router-link>
                <a href="">找回密码</a>
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
           uname:"",
           upwd:"",
           type:"password",
           imgs:[
               require("../assets/pic/password_hide_icon.png"),
               require("../assets/pic/password_show_icon.png"),
           ],
           i:0,
        }
    },
    methods: {
        //axios请求
        fun(){
            var uname=this.uname
            var upwd=this.upwd
            var url="login"
            var obj={uname:uname,upwd:upwd}
            this.axios.get(
                url,
                {params:obj}
                ).then(res=>{
                    if(res.data.code<0){
                        this.$messagebox("消息","用户名密码有误")
                    }else{
                        this.$router.push("/User")
                    }
                })
        },
        //密码框变化及图片
        change(){
            if(this.type=="password"){
               this.type="text";
               this.i=1
            }else{
                this.type="password";
                this.i=0
            }

        }
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
      .div_style_1 a img{
          width:30px;
          height:30px;
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
          height:180px;
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
      .input_style{
          display: block;
          width: 355px;
          height: 50px;
          font-size: 20px;
          border:#fff;
          border-bottom:1px solid #999 ;
          margin-bottom: 5px;
      }
      .div_style_3 a{
          position: absolute;
          right: 10px;
          top:73px;
      }
      .div_style_3 a img{
          width:20px;
          height:20px;
      }
      .div_style_3 button{
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
      /* 验证与找回 */
      .div_style_4{
          width: 355px;
          height: 180px;
      }
      .div_style_4 a:first-child{
          display: flex;
          float: left;
          color: rgb(236, 148, 148);
          text-decoration: none;
      }
      .div_style_4 a:last-child{
          display: flex;
          float: right;
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