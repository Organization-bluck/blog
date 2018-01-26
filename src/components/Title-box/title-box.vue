<template>
  <div class="title-box">
    <h2>{{title}}</h2>
    <div class="line-small"></div>
    <div class="line"></div>
    <h4>{{titleEnglish}}</h4>
  </div>
</template>

<script>
export default {
  name: 'TitleBox',
  props:{
    title:{
      type:String,
      default:'默认标题'
    },
    titleEnglish:{
      type:String,
      default:'Default title'
    }
  },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  .title-box{
    text-align: center;
    color: #999;
    .line-small{
      width: 100px;
      height: 2px;
      background-color: #999;
      margin: 5px auto
    }
    .line{
      width: 150px;
      height: 2px;
      background-color: #999;
      margin: 5px auto
    }
    h2{
      font-size: 18px;
    }
    h4{
      font-size: 14px;
    }
  }
</style>
