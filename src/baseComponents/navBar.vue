<template>
  <div id="navBar">
    <el-header height="auto">
      <div class="music-box">
       <!--  <aplayer autoplay :music="{
          title: '阿刁 (Live)',
          author: '张韶涵',
          url: 'http://dl.stream.qqmusic.qq.com/C400001KxARP2Ij3hH.m4a?vkey=D8DF74C7D965F589677FB879DA2BD5F33C6A19D0B52A092B1C414B766E1F5AF28E1589E6BC7D2762DC9426C65197D39A9479E192CCD3AC42&guid=1587928595&uin=0&fromtag=66',
          pic: 'https://y.gtimg.cn/music/photo_new/T002R300x300M000001Qgi2X1alT0s.jpg?max_age=2592000',
          lrc: '[00:00.00]lrc here\n[00:01.00]aplayer'
        }"></aplayer> -->
      </div>
      <el-row>
        <el-col :span="24">
          <div class="grid-content bg-purple-dark">
            <img src="../images/logo.png" alt="" class="logo">
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
        <el-menu-item index="1"><router-link tag="div" to="/index">首页</router-link></el-menu-item>
        <el-menu-item index="2"><router-link tag="div" to="/read">阅读</router-link></el-menu-item>
        <el-menu-item v-for="(item,index) in typeList" :index="index"><router-link tag="div" :to="item.ctitle">{{item.ctitle}}</router-link></el-menu-item>

        <el-menu-item index="5"><router-link tag="div" to="/about">关于</router-link></el-menu-item>
        <el-menu-item index="6"><router-link tag="div" to="/message">留言板</router-link></el-menu-item>
        <!-- <el-menu-item index="6"><router-link tag="div" to="/jottings">随笔</router-link></el-menu-item> -->
      </el-menu>
    </el-header>
  </div>
</template>

<script>
import Aplayer from 'vue-aplayer'

export default {
  name: 'navBar',
  props:{
    typeList:{
      type:Array,
      default:[]
    }
  },
  data(){
    return{
      fullscreenLoading:false,
      activeIndex:'1'
    }
  },
  created(){
    this.fullscreenLoading=true
  },
  mounted(){
    
  },
  components:{
    Aplayer
  }
}
</script>

<style lang="scss" scoped>
  @-webkit-keyframes animate {
    /* 背景从-100px的水平位置，移动到+100px的水平位置。如果要移动Y轴的，设置第二个数值 */
    from {background-position: -100px;}
    to {background-position: 100px;}
  }
  @keyframes animate {
    from {background-position: -100px;}
    to {background-position: 100px;}
  }
  #navBar{
    width: 100%;
    margin: auto;
    box-shadow:0 0 5px #999;
    height: 100%;
    .el-header{
      background:url('../assets/bg.jpg');
      background-size:cover;
      .el-menu-nav{
        width: 60%;
        height: 40px;
        margin: 50px auto 0;
        border-bottom: none;
        display: flex;
        li{
          flex: 1;
          text-align: center;
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
          background-image: linear-gradient(to right, red, orange, yellow, green, yellow, orange, red, orange, yellow, green, yellow, orange, red);    
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          -webkit-animation: animate 2s infinite linear;
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
  }

</style>
