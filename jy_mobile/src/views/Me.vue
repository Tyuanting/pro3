<template>
  <div>
  <mt-header title="用户中心" id="Myheader">
  <router-link to="/" slot="left">
    <mt-button icon="back"></mt-button>
  </router-link>
</mt-header>
<div class="user-index">
  <div class="index-top">

    <div class="notlogged" v-if="this.$store.state.isLogined == 0">
      <router-link to="/login">
        <div class="img-box">
          <div class="user-img">
            <img src="https://m.user.tcl.com/img/user-img.png" alt="">
          </div>
        </div>
        <p>登录/注册</p>
      </router-link>
    </div>

    <div class="notlogged" v-else>
      <router-link to="/login">
        <div class="img-box">
          <div class="user-img">
            <img src="http://avatar.user.tcl.com/tcl_image1?imageView2/1/w/180/h/180/format/jpg/q/49|imageslim" alt="">
          </div>
        </div>
        <p>{{this.$store.state.username}}</p>
      </router-link>
    </div>
  </div>
  <div class="index-infor">
    <div class="infor-box">
      <div class="order-infor">
        我的订单
        <a href="">
          <span>
            全部
            <i class="icon-rigth">
              <img src="../assets/right.png" alt="">
            </i>
          </span>
        </a>
      </div>
      <div class="order-list">
      <ul id="offGroup">
        <li class="order-item">
          <a href="">
            <p class="icon">
              <img src="https://m.user.tcl.com/img/icon-pay.png" alt="">
            </p>
            <span>待支付</span>
          </a>
        </li>
        <li class="order-item">
          <a href="">
            <p class="icon">
              <img src="https://m.user.tcl.com/img/icon-deli.png" alt="">
            </p>
            <span>待发货</span>
          </a>
        </li>
        <li class="order-item">
          <a href="">
            <p class="icon">
              <img src="https://m.user.tcl.com/img/icon-rece.png" alt="">
            </p>
            <span>待收货</span>
          </a>
        </li>
        <li class="order-item">
          <a href="">
            <p class="icon">
              <img src="https://m.user.tcl.com/img/icon-asse.png" alt="">
            </p>
            <span>待评价</span>
          </a>
        </li>
      </ul>
    </div>
    </div>

    <div class="infor-box mart">
      <div class="enter-list">
        <ul>
          <li class="enter-item">
            <a href="">
            <p class="integral">0</p>
            <span>我的收藏</span>
            </a></li>
          <li class="enter-item">
            <a href="">
            <p class="integral">0</p>
            <span>优惠券</span>
            </a></li>
          <li class="enter-item">
            <a href="">
            <p class="integral">0</p>
            <span>卡包</span>
            </a></li>
          <li class="enter-item">
            <a href="">
            <p class="integral">0</p>
            <span>我的预约</span>
            </a></li>
        </ul>
      </div>
    </div>
    <div class="infor-box btn-con" v-show="this.$store.state.isLogined == 1">
			<button class="logOut" @click="logOut">退出登录</button>
		</div>
  </div>
</div>

<!-- 底部 -->
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
<style>
.btn-con{
	margin-top: 8rem;
	text-align: center;
}
.btn-con .logOut{
	border: none;
	padding: .8rem .8rem;
	width: 50%;
	background-color: #ff4545;
	color: #fff;
	font-size: 1rem;
}
  #Myheader{
  background-color: #fff;
  color: #555;
      position: fixed;
    z-index: 2;
    width: 100%;
    top: 0;
}
#my-tabbar /deep/ .is-selected{
  color:#e98f36;
}
a{
  text-decoration: none;
  color: #333;
}
/* 登录注册 */
.user-index{
  margin-top: 40px;
}
.user-index .index-top{
      width: 100%;
    height: 8.5rem;
    background-image: url(https://m.user.tcl.com/img/bg.png);
    background-size: contain;
}
.user-index .index-top .notlogged {
    text-align: center;
    height: 8.5rem;
    background-size: 100% auto;
}
.user-index .index-top .img-box {
    height: 6.25rem;
    overflow: hidden;
}
.user-index .index-top .user-img {
    width: 5.1rem;
    height: 5.1rem;
    border-radius: 3.1rem;
    overflow: hidden;
    display: inline-block;
    margin-top: .6rem;
    margin-bottom: .55rem;
}
.user-index .index-top .user-img img {
    max-width: 100%;
}
.user-index .index-top .notlogged p {
    color: #fff;
    font-size: 1rem;
}
/*我的订单 */
.user-index .index-infor .infor-box {
    font-size: .6rem;
    padding: 0 .75rem;
    background-color: #fff;
}
.user-index .index-infor .infor-box .order-infor {
    color: #333;
    height: 3.45rem;
    font-size: 1rem;
    line-height: 3.45rem;
    border-bottom: 1px solid #e6e6e6;
    border-bottom: none!important;
}
.user-index .index-infor .infor-box .order-infor span {
    color: #999;
    font-size: .9rem;
    float: right;
}
.user-index .index-infor .infor-box .order-infor span i {
    display: inline-block;
    padding-left: .25rem;
}
.user-index .index-infor .infor-box .order-list {
    color: #333;
    overflow: hidden;
    width: 100%;
}
#offGroup{
  outline: 0;
  list-style-type: none;
}
.user-index .index-infor .infor-box .order-list .order-item {
    position: relative;
    width: 25%;
    float: left;
    margin: .7rem 0;
    text-align: center;
}
.user-index .icon {
    width: 1.8rem;
    height: 1.8rem;
    margin: 0 auto;
    margin-bottom: .55rem;
}
.user-index .icon img {
    max-width: 100%;
}
.user-index .index-infor .infor-box .order-list .order-item span{
  font-size: .9rem;
}
.user-index .index-infor .infor-box.mart {
    margin-top: .65rem;
}
.user-index .index-infor .infor-box .enter-list {
    width: 100%;
    color: #333;
    overflow: hidden;
}
.user-index .index-infor .infor-box .enter-list .enter-item {
    width: 25%;
    float: left;
    margin: .7rem 0;
    text-align: center;
}
.user-index .index-infor .infor-box .enter-list .enter-item .integral {
    height: 2.125rem;
    font-size: 1.25rem;
    text-align: center;
    margin-bottom: .1rem;
}
.user-index .index-infor .infor-box .enter-list .enter-item span {
    font-size: .9rem;
}
</style>
<script>
export default {
  data(){
    return{
      tabbar:'mine'
    }
  },
   watch:{
    //监听底部选项卡
    tabbar(value){
      if(value == 'index'){
        this.$router.push('/').catch(e=>{})
      }else if(value == 'category'){
        this.tabbar == 'category';
        this.$router.push('/cate').catch(e=>{});
      }else if(value == 'shoppingCart'){
        this.tabbar == 'shoppingCart';
        this.$router.push('/cart').catch(e=>{});
      }else if(value == 'mine'){
        this.tabbar == 'mine';
        this.$router.push('/me').catch(e=>{});
      }
    }
  },
  mounted() {
    
  },
  methods: {
    logOut() {
      if (this.$store.state.isLogined == 1) {
        this.$store.commit("setUser", "未登录");
        this.$store.commit("logined", "0");
        localStorage.setItem("isLogined", "0");
        localStorage.setItem("username", "未登录");
      }
    }
  }
}
</script>