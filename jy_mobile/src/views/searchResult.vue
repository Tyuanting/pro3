<template>
  <div>
    <div class="searchBox">
      <router-link to="/" class="iky-left"><img src="../assets/return.png" alt=""></router-link>
      <div class="txtBox">
        <span class="iky-search"><img src="../assets/search.png" alt=""></span>
        <input type="text" placeholder="领券立减" v-model="q" @keyup="tosearch">
        <span class="iky-close"></span>
      </div>
      <mt-button size="small" type="danger" class="btn">搜索</mt-button>
      <a href="" yd-btn></a>
    </div>

    <div class="list" v-if="this.info.length==0">
            <div class="notfound">未查询到{{this.$route.query.q}}的内容</div>
        </div>
        <div class="list" v-else>
   <!-- tab-container -->
<mt-tab-container id="container">
  <mt-tab-container-item>
    <div class="single-list">
      <router-link :to="`/details/${item.pid}`" v-for="(item,index) of this.info" :key="index">
        <div class="img-wrap">
          <div class="img">
            <img :src="`image/${item.pic}`" alt="">
          </div>
        </div>
        <div style="overflow:hidden;">
          <p class="p-title">{{item.title}}</p>
          <p class="p-price">￥{{item.price}}
          <small class="sm">.00</small></p>
        </div>
      </router-link>
    </div>
  </mt-tab-container-item>
</mt-tab-container>
   </div>
  </div>
</template>
<style scoped>
.notfound{
    margin: 0 auto;
    padding-top: 100px;
    text-align: center;
}
.list{
    box-sizing: border-box;
    padding: 10px;
    width: 100%;
}
div{
  box-sizing: border-box;
}
.searchBox{
  padding: .5rem 0;
  border-bottom: 1px solid #ddd;
}
.searchBox:after{
  content: ' ';
  clear: both;
  display: table;
}
.searchBox .iky-left{
  margin-left: .375rem;
  display: block;
  float: left;
  font-size: 1rem;
  margin-top: .3rem;
  cursor: pointer;
}
.searchBox .iky-left img {
  height: 23px;
}
.searchBox .txtBox{
  width: 16.75rem;
  height: 2.15rem;
  background: #f0f0f0;
  border-radius: 3px;
  float: left;
}
.searchBox .txtBox .iky-search{
  height: 1.25rem;
  line-height: 1.85rem;
  margin: 0 .2rem;
}
.searchBox .txtBox .iky-search img{
  height: 18px;
}
.searchBox .txtBox input{
  width: 10rem;
  font-size: .55rem;
  border: none;
  height: 2.15rem;
  line-height: 1.25rem;
  margin: 0 .2rem;
  vertical-align: top;
  background-color: transparent;
}
.btn{
  display: inline-block;
  margin: 0 .5rem 0 .5rem;
}

  #container /deep/ .mint-tab-container-wrap{
  padding: .5rem 1rem 0;
  margin-bottom: 55px;
  background-color: #fff;
}
/**商品列表 */
.single-list{
  margin-top:-.5rem
}
.single-list a{
  text-decoration: none;
  display: block;
  text-align: center;
  width: 100%;
  padding: .5rem;
  border-bottom: 1px solid rgb(114, 112, 112);
}
.single-list a .img-wrap{
  display: table;
  height: 8.56rem;
  width: 8.56rem;
  float: left;
  margin-right: .85rem;
}
.single-list a .img-wrap .img{
  height: 8.56rem;
  width: 8.56rem;
  display: table-cell;
  text-align: center;
  vertical-align: middle;
}
.single-list a .img-wrap .img img{
  max-width: 90%;
  max-height: 90%;
  display: inline-block;
  white-space:normal;
}
.single-list a p.p-title{
  font-size: 1rem;
  line-height: 1.5rem;
  color: #333;
  overflow: hidden;
  height: 2.8rem;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  margin-bottom: 0rem;
  text-align: left;
}
.single-list a p.p-price{
  font-weight: 700;
  float: left;
  font-size: 1.64rem;
  line-height: 4.64rem;
  color: #ff4545;
  margin-right: 0.77rem;
  text-align: left;
}
.single-list a p.p-price .sm{
  font-size: .47rem;
}
.single-list a p.p-hasprice{
  text-decoration: line-through;
  font-size: 1rem;
  height: 1.64rem;
  line-height: 5rem;
  color: #999;
  text-align: #999;
}
</style>
<script>
export default {
    data() {
        return {
             info:[],//存储搜索信息
             q:''//搜索内容
        }
    },
    methods: {
        tosearch(e){
			if(e.keyCode == 13){
			this.$router.push({path: '/searchResult',query:{q:this.q}});// 注意：使用path时， params 将不可用
			window.location.reload();//搜索后刷新一下页面
			}
        },
        search(){
            //获取地址栏中的id 然后再向服务器发请求
            let q=this.$route.query.q;
            this.axios.get(`/index/search?q=` + q).then(res=>{
                this.info=res.data.results;
                console.log(this.info);
            })
        }
    },
    mounted(){
        this.search();
    },
}
</script>