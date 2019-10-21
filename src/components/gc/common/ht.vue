<template>
    <div>
        <mt-loadmore>
            <div  v-for="(item,i) of list" :key="i">
                <mt-cell :title="item.title" :to="item.url" is-link></mt-cell>
            </div>
            
        </mt-loadmore>
    </div>
</template>
<script>
export default {
    data(){
        return {
           list:[
                {title:"早餐",url:"/tongzhi"},
                {title:"烘焙",url:"/tongzhi"},
                {title:"晚餐",url:"/tongzhi"},
                {title:"下午茶",url:"/tongzhi"},
                {title:"春日美味",url:"/tongzhi"},
                {title:"踏青",url:"/tongzhi"},
                {title:"二人世界",url:"/tongzhi"},
                {title:"朋友聚会",url:"/tongzhi"},
                {title:"川菜",url:"/tongzhi"},
                {title:"西餐",url:"/tongzhi"},
                {title:"粤菜",url:"/tongzhi"},
            ],
            pno:0
        }
    },
    methods:{
        loadMore(){
            //    1.创建url
            var url='ht';
            //    2.创建obj对象 保存多页
            this.pno++;
            var obj={pno:this.pno};
            //    3.发送axios请求
            this.axios.get(url,{params:obj}).then(res=>{
                console.log(res);
                // this.list=res.data.data;
                //拼接上一页和下一页数组
                var rows = this.list.concat(res.data.data);
                // 赋值
                this.list = rows;
                //    4.接收返回结果并且显示
                console.log(this.list)
            })
        },
        loadTop() {
            // 加载更多数据
            this.$refs.loadmore.onTopLoaded();
        },
        loadBottom() {
            // 加载更多数据
            this.allLoaded = true;// 若数据已全部获取完毕
            this.$refs.loadmore.onBottomLoaded();
        }
    }
    //:top-method="loadTop" :bottom-method="loadBottom" :bottom-all-loaded="allLoaded" ref="loadmore"
}
</script>
<style scoped>
    .mint-cell{
        margin-left: 10px;
        margin-right:20px;
        /* border-bottom: 1px solid #eee; */
    }
</style>