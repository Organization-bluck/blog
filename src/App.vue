<template>
  <div id="app" v-loading.fullscreen.lock="fullscreenLoading">
    <!-- <img src="./assets/logo.png">-->

  <el-container>
    <el-header height="auto">
      <div class="music-box">
        <aplayer autoplay :music="{
          title: '阿刁 (Live)',
          author: '张韶涵',
          url: 'http://dl.stream.qqmusic.qq.com/C400001KxARP2Ij3hH.m4a?vkey=D8DF74C7D965F589677FB879DA2BD5F33C6A19D0B52A092B1C414B766E1F5AF28E1589E6BC7D2762DC9426C65197D39A9479E192CCD3AC42&guid=1587928595&uin=0&fromtag=66',
          pic: 'https://y.gtimg.cn/music/photo_new/T002R300x300M000001Qgi2X1alT0s.jpg?max_age=2592000',
          lrc: '[00:00.00]lrc here\n[00:01.00]aplayer'
        }"></aplayer>
      </div>
      <el-row>
        <el-col :span="24">
          <div class="grid-content bg-purple-dark">
            <img src="./images/logo.png" alt="" class="logo">
            <p class="motto">生活就像一盒巧克力，你永远不知道下一颗是什么味道</p>
          </div>
        </el-col>
      </el-row>
      <el-menu :default-active="activeIndex"
              class="el-menu-nav"
              mode="horizontal"
              background-color="#409EFF"
              text-color="#fff"
              active-text-color="#ffd04b" >
        <el-menu-item index="1"><router-link tag="div"  to="/index">首页</router-link></el-menu-item>
        <el-submenu index="2">
          <template slot="title"><router-link tag="span"  to="/technology">web技术</router-link></template>
          <el-menu-item index="2-1">前端</el-menu-item>
          <el-menu-item index="2-2">后端</el-menu-item>
          <el-menu-item index="2-3">全栈</el-menu-item>
        </el-submenu>
        <el-menu-item index="3"><router-link tag="div"  to="/read">阅读</router-link></el-menu-item>
        <el-menu-item index="4"><router-link tag="div"  to="/life">生活</router-link></el-menu-item>
        <el-menu-item index="5"><router-link tag="div"  to="/jottings">随笔</router-link></el-menu-item>
      </el-menu>

    </el-header>
    <router-view/>
    <el-footer>
       <el-col :span="24">
         <p>版权所有：许恒，应尚燕，郝运</p>
       </el-col>
    </el-footer>
  </el-container>

  </div>
</template>

<script>
import Index from 'components/Index/Index.vue'
import Aplayer from 'vue-aplayer'
import Axios from 'axios'

export default {
  name: 'App',
  data(){
    return{
      fullscreenLoading:false,
      activeIndex:'1',
      isShow:true,
      musicList:[]
    }
  },
  created(){
    this.fullscreenLoading=true
  },
  mounted(){
    setTimeout(() => {
      this.fullscreenLoading = false;
    }, 1000);
    
  },
  components:{
    Index,
    Aplayer
  }
}
</script>

<style lang="scss">
  #app{
    width: 1200px;
    margin: auto;
    box-shadow:0 0 5px #999;
    height: 100%;
    padding: 10px 20px;
    .el-header{
      background-color: #B3C0D1;
      .el-menu-nav{
        width: 60%;
        height: 40px;
        margin: 50px auto 0;
        border-bottom: none;
        display: flex;
        li{
          flex: 1;
          text-align: center;
        }
        .el-submenu__title{
          height: 40px;
          line-height: 40px;
          i{
            color: #fff;
          }
        }
        .el-submenu{
          .el-menu{
            top: 45px;
          }
        }
        .el-menu-item{
          height: 40px;
          line-height: 40px
        }
      }
      .grid-content{
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 50px 0 20px;
        .motto{
          vertical-align: middle;
          font-size: 24px;
          color:#303133;
        }
        .logo{
          width: 100px;
          height: 100px;
          border-radius: 50%;
          padding: 2px;
          background: #fff;
          vertical-align: middle;
          margin-right: 20px;
          transition: all 1s;
          cursor: pointer;
          &:hover{
            transform:rotate(360deg)
          }
        }
      }
    }
    
    .el-footer {
      background-color: #B3C0D1;
      color: #333;
      text-align: center;
      line-height: 60px;
    }
    
  }

</style>
