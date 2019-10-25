<template>
<div>
<input @change="fileChange($event)" type="file" id="upload_file" multiple style="display: none"/>

<div class="sctuadd" @click="chooseType">
       点击添加图片
</div>
<div class="add-img" v-show="imgList.length">
    <p class="sctuts">
      最多上传6张，还可上传
      <span v-text="6-imgList.length"></span>张
    </p>
    <ul class="sctuul">
        <li v-for="(url,index) in imgList" :key="index">
            <div class="sctuulsc"  @click.stop="delImg(index)">x</div>
            <div class="sctuimg"><img :src="url.file.src"/></div>
        </li>
    </ul>
</div>
<div @click="huoqu">zzzzzzzz</div>
</div>
</template>
<script>
export default {
  data() {
    return {
    showFace: false,
    imgList: [],
    size: 0,
    limit:6, //限制图片上传的数量
    imgsrc:[]
    }
  },
  methods:{
      huoqu(){
        for(var i=0;i<this.imgList.length;i++){
          this.imgsrc=this.imgList[i].file.src
          console.log(this.imgsrc)
        }
          
      },
      chooseType() {
                document.getElementById('upload_file').click();
                // console.log(imgList)
            },
      fileChange(el) {
                if (!el.target.files[0].size) return;
                this.fileList(el.target);
                el.target.value = ''
            },
      fileList(fileList) {
                let files = fileList.files;
                for (let i = 0; i < files.length; i++) {
                    //判断是否为文件夹
                    if (files[i].type != '') {
                        this.fileAdd(files[i]);
                    } else {
                        //文件夹处理
                        this.folders(fileList.items[i]);
                    }
                }
            },
            //文件夹处理
      folders(files) {
            let _this = this;
            //判断是否为原生file
            if (files.kind) {
                  files = files.webkitGetAsEntry();
                }
            files.createReader().readEntries(function (file) {
                    for (let i = 0; i < file.length; i++) {
                        if (file[i].isFile) {
                            _this.foldersAdd(file[i]);
                        } else {
                            _this.folders(file[i]);
                        }
                    }
                });

            },
      foldersAdd(entry) {
                let _this = this;
                entry.file(function (file) {
                    _this.fileAdd(file)
                })
            },
      fileAdd(file) {
            if (this.limit !== undefined) this.limit--;
            if (this.limit !== undefined && this.limit < 0) return;
                //总大小
            this.size = this.size + file.size;
                //判断是否为图片文件
            if (file.type.indexOf('image') == -1) {
                    this.$dialog.toast({mes: '请选择图片文件'});
                } else {
                    let reader = new FileReader();
                    let image = new Image();
                    let _this = this;
                    reader.readAsDataURL(file);
                    reader.onload = function () {
                        file.src = this.result;
                        image.onload = function(){
                            let width = image.width;
                            let height = image.height;
                            file.width = width;
                            file.height = height;
                            _this.imgList.push({
                                file
                            });
                            console.log( _this.imgList);
                        };
                        image.src= file.src;
                    }
                }
            },
      delImg(index) {
                this.size = this.size - this.imgList[index].file.size;//总大小
                this.imgList.splice(index, 1);
                if (this.limit !== undefined) this.limit = 6-this.imgList.length;
            },

  }
}
</script>
<style scoped>
li{
  list-style: none;
}
.sctuimg{
  width: 100%;
  height: 200px;
}
.sctuimg>img{
  max-width: 100%;
}
.sctuul{
  width: 100%;
  height: 100%;
  
}
.sctuul>li{
  display: inline-block;
  width: 100%;
  height: 250px;
  text-align: center;
}
.sctuulsc{
  width: 100%;
  height: 30px;
  text-align: center;
  background-color: red;
  color: #fff;
  font-size: 25px;
  line-height: 30px;
}
.sctuadd{
  width: 100%;
  height: 50px;
  text-align: center;
  line-height: 50px;
  background-color: cadetblue;
}
.sctuts{
  width: 100%;
  height: 30px;
  line-height: 30px;
  text-align: center;
}


    

    
   

    


 

  


    
</style>