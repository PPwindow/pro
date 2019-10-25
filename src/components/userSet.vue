<template>
    <div>
        <div>
            <router-link to="/user">
                <img src="" alt="">
            </router-link>
            <button @click="loginPass">退出登录</button>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return{

        }
    },
    methods: {
        //登出清除全局变量code
        loginPass(){
            var n=this.$store.code
            n-=1;
            this.$store.code=n;
            this.$router.push('/Home');
        }
    },
    computed: {
        num(){
            return this.$store.code
        }
    },
}
</script>
<style lang="scss" scoped>

</style>