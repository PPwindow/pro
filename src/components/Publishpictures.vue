<template>
    <div class="all">
        <div class="parent">
            <div>取消</div>
            <div>发布</div>
        </div>
        <!-- 内容 -->
        <div class="allnr">
            <div class="input">
                <input style="border:none;outline:medium;font-size:18px;font-weight:bold" type="text" placeholder="有标题，更好看">
                <input style="border:none;outline:medium;" type="text" placeholder="写内容(必填)">
            </div>
            <div class="loadpicture">
                <div class="loadpictureimg"><img src="../img/upload_pai_image_defult_icon.png" alt=""></div>
                <div class="loadpicturetxt">拍照/选择图片</div>
            </div>
            <div class="joinactivity">
               <input style="border:none;outline:medium;font-size:18px;font-weight:bold" type="text" placeholder="参加活动">
            </div>
        </div>
        <!-- 底部 -->
        <div class="list">
            <div class="showcity">
                <a href="#"><img src="../img/local.png" class="city"></a>
                <span>显示城市</span>
            </div>
            <div class="showtopic">
                <img src="../img/uploadpai_tip_icon.png" class="topic">
                话题
            </div>
            <div class="showlink">
                <img src="../img/paiupload_chooseurl_icon.png" class="link">
                链接
            </div>
            <div class="showfigure">
                <img src="../img/comment_choose_pic_icon.png" class="figure">
                图片
            </div>
        </div>
    </div>
</template>
<script>
export default {
    
}
</script>
<style scoped>
.all{
    position: relative;
}
.parent{
    display: flex;
    justify-content: space-between;/*左右对齐*/
  align-items: center;/*垂直居中*/
  padding: 10px;
  border-bottom: 1px solid #918a8a;
}
    .picture{
        width:20px;
        height:20px;
    }
    .input{
        width:300px;
        height:100px;
        margin-top:15px;
    }
    .loadpicture{
        width:100px;
        height:100px;
        background:#ccc;
        padding-top: 20px;
    }
    .joinactivity{
        width:98%;
        margin: 30px auto 0;
        border: 1px solid slategrey;
    }
    .list{
        position: fixed;
        left: 0;
        bottom: 0;
        display:flex;
        justify-content: space-between;/*左右对齐*/
        align-items: center;/*垂直居中*/
        padding: 10px;
       }
    .list>div{
        margin-right:25px;
    }
    
    .city{
        width:20px;
        height:20px;
    }
    
    .topic{
        width:20px;
        height:20px;
    }
    
    .link{
        width:20px;
        height:20px;
    }
    .figure{
        width:20px;
        height:20px;
    }
    .loadpictureimg{
        width: 30px;
        height: 30px;
        margin: 0 auto;
        background-color:#ccc;
    }
    .loadpictureimg>img{
        max-width: 100%;
        max-height: 100%;
    }
    .loadpicturetxt{
        text-align: center;
        margin-top: 10px;
        font-size: 8px;
        background-color:#ccc;
    }
    .allnr{
        padding: 10px;
    }
</style>   