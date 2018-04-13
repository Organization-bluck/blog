<template>
  <div class="container clearfix"  v-loading.fullscreen.lock="fullscreenLoading">
    <div  v-if="!articleId">
    	<div class="article-box">
  			<article-list :articleList="articleList"></article-list>
    	</div>
    	<aside class="aside-box">
    		<side-section>
          <div slot="sidecontent">
            <h3 class="message-title">标签</h3>
            <div class="tags">
              <span class="tags-item">
                <a href="###">标签</a>
                <!-- <a href="###" :data-cid='item.cid' @click="getOne(item.tname)">{{item.tname}}</a> -->
              </span>
              <span class="tags-item"><a href="###">标签</a></span>
              <span class="tags-item"><a href="###">标签</a></span>
              <span class="tags-item"><a href="###">标签</a></span>
              <span class="tags-item"><a href="###">标签</a></span>
            </div>
          </div>
        </side-section>
    	</aside>
    </div>
    <div v-else>
      <router-view/>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import articleList from 'components/articleList/articleList.vue'
import sideSection from 'baseComponents/sideSection.vue'
export default {
  name: 'Read',
  data () {
    return {
      articleId:undefined,
      articleList:[
        // {
        //   "id": 4,
        //    "title": "ces",
        //    "content": "ddddd",
        //    "create_at": "2018-04-08 08:55:36",
        // },
        // {
        //   "id": 4,
        //    "title": "ces",
        //    "content": "ddddd",
        //    "create_at": "2018-04-08 08:55:36",
        // },
        // {
        //   "id": 4,
        //    "title": "ces",
        //    "content": "ddddd",
        //    "create_at": "2018-04-08 08:55:36",
        // }
      ],
      tags:[],
      category:[]
    }
  },
  created(){
    this.fullscreenLoading=true
  },
  mounted () {
    this.getList()
  },
  methods:{
    getList () {
      axios.get("/api/Api/Blog/gethomepage").then((result)=>{
        let res = result.data
        if (res.code == 200) {
          // if (data.result.count == 0) {
          //   this.page -= 1
          //   return
          // } else {
            this.articleList = this.articleList.concat(res.data.list)
            this.category = res.data.category;
            this.fullscreenLoading = false;
          // }
        } else {
          this.list = []
          this.category = []
        }
      })
    },
    getOne(item){
      console.log(item)
    }
  },
  components:{
  	articleList,
    sideSection
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
	.container{
		padding-top:40px;
    .article-box{
      float:left;
      width:70%;
      background: #fff;
      border-radius: 10px;
    }
    .aside-box{
      width:25%;
      float:right;
      .message-title {
        border-bottom: 2px solid rgba(139, 139, 139, 0.5);
        padding: 0 10px;
        color: rgb(139, 139, 139);
        font-size: 14px;
        font-weight: 700;
        line-height: 25px;
      }
      .tags {
        flex-flow: row wrap;
        display: flex;
        padding-top: 20px;
        .tags-item {
          display: block;
          margin: 0 12px 12px 0;
          padding: 0 10px;
          height: 24px;
          line-height: 24px;
          max-width: 100%;
          background: rgba(0, 0, 0, .06);
          color: #666768;
          border-radius: 15px;
          text-align: center;
          font-size: 14px;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }
      }
    }
	}
</style>
