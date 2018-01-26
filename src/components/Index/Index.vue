<template>
  <div class="index">
    <el-main>
      <el-col :span="24">
        <div class="title-box">
          <title-box title="关于我们" title-english="About us"></title-box>
        </div>
      </el-col>
      <el-row :gutter="40" class="card-box">
        <el-col :span="8">
          <el-card :body-style="{ padding: '15px' }">
            <img src="../../images/logo.png" class="image">
            <div style="padding: 14px;text-align:center" @click="open">
              <span>许大仙</span>
            </div>
          </el-card>
        </el-col>
      
        <el-col :span="8">
          <el-card :body-style="{ padding: '15px' }">
            <img src="../../images/logo.png" class="image">
            <div style="padding: 14px;text-align:center" @click="open">
              <span>小燕女侠</span>
            </div>
          </el-card>
        </el-col>
        <el-col :span="8">
          <el-card :body-style="{ padding: '15px' }">
            <img src="../../images/logo.png" class="image">
            <div style="padding: 14px;text-align:center" @click="open">
              <span>郝大神</span>
            </div>
          </el-card>
        </el-col>
      </el-row>

      <el-col :span="24">
        <div class="title-box">
          <title-box title="文章推荐" title-english="Article comment"></title-box>
        </div>
      </el-col>

      <div class="article-list">
        <el-row :gutter="20">
          <el-col :span="12"><div class="grid-content">123</div></el-col>
          <el-col :span="12"><div class="grid-content">123</div></el-col>
        </el-row>
      </div>

      <el-col :span="24">
        <div class="title-box">
          <title-box title="技术网站" title-english="website"></title-box>
        </div>
      </el-col>

      <div class="website">
        <el-row :gutter="20">
          <el-col :span="4" style="padding:20px"><div class="grid-content"> <img src="../../images/website-logo.svg" alt=""> </div></el-col>
          <el-col :span="4" style="padding:20px"><div class="grid-content"><img src="../../images/website-logo.svg" alt=""></div></el-col>
          <el-col :span="4" style="padding:20px"><div class="grid-content"><img src="../../images/website-logo.svg" alt=""></div></el-col>
          <el-col :span="4" style="padding:20px"><div class="grid-content"><img src="../../images/website-logo.svg" alt=""></div></el-col>
          <el-col :span="4" style="padding:20px"><div class="grid-content"><img src="../../images/website-logo.svg" alt=""></div></el-col>
          <el-col :span="4" style="padding:20px"><div class="grid-content"><img src="../../images/website-logo.svg" alt=""></div></el-col>
        </el-row>
      </div>
    </el-main>
  </div>
</template>

<script>
import TitleBox from 'components/Title-box/title-box.vue'

export default {
  name: 'Index',
  data () {
    return {
      activeIndex:'2',
      musicList:[]
    }
  },
  methods:{
    open(){
      this.$alert('许大仙介绍', '许大仙', {
        confirmButtonText: '确定',
      });
    }
  },
  components:{
    TitleBox,
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  .el-main{
    .title-box{
      margin: 20px 0;
    }
    .card-box{
      padding: 30px 100px;
      .el-card{
        cursor: pointer;
        .el-card__body{
          img{
            width: 100%;height: 100%;
          }
        }
      }
    }
    .website{
      .el-col-4{
        padding: 0 20px;
        .grid-content{
          padding-bottom: 100%;
          height: 0;
          border: 1px solid #ccc;
          border-radius: 50%;
          position: relative;
          img{
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%,-50%)
          }
        }
      }
    } 
  }
</style>
