<template>
  <div class="index-content flex">
  	<div v-for="item in articleList" class="article-warp flex" v-if="articleList">
     <div v-html="item.content" class="article-content flex"></div> 
    </div>
  </div>
</template>
<script type="text/javascript">
  import { getArticle } from 'api/index'
  export default {
    data() {
      return {
        articleList: []
      }
    },
    created() {
      this._getArticle()
    },
    computed: {},
    mounted() {

    },
    methods: {
      _getArticle() {
        (async () => {
          try {
            const result = await getArticle()
            this.articleList = result.data.rows
          } catch (e) {
            console.log(e)
          }
        })()
      }
    },
    components: {}
  }

</script>
<style type="text/css" scoped>
.index-content{
  width: 100%;
  flex-wrap: wrap;
}
.article-warp{
  width: 100%;
  height: auto;
  flex-wrap: wrap;
}
.article-content{
  font-size: 14px;
  /*max-width: 900px;*/
  width: 60%;
  margin: 40px 20%;
  flex-grow: 1;
  height: auto;
  flex-wrap: wrap;
  line-height: 20px;
}
</style>
