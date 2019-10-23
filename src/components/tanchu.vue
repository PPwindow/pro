<template>
<div class="tanchu">
  <div class="fab" @click="shou">发表</div>
  <div class="tankuang" v-show="shoua">
    <div class="tanchulie">
      <div>上传</div>
      <div>图片</div>
      <div>文字</div>
      <div>连接</div>
    </div>
    <div class="fanhui" @click="fanh">返回</div>
  </div>
</div>
</template>
<script>
export default {
  data() {
    return {
      shoua:false
    }
  },
  methods:{
    shou(){
      this.shoua=true;
    },
    fanh(){
      this.shoua=false;
    }
  }
}
</script>
<style scoped>
.tanchu{
  position:relative;
  top:0;
  z-index: 9999;
}
.fab{
  width: 300px;
  height: 50px;
  border: 1px solid slateblue;
}
.tankuang{
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.384);
}
.tanchulie{
  position: absolute;
  bottom: 80px;
  left: 0;
  display: flex;
}
.tanchulie>div{
  margin-left: 50px;
}
.fanhui{
  position: absolute;
  bottom: 20px;
  left: 50%;
  margin-left: -20px;
}

</style>