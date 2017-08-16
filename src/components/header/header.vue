<template>
  <div class="kyy-header">
    <router-link v-if="goBack" :to="url" class="back-link">
      <i v-if="url =='/home'" class="fa fa-home fa-2x"></i>
      <i v-else class="fa fa-chevron-left"></i>
    </router-link>
    <h3 class="kyy-title">{{title}}</h3>
  </div>
</template>
<script type="text/ecmascript-6">
  export  default {
    name:'kyyHeader',
    props:{
      title:{
        type: String,
        required: true,
      },
      backUrl:{},
      goBack:{
        type: Boolean,
        default: true
      }
    },
    data(){
      return {}
    },
    computed:{
      url(){
        return this.backUrl ? this.backUrl: '/home'
      },
    }
  }
</script>

<style lang="scss" rel="stylesheet/scss" scoped>
  .kyy-header {
    position: relative;
    width: 100%;
    margin-top: 0;
    font-size: 20px;
    line-height: 2;
    text-align: center;
    color: #fff;
    background-color: #0692f4;
    .back-link {
      position: absolute;
      left: 15px;
      top: 6px;
      font-size: 15px;
      color: #fff;
      
    }
    .kyy-title {
      height: 40px;
      margin-top: 0;
      line-height: 40px;
      font-size: 18px;
      text-align: center;
    }
  }
 
  
</style>