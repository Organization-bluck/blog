<template lang="html">
  <div class="article">
    <div class="container full">
      <div class="main-full">
        <div class="full-content">
          <header>
            <h2>{{article.title}}</h2>
            <p class="byline">by JhonXY
              <span class="sep">|</span>
              <span class="date">{{article.create_at}}</span>
            </p>
          </header>
          <div class="post-content wysiwyg" v-html="article.content"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

// import 'wysiwyg.css'
import axios from 'axios'
export default {
  name: 'Article',
  data() {
    return {
      article: ''
    }
  },
  mounted() {
    this.init()
  },
  methods: {
    init() {
      let articleId = this.$route.query.articleId;
      let param = {
        id: articleId
      }
      axios.get("/api/Api/Blog/getDetail", {
        params: param
      }).then((result) => {
        let res = result.data
        if (res.code == 200) {
          this.article = res.data
        } else {
          this.article = ''
        }
      })
    }
  },
}
</script>

<style lang="scss">
.article{
  .main-full{
    width: 100%;
    margin: 50px 0 30px 0;
    background: #fff;
    border-radius: 8px;
    box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.08);
    overflow: hidden;
    -webkit-transition: all .5s ease-out;
    transition: all .5s ease-out;
    .full-content {
      padding: 60px 0;
      header{
        width: 66%;
        margin: 0 auto 50px auto;
        h2 {
          margin: 0 auto 20px;
          text-align:center;
          font-size: 40px;
          font-weight: 500;
          line-height: 1;
          color: #444;
        }
        .byline {
          width: auto;
          margin: 12px 0;
          font-weight: 500;
          span.sep {
            margin: 0 4px;
            font-weight: normal;
            color: #ddd;
          }
          span.date {
            font-size: 14px;
            text-transform: uppercase;
            letter-spacing: .03em;
            color: #bbb;
          }
        }
      }
      .post-content {
        width: 66%;
        margin: 0 auto;
        margin-bottom: 20px;
        line-height:1.6;
      }
      .wysiwyg{
        img {
          max-width: 100%;
          display: block;
          margin:auto;
        }
        ul{
          li{
            list-style-type: disc;
          }
        }
        ol{
          li{
            list-style-type: decimal;
          }
        }
      }
    }
  }
}
  
</style>
