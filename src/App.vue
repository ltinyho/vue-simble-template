<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
  // @flow
  export default {
    name: 'app',
    components: {},
    mounted(){
    },
    watch:{
      '$route'(){
        window.scroll(0,0)
      }
    }
  }
</script>
<style lang="scss"  rel="stylesheet/scss">
  @import "src/assets/style/common";
  #app{
    height: 100%;
  }
</style>

