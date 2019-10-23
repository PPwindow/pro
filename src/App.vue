<template>
  <div id="app">
      <router-view></router-view>
  </div>
</template>
<script>

export default {
  data(){
    return{
      loginstatus:false
    }
  }
}
</script>
<style lang="scss">
*{
  padding: 0;
  margin: 0;
  background-color: #fafafa;
}
</style>
