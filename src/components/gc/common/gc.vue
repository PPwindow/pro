<template>
  <div>
    <!-- <h3>广场</h3> -->
    <div class="search-btn">
      <input type="text" placeholder="搜索帖子" class="search" />
      <button class="my-btn">任务奖励</button>
    </div>
    <div id="container">
        <div class="viewport">
            <div class="top_img_container" @touchstart.prevent="sedown" :style="'left:'+positionX+';'">
                <div v-for="(item,i) of gc_header" :key="i">
                    <img :src="item.url">
                    <span v-text="item.title"></span>
                </div>
            </div>
        </div>
    </div>
  </div>
</template>
<script>
export default {
  data(){
        return{
            positionX:"0px",
            gc_header:[
                {lid:1,url:require('../../../assets/img/plaza_header_1.jpg'),title:"秋季水果"},
                {lid:2,url:require('../../../assets/img/plaza_header_2.jpg'),title:"一周元气早餐"},
                {lid:3,url:require('../../../assets/img/plaza_header_3.jpg'),title:"最美之物"},
                {lid:4,url:require('../../../assets/img/plaza_header_4.jpg'),title:"疯狂美食家"},
                {lid:5,url:require('../../../assets/img/plaza_header_5.jpg'),title:"早餐"},
                {lid:6,url:require('../../../assets/img/plaza_header_6.jpg'),title:"午餐"},
                {lid:7,url:require('../../../assets/img/plaza_header_7.jpg'),title:"晚餐"},
                {lid:8,url:require('../../../assets/img/plaza_header_8.jpg'),title:"下午茶"},
            ]
        }
    },
    methods:{
        sedown(e){
           // e.preventDefault(); //去除图片的默认被鼠标拖动的事件
           //var op = e.target;    //获取点击目标元素
           var op=e.currentTarget  //获取绑定事件元素
           var parent=e.currentTarget.parentElement //获取绑定事件元素的父元素
           //手指在绑定事件元素中的坐标=手指在视口中坐标(e.clientX)-元素在文档中的位置(op.offsetLeft)
        //注意:这里移动端和pc端有点差异。移动端也许不止一个手指触控;把所有的手指触控事件,按先触控的后顺序放在touches数组中的
           var disX = e.touches[0].clientX - op.offsetLeft;//第一个手指触控
           var parentX = parent.offsetLeft;//父元素在文档中的横向位置坐标
            document.ontouchmove = (e)=>{  //当手指触控屏幕(鼠标按下),触发移动的事件
                var n = parseFloat(this.positionX); //当手移动获取目标元素left一开始的值
            //只有当这个值在指定的范围0~-660期间,才把移动的距离赋值给left,否则不赋值
            console.log(n);
                if(n<=0 && n>=-660){
            //用鼠标在文档中的坐标-鼠标位置到绑定事件元素左缘的距离-父元素到文档左缘的距离=父元素与移动元素左边相差的距离
                   //并把这个值赋值给移动元素的left属性;移动元素就是绑定事件的元素(img的父元素的父元素div)
                    var left = e.touches[0].clientX - disX - parentX;  
                    //条件满足:将父元素与移动元素的距离赋值给移动元素的left
                    this.positionX = left +'px';           
                }else{                  
                //不满足条件就把0或-660赋值给left,并取消移动事件
                  document.onmousemove = null;                 
                  this.positionX =  n>=0? 0+'px'  
                                  :  -660+'px';                  
                }
            }
                document.ontouchend = (e) => {//当手指抬起离开屏幕,清除移动事件
                    document.onmousemove = null;
                  //  document.onmouseup = null;
                }         
        }
    },
};
</script>
<style scoped>
#container{
        width: 404px;
        margin-left: 10px;
    }
    #container .viewport{
        width: 404px;
        height: 150px;
        overflow: hidden;
        position: relative;
    }
    #container .viewport .top_img_container{
        width: 1050px;
        height: 150px;
        position:absolute;
        left:0; /*660px*/
        background-color: greenyellow;
    }
    #container .viewport .top_img_container>div{
        width: 124px;
        height: 124px;
        float:left;
    }
    #container .viewport .top_img_container>div>img{
        width: 128px;
        height: 128px;
        border-radius:10px;
    }
    #container .viewport .top_img_container>div{
        font-size:15px;
        text-align: center;
    }
    #container .top_img_container :not(:first-child){
        margin-left: 6px;
    }
.search-btn {
  margin-top: 20px;
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  margin-left: 10px;
  margin-right: 10px;
}
.search {
  background-image: url(../../../assets/pic/search.png);
  background-repeat: no-repeat;
  background-size: 16px 16px;
  background-position: 10px 7px;
  background-color: #f5f5f5;
  outline: none;
  border: 1px solid #ddd;
  border-radius: 6px;
  width: 65%;
  height: 30px;
  font-size: 14px;
  padding-left: 32px;
}
.my-btn {
  background-color: #f5f5f5;
  margin: 0;
  margin-left: 10px;
  padding: 0px;
  padding-left: 32px;
  padding-right: 10px;
  border: 1px solid transparent;
  border-radius: 6px;
  outline: none;
  border: 1px solid #ddd;
  width: 35%;
  height: 32px;
  background-image: url(../../../assets/pic/main_duty_icon.png);
  background-repeat: no-repeat;
  background-size: 16px 16px;
  background-position: 10px 7px;
  font-size: 14px;
  color: #777;
}
</style>