<template>
<div class="caipu">
  <div class="caipuhd">
    <div class="caipuhdfan">返回</div>
    <div class="caipuhdbian">编辑菜谱</div>
    <div class="caipuhdcun">存草稿</div>
  </div>
  <div class="caipuimg">
    <div class="caipuimgtxt caipuimgtxa">+</div>
    <div class="caipuimgtxt">上传成品图片</div>
    <div class="caipuimgtxt">诱人的成品图是吸引大家的关键</div>
  </div>
  <div class="caipuinp">
    <div class="caipuinpa">
    <input style="border:none;outline:medium;" placeholder="菜谱名称，好的标题万丈光芒" class="caipuinpaa">
    </div>
    <div class="caipuinpb">
    <input style="border:none;outline:medium;" placeholder="菜谱简介，分享美食背后的故事" class="caipuinpbb">
    </div>
  </div>
  <div class="caipucunw">存为草稿</div>
  <div class="caipufab">发布菜谱</div>
  <div class="caipushanc">删除本草稿</div>
</div>
</template>
<script>
export default {
  data() {
    return {
      
    }
  },
}
</script>
<style scoped>
/* .caipu{
  border-top: 1px solid darkgray;
} */
/* 顶部样式 */
.caipuhd{
  height: 45px;
  width: 100%;;
  display: flex;
  justify-content: space-between;/*左右对齐*/
  align-items: center;/*垂直居中*/
  position:fixed;
  left: 0;
  top: 0;
}
.caipuhdfan{
  font-size: 13px;
  margin-left: 20px;
  color: darkgray;
}
.caipuhdcun{
  font-size: 13px;
  margin-right: 20px;
  color: red;
}
/* 上传图片样式 */
.caipuimg{
  width: 100%;
  height: 200px;
  border-top: 1px solid darkgray;
  background-color: darkgray;
  margin-top: 45px;
}
.caipuimgtxt{
  text-align: center;
  background-color: darkgray;
}
.caipuimgtxa{
  margin-top: 50px;
  font-size: 30px;
}

.caipuinp{
  margin-top: 10px;
}
.caipuinpa{
  width: 100%;
  height: 40px;
  line-height: 40px;
}
.caipuinpaa{
  width: 96%;
  height: 30px;
  font-size: 20px;
  margin-left: 2%;
}
.caipuinpb{
  width: 100%;
  height: 30px;
  line-height: 30px;
}
.caipuinpbb{
  width: 96%;
  font-size: 15px;
  margin-left: 2%;
}
.caipucunw{
  height: 40px;
  width: 90%;
  margin: 30px auto 0;
  border: 1px solid rgb(236, 59, 59);
  text-align: center;
  line-height: 40px;
  border-radius:25px;
}
.caipufab{
  height: 40px;
  width: 90%;
  margin: 20px auto 0;
  text-align: center;
  line-height: 40px;
  border-radius:5px;
  background:rgb(236, 59, 59);
  color: #fff; 
  border-radius:25px;
}
.caipushanc{
  height: 40px;
  width: 90%;
  text-align: center;
  margin: 20px auto 0;
}
</style>