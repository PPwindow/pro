<template>
    <div>
        <mt-navbar v-model="selected" fixed>
            <mt-tab-item id="tab1"><span style="font-size:18px;">热门</span></mt-tab-item>
            <mt-tab-item id="tab2"><span style="font-size:18px;">广场</span></mt-tab-item>
            <mt-tab-item id="tab3"><span style="font-size:18px;">投票</span></mt-tab-item>
            <mt-tab-item id="tab4"><span style="font-size:18px;">最新</span></mt-tab-item>
            <mt-tab-item id="5"><span style="font-size:18px;">话题</span></mt-tab-item>
        </mt-navbar>
        <!-- tab-container -->
        <mt-tab-container v-model="selected">
            <mt-tab-container-item id="tab1">
                <h3>热门</h3>
                <h3>热门</h3>
                <h3>热门</h3>
                <h3>热门</h3>
                <h3>热门</h3>
                <h3>热门</h3>
                <h3>热门</h3>
                <h3>热门</h3>
                <h3>热门</h3>
                <h3>热门</h3>
                <h3>热门</h3>
            </mt-tab-container-item>
            <mt-tab-container-item id="tab2">
                <h3>广场</h3>
            </mt-tab-container-item>
            <mt-tab-container-item id="tab3">
                <h3>投票</h3>
            </mt-tab-container-item>
            <mt-tab-container-item id="tab4">
                <h3>最新</h3>
            </mt-tab-container-item>
            <mt-tab-container-item id="tab5">
                <h3>话题</h3>
            </mt-tab-container-item>
        </mt-tab-container>
    </div>
</template>
<script>
export default {
    data(){
        return {
            selected:"tab2",
        }
    }
}
</script>
<style scoped>
    /* nav背景色 */
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
        margin-top: 50px;
        margin-left: 20px;
        margin-right: 20px;
    }
</style>