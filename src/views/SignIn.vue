<template>
  <div id="signin">
      <div class="topimgs">
        <img :src="require('../../assets/signin/back_icon_mini_gray.png')">
        <img :src="require('../../assets/signin/user_setting_icon_black.png')">
      </div>
      <div class="title">
        <h2>验证码登录</h2>
        <p>接收手机验证码，快速注册或登录</p>
      </div>
      <!--添加输入框 用户名-->
      <mt-field type="text" label="用户名" placeholder="6~12位字母或数字" @blur.native.capture="Uname()" v-model="uname" :attr="{autofocus:true}"></mt-field>
      <!--添加输入框 密码 43-->
      <mt-field type="password" label="密码" placeholder="6~12位字母或数字" @blur.native.capture="Upwd1" v-model="upwd1"></mt-field>
      <!--添加输入框 在次输入密码 43-->
      <mt-field type="password" label="确认密码" placeholder="6~12位字母或数字" @blur.native.capture="Upwd2" v-model="upwd2"></mt-field>
      <!--添加输入框 电话号码-->
      <mt-field type="number" label="手机号" placeholder="+86|008--" class="mtphone" @blur.native.capture="Phone" @change.native="onchange" v-model="phone"></mt-field>
      <!-- 验证码 -->
      <div class="yanzhengma">
        <input type="text" placeholder="请输入验证码" v-model="yzm"  @blur="Yzm">
        <mt-button size="small" type="primary" @click="acquire" :disabled="btn1" v-text="btntext"></mt-button>
      </div>
      <!--添加按钮   提交-->
      <mt-button size="large" type="danger" :disabled="btn2" class="button">提交</mt-button>
  </div>
</template>
<script>
export default {
  data() {
    return {
      uname: "", //双向绑定用户名
      upwd1: "", //双向绑定密码1
      upwd2: "", //双向绑定密码2
      phone: "", //双向绑定手机号
      btn1: true, //获取验证码默认禁用
      btn2: true, //提交按钮默认禁用
      yzm: "", //验证码
      btntext: "点击获取验证码"
    };
  },
  methods: {
    //msg.split(" ").join("").length = 0
    fn() {
      if (
        this.uanme == "" ||
        this.upwd1 == "" ||
        this.upwd2 == "" ||
        this.phone == "" ||
        this.yzm == ""
      ) {
        this.btn2 = true;
      } else {
        this.btn2 = false;
      }
    },
    //失去焦点事件
    //(1)用户名
    Uname() {
      //1:创建用户名正则表达式
      var ureg = /^[a-z0-9]{6,12}$/i;
      if (this.uname == "") {
        //如果用户名为空提示消息
        this.$messagebox("提示", "用户名不能为空");
      } else if (ureg.test(this.uname) == false) {
        //如果验证没通过显示确认消息框
        this.$messagebox("提示", "用户名格式不正确");
        //停止函数执行
      return;        
      }
      this.fn();
    },
    //(2)密码
    Upwd1() {
      //创建密码正则表达式
      var p1reg = /^[a-z0-9]{6,12}$/i;
      if (this.upwd1 == "") {
        this.$messagebox("提示", "用户密码不能为空");
      } else if (p1reg.test(this.upwd1) == false) {
        this.$messagebox("提示", "用户密码格式不正确");
        //停止函数
         return;
      }
      this.fn();
    },
    //(3)确认密码
    Upwd2() {
      if (this.upwd2 == "") {
        this.$messagebox("提示", "确认密码不能为空");
      } else if (this.upwd2 != this.upwd1) {
        this.$messagebox("提示", "两次输入的密码不对应,请重新输入!");
      return;
      }
      this.fn();
    },
    //(4)电话号码
    Phone() {
      //创建电话号码正则表达式
      var preg = /^((\+86|0086)\s+)?1[3-9]\d{9}$/;
      if (this.phone == "") {
        //当电话号码为空提示语
        this.$messagebox("提示", "电话号码不能为空");
      } else if (preg.test(this.phone) == false) {
        //当正则匹配为false,提示语
        this.$messagebox("提示", "电话号码格式不正确");
        return;
      }
      this.fn();
    },
    onchange() {
      console.log(1111);
      var preg = /^((\+86|0086)\s+)?1[3-9]\d{9}$/;
      if (preg.test(this.phone) == false) {
        this.btn1 = true;
      } else if (preg.test(this.phone) == true) {
        this.btn1 = false;
      }
      console.log(222);
    },
    //(5)验证码输入框失去焦点事件
    Yzm() {
      //创建电话号码正则表达式
      var yreg = /^\d{6}$/;
      if (this.yzm == "") {
        //当验证码为空提示语
        this.$messagebox("提示", "验证码不能为空");
      } else if (yreg.test(this.yzm) == false) {
        //当正则匹配为false,提示语
        this.$messagebox("提示", "验证码格式不正确");
        return;
      }
      this.fn();
    },
    //获取验证码按钮事件
    acquire() {
      var time = 59; //定义剩下的秒数
      this.btn1 = true; //点击后禁用按钮btn1
      //var btn1 = this.btn1;
      //console.log("这是外部的1:" + btn1);
      //var btntext = this.btntext;
      //console.log("这是外部的2:" + btntext);
      this.btntext = time + "秒";
      var timer = setInterval(()=> {
       // console.log("这是定时器内的4:" + btntext);
        //这里timer无需定义在全局
        if (time == 0) {
          //当倒计时到0时，清除定时器,按钮恢复
          clearInterval(timer); //清除定时器
          this.btn1 = false; //按钮不禁用
          this.btntext = "点击获取验证码"; //按钮的内容再修改回来
          time = 59; //执行完之后,从新给time赋值为59
          //提醒:这里的btn不能写成this,因为在定时器里,this指向的是window
          //而btn...这句话是在setInterval里;如果一旦用this;定时器内必须用箭头函数,不然this不能访问data里的变量
        } else {
          //否则继续执行(倒计时还没结束)
          this.btntext = time + "秒";
          time--; //每次调用一次减1(这里是周期定时器，每1秒调用一次,所以每秒减1)
        }
      }, 1000);
      console.log(timer)
    }
  }
  // mounted: {
  //   //  fn(){
  //   //   if(this.uanme=='' || this.upwd1=='' || this.upwd2=='' || this.phone==''){
  //   //     this.disabled=true;
  //   //   }else{
  //   //     this.disabled=false;
  //   //   }
  //   // },
  // }
};
</script>
<style scoped>
#signin > .topimgs {
  display: flex;
  /* position: fixed;
     z-index:999; */
  width: 100%;
  justify-content: space-between; /*两端对齐*/
  align-items: center; /*y轴上居中显示*/
  padding-left: 7px; /*左右内边距*/
  padding-right: 10px;
  height: 30px;
}
#signin > .topimgs img {
  width: 30px;
}
#signin > .topimgs img:last-child {
  margin-right: 20px;
}
#signin > .mtphone {
  border-bottom: 1px solid #ddd;
}
#signin > .title p {
  margin-top: -19px;
}
#signin > .yanzhengma {
  display: flex;
  width: 100%;
  justify-content: space-between; /*两端对齐*/
  align-items: center; /*y轴上居中显示*/
  height: 43px;
  margin-bottom: 5px;
}
#signin > .yanzhengma > input {
  width: 98px;
  height: 29px;
  margin-left: 10px;
  border: solid 1px #a1d413;
  margin-top: 1px;
}
#signin > .yanzhengma > .button {
  margin-right: 10px !important;
}
</style>

