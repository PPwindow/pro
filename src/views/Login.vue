// 登录页面
<template>
    <div>
       用户名<input type="text" v-model="uname"><br>
       密  码<input type="password" name="" id="" v-model="upwd"><br>
       <button @click="fun">提交</button>
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
                        alert("登录成功")
                    }
                })
        }
    },
}
</script>
<style scoped>

</style>