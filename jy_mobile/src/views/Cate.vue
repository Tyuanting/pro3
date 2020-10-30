<template>
  <div>
  <div>
  <mt-header title="分类" id="Myheader">
  <router-link to="/" slot="left">
    <mt-button icon="back"></mt-button>
    
  </router-link>
</mt-header>
  </div>
   <!-- 顶部选项卡开始 -->
    <div id="my-nav">
     <mt-navbar v-model="selected">
  <mt-tab-item :id="item.id.toString()" v-for="(item,index) of category" :key="index">{{item.cname}}<img :src="`category/${item.c_img}`" slot="icon"></mt-tab-item>
</mt-navbar>
   </div>
   <!-- 顶部选项卡结束 -->
   <div>
   <!-- tab-container -->
<mt-tab-container v-model="selected" id="container">
  <mt-tab-container-item :id="selected.toString()">
    <div class="single-list">
      <router-link :to="`/details/${item.pid}`" v-for="(item,index) of product" :key="index">
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
  <div>
     <mt-tabbar v-model="tabbar" fixed id="my-tabbar">
       <mt-tab-item id="index">
         首页
         <img src="../assets/button/main-a.png" slot="icon" v-if="tabbar == 'index'">
         <img src="../assets/button/main.png" slot="icon" v-else>
        </mt-tab-item>
       <mt-tab-item id="category">
         分类
         <img src="../assets/button/category-a.png" slot="icon" v-if="tabbar == 'category'">
         <img src="../assets/button/category.png" slot="icon" v-else>
        </mt-tab-item>
        <mt-tab-item id="shoppingCart">
         购物车
         <img src="../assets/button/shoppingCart-a.png" slot="icon" v-if="tabbar == 'shoppingCart'">
         <img src="../assets/button/shoppingCart.png" slot="icon" v-else>
        </mt-tab-item>
        <mt-tab-item id="mine">
         我的
         <img src="../assets/button/mine-a.png" slot="icon" v-if="tabbar == 'mine'">
         <img src="../assets/button/mine.png" slot="icon" v-else>
        </mt-tab-item>
        <mt-tab-item id="after">
         售后服务
         <img src="../assets/button/after-a.png" slot="icon" v-if="tabbar == 'after'">
         <img src="../assets/button/after.png" slot="icon" v-else>
        </mt-tab-item>
     </mt-tabbar>
   </div>
  </div>
</template>
<style scoped>
#container /deep/ .mint-tab-container-wrap{
  padding: .5rem 1rem 0;
  margin-bottom: 55px;
  margin-top: 115px;
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
#my-nav /deep/ .mint-navbar .mint-tab-item.is-selected {
  color: #f40;
  border-bottom: 3px solid #f40;
  background-color: #fff;
}
#my-nav /deep/ .mint-navbar{
  background-color: #eee;
  color: #8a8a8a;
    position: fixed;
    z-index: 2;
    width: 100%;
    margin-top: 40px;
}
#Myheader{
  background-color: #fff;
  color: #555;
      position: fixed;
    z-index: 2;
    width: 100%;
}
#my-tabbar /deep/ .is-selected{
  color:#e98f36;
}
</style>
<script>
export default {
  data(){
    return{
      tabbar:'category',
      category:[],
      selected:'1',
      product:[]
    }
  },
  methods:{
    loadData(cid){
      this.axios.get('/index/product?cid=' + cid).then(res=>{
        this.product = res.data;    
      });
    }
  },
   watch:{
    //监听底部选项卡
    tabbar(value){
      if(value == 'index'){
        this.$router.push('/').catch(e=>{})
      }else if(value == 'category'){
        // this.tabbar == 'category';
        this.$router.push('/cate').catch(e=>{});
        
      }else if(value == 'shoppingCart'){
        this.tabbar == 'shoppingCart';
        this.$router.push('/cart').catch(e=>{});
      }else if(value == 'mine'){
        this.tabbar == 'mine';
        this.$router.push('/me').catch(e=>{});
      }
    },
    //监听顶部选项卡
    selected(){
      this.loadData(this.selected);
    }
  },
  mounted(){
    this.axios.get('/mindex/category').then(result=>{
            this.category = result.data;
            });
    this.loadData(this.selected);
  }
}
</script>
