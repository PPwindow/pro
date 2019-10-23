<template>
    <div>
        <mt-navbar v-model="selected" fixed>
            <mt-tab-item id="tab1">
                <span style="font-size:18px;">关注</span>
            </mt-tab-item>
            <mt-tab-item id="tab2">
                <span style="font-size:18px;">推荐</span>
            </mt-tab-item>
            <mt-tab-item id="tab3">
                <span style="font-size:18px;">分类</span>
            </mt-tab-item>
            <mt-tab-item id="tab4">
                <span style="font-size:18px;">食材</span>
            </mt-tab-item>
            <mt-tab-item id="tab5">
                <span style="font-size:18px;">视频</span>
            </mt-tab-item>
        </mt-navbar>
        <mt-tab-container v-model="selected">
            <mt-tab-container-item id="tab1">
                <div style="height:55px"></div>
                <h3>投票</h3>
                <h3>投票</h3>
                <h3>投票</h3>
                <h3>投票</h3>
                <h3>投票</h3>
                <h3>投票</h3>
                <h3>投票</h3>
            </mt-tab-container-item>
            <mt-tab-container-item id="tab2">
                <div style="height:55px"></div>
                <lunbo></lunbo>
            </mt-tab-container-item>
            <mt-tab-container-item id="tab3">
                <h3>投票</h3>
            </mt-tab-container-item>
            <mt-tab-container-item id="tab4">
                <h3>最新</h3>
            </mt-tab-container-item>
            <mt-tab-container-item id="tab5">
                <h3>投票</h3>
            </mt-tab-container-item>
        </mt-tab-container>
    </div>
</template>
<script>
import lunbo from './common/lunbo.vue'
export default {
    data(){
        return{
        selected:"tab2",
        }
    },
    methods: {
        
    },
    watch: {
        
    },
    components:{
        'lunbo':lunbo
    },
} 
</script>
<style scoped>
   .mint-navbar {
        background-color: #fafafa;
        padding:0 20px;
    }
    /* 1：修改navbar中默认和选中的文字 */
    .mint-tab-item-label{
        color: #333;
        font-size: 18px;
        /* line-height: 1; */
    }
    .mint-navbar .mint-tab-item.is-selected{
        color:#ff6766;
        border-bottom: 2px solid #ff6766;
    }
    .mint-navbar .mint-tab-item{
        padding: 12px 0;
        margin: 0;
        margin-left: 10px;
        margin-right: 10px;
    }
    .mint-tab-container-item{
        box-sizing: border-box;
    }
</style>