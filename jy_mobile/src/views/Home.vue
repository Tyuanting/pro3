<template>
  <div>
    <div class="index_top">
      <div class="searchbox">
        <a href="" class="logo"><img src="../assets/logo.png" alt=""></a>
        <div class="search-box">
          <span class="iky-search">
            <img src="../assets/search.png" alt="">
          </span>
          <input type="text" placeholder="领券立减" @click="toSearch">
        </div>
      </div>
      <swipe></swipe>
    </div>
    <div class="recommend-category">
      <div class="categorys">
        <a href="" class="cate-item" v-for="(item,index) of category" :key="index">
          <div class="cate-icon">
            <img :src="`category/${item.m_cimg}`" alt="">
          </div>
          <p>{{item.m_cname}}</p>
        </a>
      </div>
    </div>
    <div class="banner-wrap banner-wrap-1">
      <div class="pic-wrap">
        <a href="">
          <img src="../assets/f_sel.jpg" alt="">
        </a>
      </div>
    </div>
    <div class="banner-wrap banner-wrap-1">
      <div class="pic-wrap">
        <a href="">
          <img :src="`index/${i_one.t_img}`" alt="">
        </a>
      </div>
    </div>
    <div class="banner-wrap banner-wrap-1">
      <div class="pic-wrap">
        <a href="">
          <img :src="`index/${i_one.b_img}`" alt="">
        </a>
      </div>
    </div>
    <div class="banner-wrap banner-wrap-2" v-for="(item,index) of i_two" :key="index">
      <div class="pic-wrap">
        <a href="">
          <img :src="`index/${item.l_img}`" alt="">
        </a>
      </div>
      <div class="pic-wrap">
        <a href="">
          <img :src="`index/${item.r_img}`" alt="">
        </a>
      </div>
    </div>
    <div class="banner-wrap banner-wrap-1">
      <div class="pic-wrap" v-for="(item,index) of i_three" :key="index">
        <a href="">
          <img :src="`index/${item.i_img}`" alt="">
        </a>
      </div>
    </div>
    <div class="van-swipe">
      <mt-swipe
        :showIndicators="false"
        :auto="5000"
        :speed="500">
          <mt-swipe-item>
          <div class="van-swipe-item">
            <router-link :to="`/details/${item.pid}`" href="" v-for="(item,index) of pro_banner1" :key="index">
              <div class="loop-img">
                <img :src="`image/${item.pic}`" alt="">
              </div>
              <span class="loop-state"></span>
              <span class="loop-title">{{item.title}}</span>
              <span class="loop-price">￥{{item.price}}</span>
            </router-link>
          </div>
          </mt-swipe-item>
          <mt-swipe-item>
          <div class="van-swipe-item">
            <router-link :to="`/details/${item.pid}`" href="" v-for="(item,index) of pro_banner2" :key="index">
              <div class="loop-img">
                <img :src="`image/${item.pic}`" alt="">
              </div>
              <span class="loop-state"></span>
              <span class="loop-title">{{item.title}}</span>
              <span class="loop-price">￥{{item.price}}</span>
            </router-link>
          </div>
          </mt-swipe-item>
      </mt-swipe>
    </div>
    <div class="tcl-daymic"></div>
    <my-footer></my-footer>
  </div>
