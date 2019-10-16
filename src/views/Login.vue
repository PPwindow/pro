// 登录页面
<template>
    <div>
        <div class="div_style0">
            <a href="">
                <img src="../assets/pic/web_back.png" alt="">
            </a>
        </div>
        <div class="div_style1">
          <h1>密码登录</h1>
          <span>使用你在美食随手拍设置的密码登录</span><br>  
          <mt-field label="用户名" placeholder="请输入用户名" v-model="uname" :attr="{autofocus:true}"></mt-field>
          <mt-field label="密码" placeholder="请输入密码" v-model="upwd" type="password"></mt-field>
          <a href="">
              <img src="../assets/pic/password_hide_icon.png" alt="">
          </a>
          <br>
          <button @click="fun">登录</button>
       </div> 
       <div class="login_a">
           <a href="">手机验证码登录</a>
           <a href="">找回密码</a>
       </div>
       <span class="span_style">其他登录方式</span>
       <div class="div_style">
           <a href="">
               <img src="../assets/pic/ssdk_oks_classic_wechat.png" alt="">
               <span>微信</span>
           </a>
           <a href="">
               <img src="../assets/pic/ssdk_oks_classic_qq.png" alt="">
               <span>QQ</span>
           </a>
           <a href="">
               <img src="../assets/pic/ssdk_oks_classic_sinaweibo.png" alt="">
               <span>微博</span>
           </a>
       </div>
       <span>登录注册表示同意<a href="">《美食随手拍用户协议》</a></span>
    </div>
</template>
<script>
export default {
    data(){
        return{
           uname:"",
           upwd:"",
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
        }
    },
}
</script>
<style scoped>
     .mintui-field-error:before {
        content: none;
    }
     .div_style0 a img{
         width:30px;
         height:30px;
     }
     .div_style1{
         position: relative;
     }
     .div_style1 img{
         width:25px;
         height:25px;
         position: absolute;
         right: 5px;
         bottom: 80px;
     }
     button{
         display:block;
         width: 100%;
         height:50px;
         text-align: center;
         border-radius: 5px;
         background-color: rgb(240, 167, 167);
         color: #fff;
         font-size: 15px;
     }
     .span_style{
         display: block;
         text-align:center;
         width: 100%;
         height: 200px;
         
     }
     .div_style a{
        display: inline-block;
        color:#000;
        font-size:15px;
        width: 100px;height:100px;
        margin-left: 15px;
     }
     .div_style a img{
         width:50px;
         height:50px;
         margin:0px 25px; 
     }
     .div_style a span{
         display: block;
         text-align: center;
     }
</style>