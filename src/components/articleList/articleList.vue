<template lang="html">
  <div class="article-list">
    <article class="article-block" v-for="item in articleList">
      <h2><router-link :to="{ name:'Article', query:{articleId:item.id}}">{{item.title}}</router-link></h2>
      <p class="article-meta">发布于 {{item.create_at}}</p>
      <div class="label">
        <a href="">jajasdjas</a>
      </div>
      <div class="abstract" v-html="item.content"></div>
      <div class="footer-info">
        <div class="tags-list">
          <span v-for="tag in item.tag_list">{{tag.tname}}</span>
        </div>
        <div class="more"><router-link :to="{ name:'Article', query:{articleId:item.id}}">阅读全文</router-link></div>
      </div>
    </article>
    <div class="pages">
      <a href="javascript:;" >上一页</a>
      <a href="javascript:;" >下一页</a>
    </div>
  </div>
</template>

<script>

export default {
  props:{
    articleList:{
      type:Array,
      default:[]
    },
    // tagSelect:{
    //   type:Array,
    //   default:[]
    // }
  },
  data () {
    return {
      page:1,
      pageSize: 10,
      count: 0
    }
  },
  // watch: {
  //   tagSelect () {
  //     this.getTagList()
  //   }
  // },
  mounted () {

  },
  methods: {
    // getTagList () {
    //   var param = {
    //     page: this.page,
    //     pageSize: this.pageSize,
    //     tag: this.tagSelect
    //   }
    //   axios.get("/api/tagsDetial", {
    //     params: param
    //   }).then((result)=>{
    //     let res = result.data
    //     if (res.status == "0") {
    //       if (res.result.count == 0) {
    //         this.page -= 1
    //         return
    //       } else {
    //         this.list = res.result.list
    //       }
    //     } else {
    //       this.list = []
    //     }
    //   })
    // },
    // go () {
    //   if (this.page<1) {
    //     this.page = 1
    //     return
    //   } else {
    //     this.getlist()
    //   }
    // }
  }
}
</script>

<style lang="scss">
.article-list {
  padding: 20px;
  background: #fff;
  border-radius: 10px;
  box-shadow: 0 16px 24px 1px rgba(0, 0, 0, 0.14),0 6px 50px 1px rgba(0, 0, 0, 0.12),0 6px 10px -5px rgba(0, 0, 0, 0.2);
  .article-block {
    position: relative;
    background: #fff;
    padding: 15px;
    border-bottom: 1px solid #e0e0e0;
    h2 {
      font-size: 28px;;
      text-align: center;
      padding: 0 80px;
      position: relative;
      font-weight:bold;
      a{
        color: #363636;
        transition:all .1s;
        &:hover{
          color: #97dffd;
        }
      }
    }
    .article-meta {
      color: #555;
      font-size: 14px;
      word-break: break-word;
      line-height: 20px;
      text-align:center;
    }
    /*小标*/
    .label {
      box-shadow: 0 2px 2px 0 rgba(0,0,0,.14), 0 3px 1px -2px rgba(0,0,0,.2), 0 1px 5px 0 rgba(0,0,0,.12);
      background-color: #97dffd;
      color: #fff;
      font-size: 14px;
      position: relative;
      left: -49px;
      border-radius: 0 4px 4px 0;
      display: inline-block;
      padding: 10px 20px;
      &:after {
        position: absolute;
        content: "";
        top: 100%;
        left: 0;
        border-top: 0 solid transparent;
        border-right-width: 14px;
        border-right-color: #47456d;
        border-right-style: solid;
        border-bottom: 14px solid transparent;
        border-left: 0 solid transparent;
        width: 0;
        height: 0;
      }
      a{
        color: inherit;
      }
    }
    .abstract {
      font-size: 24px;
      line-height: 32px;
      margin: 30px 0;
      color: #333;
      text-indent: 2em;
      word-wrap:break-word;
      img {
        max-width: 100%;
        display: block;
      }
    }
    .footer-info{
      display:flex;
      justify-content: space-between;
      .tags-list{
        color:#999;
        padding:0 15px;
        span{
          font-size:14px;
          display:inline-block;
          padding:2px 10px;
          margin:0 5px;
          background:#2e2f2f;
          color:#ccc;
          border-radius: 5px;
          cursor: pointer;
        }
      }
     .more{
       a{
         background-color: #96e1fc;
         color: #fff;
         font-size: 12px;
         padding: 5px 10px;
         border-radius: 5px;
         transition: .5s;
         -o-transition: .5s;
         -moz-transition: .5s;
         -webkit-transition: .5s;
       }
     } 
    }
    
  }
  .pages {
    width: 100%;
    margin: 20px auto 0;
    overflow: hidden;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
  .pages a {
    background: #97dffd;
    display: block;
    padding: 8px 10px;
    margin: 0 20px;
    border-radius: 5px;
    text-align: center;
    font-size: 14px;
    color: #fff;
  }
}
</style>
