<template>
  <div id="app">
    <nav-Bar></nav-Bar>
    <div class="container-wrap">
      <keep-alive>
        <router-view/>
      </keep-alive>
    </div>
    <my-footer></my-footer>
    <scroll-top></scroll-top>
  </div>
</template>

<script>
import Index from 'components/Index/Index.vue'
import Aplayer from 'vue-aplayer'
import Axios from 'axios'
import MyFooter from 'baseComponents/MyFooter.vue'
import scrollTop from 'baseComponents/scrollTop.vue'
import navBar from 'baseComponents/navBar.vue'

export default {
  name: 'App',
  data(){
    return{
      fullscreenLoading:false,
      isShow:true,
      musicList:[]
    }
  },
  components:{
    Index,
    navBar,
    Aplayer,
    MyFooter,
    scrollTop
  }
}
</script>

<style lang="scss">

  #app{
    width: 100%;
    margin: auto;
    box-shadow:0 0 5px #999;
    height: 100%;    
  }

</style>