</template>
<style scoped>
/* 商品轮播 */
.van-swipe{
  height: 10.88rem;
  background-color: #fff;
      margin-bottom: 55px;
}
.van-swipe-item{
  width: 375px;
  height: 100%;
  transform: translatex(0px);
  display: flex;
  float: left;
}
.van-swipe-item a{
  position: relative;
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 33.33%;
  padding-top: .79rem;
  text-decoration: none;
}
.van-swipe-item a .loop-img{
  display: flex;
  align-items: center;
  width: 4.69rem;
  height: 4.69rem;
  margin-bottom: .426rem;
}
.van-swipe-item a .loop-img img{
  max-width: 4.69rem;
  max-height: 4.49rem;
  width: auto;
}
.van-swipe-item a .loop-state{
  position: absolute;
  top: .75rem;
  right: .128rem;
  height: 1.7rem;
  width: .85rem;
  justify-content: center;
  align-items: center;
  border: 1px solid red;
  border-top-right-radius: 44% 27%;
  display: none;
}
.van-swipe-item a .loop-title{
  font-size: 0.01rem;
  width:6rem;
  text-align: center;
  color: #333;
  margin-bottom: .25rem;
  overflow: hidden;
  line-height: 1rem;
  height: 2.1rem;
}
.van-swipe-item a .loop-price{
  font-size: .6rem;
  color: #ff4545;
  font-weight: 700;
}
/* 首选 */
.banner-wrap{
  width: 100%;
  overflow: hidden;
}
.banner-wrap-1 .pic-wrap{
  width: 100%;
  float: left;
}
.banner-wrap-2 .pic-wrap{
  width: 50%;
  float: left;
}
.banner-wrap .pic-wrap img{
  width: 100%;
  height: 100%;
  text-overflow: ellipsis;
  white-space: normal;
}
/* 分类部分 */
a{
  text-decoration: none;
  outline: 0;
}
.recommend-category .categorys{
  background: url('../assets/category-bg.jpg') 0% 0% / 100% 100% no-repeat;
  color: rgb(17,17,17);
  max-height: 11.4rem;
  overflow: hidden;
}
.recommend-category .categorys .cate-item{
  float: left;
  width: 25%;
  height: 4.2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  padding-top: 1.5rem;
  text-decoration: none;
}
.recommend-category .categorys .cate-item .cate-icon{
  display: flex;
  align-items: center;
  height: 2.13rem;
}
.recommend-category .categorys .cate-item .cate-icon img{
  max-width: 3.13rem;
  max-height:3.13rem;
  text-overflow: ellipsis;
  white-space: normal;
}
.recommend-category .categorys .cate-item p{
  position: absolute;
  text-align: center;
  font-weight: 700;
  bottom: .66rem;
  font-size: .512rem;
  line-height: .512rem;
  width: 100%;
}

/*  */
.index_top{
  position: relative;
}
.searchbox{
  position: absolute;
  z-index: 1000;
  width: 100%;
  top: 0;
  height: 44px;
  background-image: linear-gradient(to bottom,rgba(0,0,0,.6),rgba(0,0,0,0));
}
.searchbox .logo{
  color: red;
  font-size: 14px;
  float: left;
  margin: 0 0.2rem;
  position: absolute;
  z-index: 99;
  top: 0.2rem;
  cursor: pointer;
}
.searchbox .logo img{
  height: 35px;
}
.searchbox .search-box{
  height: 1.85rem;
  line-height: 1.25rem;
  background: #fff;
  width: 18.36rem;
  float: right;
  margin-right: .6rem;
  border-radius: .15rem;
  margin-top: .3rem;
  color: #999;
}
.searchbox .search-box span{
  float: left;
  height:1.25rem;
  line-height: 1.25rem;
  margin:.15rem 1rem 0.06rem;
  display: inline-block;
}
.searchbox .search-box span img{
  width: 18px;
  height: 18px;
}
.iky-search{
  font-size: .7rem;
  color: #999;
}
.searchbox .search-box input{
  width: 12rem;
  border: none;
  color: #999;
  line-height: 1.65rem;
  float: left;
  display: inline-block;
}
</style>
<script>
import swipe from '../components/swipe'
export default {
  data(){
    return {
      category:[],
      i_one:[],
      i_two:[],
      i_three:[],
      pro_banner1:[],
      pro_banner2:[]
    }
  },
  components:{swipe},
  methods:{
    toSearch(){
      this.$router.push('/search');
    }
  },
  mounted(){
    this.axios.get('/mindex/one').then(result=>{
      let results = result.data;
      results.forEach(item=>{
        this.i_one=item;
      })
    });
    this.axios.get('/mindex/two').then(result=>{
     this.i_two = result.data;
    //  console.log(this.i_two)
    });
    this.axios.get('/mindex/three').then(result=>{
     this.i_three = result.data;
    //  console.log(this.i_two)
    });
    this.axios.get('/mindex/cate').then(result=>{
     this.category = result.data;
    //  console.log(this.category)
    });
    this.axios.get('/index/show').then(result=>{
     let results = result.data;
     this.pro_banner1 = results.slice(0,3);
     this.pro_banner2 = results.slice(3);
     console.log(this.pro_banner2)
    });
  }
}
</script>
