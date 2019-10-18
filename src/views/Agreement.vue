<template>
    <div>
        <div class="div_style_big">
            <div class="div_style_1">
                <router-link to="/Login"><img src="../assets/user/web_back.png" alt=""></router-link>
                <router-link to="/Login"><img src="../assets/user/web_close.png" alt=""></router-link>
            </div>
            <div class="div_style_2">
                <span>协议............</span>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    
}
</script>
<style scoped>
      .div_style_big{
          margin: 0px 10px;;
          padding: 0;
      }
      .div_style_1{
          width:355px;
          height:25px;
          margin-top:10px;
          margin-bottom: 10px;
      }
      .div_style_1 a:first-child{
          display: flex;
          float: left;
      }
      .div_style_1 a:last-child{
          display: flex;
          float: right;
      }
      .div_style_1 a img{
          width:30px;
          height:30px;
      }
</style>