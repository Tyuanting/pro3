<template>
  <div>
    <!-- 顶部 -->
    
  <mt-header title="分类" id="Myheader">
  <router-link to="/" slot="left">
    <mt-button icon="back"></mt-button>
  </router-link>
  <router-link to="/" slot="right">
    <mt-button>编辑</mt-button>
  </router-link>
</mt-header>
  <div class="cart-content" style="top: 40px;
    position: relative;">

  
    <!-- 无商品内容 -->
    <div class="m-none">
      <div class="cart-contant-none">
        <div class="cart-contant-position">
          <div>
            <img src="../assets/nothing.png" alt="" />
          </div>
          <p>购物车暂无商品</p>
          <router-link to="/">去逛逛</router-link>
        </div>
      </div>
    </div>
    <!-- 有商品内容 -->
    <div>
      <div class="cart-list">
        <div class="cart-list-check">
          <span :class="check" @click="listcheck"></span>
        </div>
        <div class="cart-list-banner">
          <img
            src="image/tv1.png"
            alt=""
          />
        </div>
        <div class="cart-list-content">
          <div class="cart-list-title">
            <p>成都+峨眉山+乐山+都江堰6日5晚跟团游</p>
          </div>
          <div class="cart-add">
            <div class="cart-text">￥1977.3</div>
            <div>
              <my-cartadd></my-cartadd>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
    <!-- 底部结算 -->
    <div class="arr-cart-countbg">
      <div class="add-cart-count">
        <div class="add-cart-all">
          <span :class="allcheck" @click='alllistcheck'></span>
          全选
        </div>
        <div class="add-cart-total">
          <p>总计：<span>￥100</span></p>
          <div>
            <span>未含运费</span>
          </div>
        </div>
        <div class="add-cart-go">
          <router-link to>结算(0)</router-link>
        </div>
      </div>
    </div>

  </div>
</template>
<script>
export default {
  data() {
    return {
      menushow: "m-none",
      check: "cart-list-check-none",
      allcheck:'cart-allcheck-none'
    };
  },
  methods: {
    menu() {
      if (this.menushow == "m-none") {
        this.menushow = "m-block";
      } else if ((this.menushow = "m-block")) {
        this.menushow = "m-none";
      }
    },
    listcheck() {
      if (this.check == "cart-list-check-none") {
        this.check = "cart-list-check-block";
      } else if (this.check == "cart-list-check-block") {
        this.check = "cart-list-check-none";
      }
    },
    alllistcheck(){
      if (this.allcheck == "cart-allcheck-none") {
        this.allcheck = "cart-allcheck-block";
      } else if (this.allcheck == "cart-allcheck-block") {
        this.allcheck = "cart-allcheck-none";
      }
    }
  },
};
</script>
<style scoped>
#Myheader{
  background-color: #fff;
  color: #555;
      position: fixed;
    z-index: 2;
    width: 100%;
    top: 0;
}
.m-none {
  display: none;
}
.m-black {
  display: block;
}
.cart-contant-none {
  width: 100%;
  position: relative;
  height: 523px;
}
.cart-contant-position {
  position: absolute;
  top: 50%;
  left: 35%;
}
.cart-contant-position > div {
  width: 80px;
  height: 100px;
  margin: 0 auto;
}
.cart-contant-position > p {
  margin: 30px 0;
  color: #9b9b9b;
}
.cart-contant-position > div > img {
  width: 100%;
}
.cart-contant-position > a {
  color: #232326;
  text-decoration: none;
  font-size: 17px;
}
.cart-list {
  width: 100%;
  margin: 10px 0;
  display: flex;
  background-color: #fff;
}
.cart-list-check {
   width: 6%;
    line-height: 100px;
        margin-left: 15px;
    margin-right: 10px;
}
.cart-list-check-none {
  width: 100%;
  height: 20px;
  display: inline-block;
  background-image: url('../assets/check.png');
  background-size: cover;
}
.cart-list-check-block {
  width: 100%;
  height: 20px;
  display: inline-block;
  background-image: url('../assets/check.png');
  background-size: cover;
  background-position: 22px 0;
}
.cart-list-banner {
  width: 25%;
  /* margin: 0 15px 0 10px; */
}
.cart-list-banner > img {
  width: 90%;
}
.cart-list-content {
  width: 60%;
  text-align: left;
  font-size: 15px;
}
.cart-list-content>p{
  line-height: 17px;
}
.cart-list-title {
  margin: 15px 0;
  position: relative;
}
.cart-list-title > p {
      font-size: 1rem;
    line-height: 1.4rem;
    overflow: hidden;
    width: 100%;
    white-space: nowrap;
    text-overflow: ellipsis;
}
.cart-list-title > img {
  position: absolute;
  width: 20px;
  height: 20px;
  right: 0;
  top: -4px;
}
.cart-text {
  color: #f23030;
}
.cart-add {
  display: flex;
  width: 90%;
}
.cart-add > :first-child {
  width: 50%;
  line-height: 21px;
}
.cart-add > :last-child {
  width: 50%;
}
.arr-cart-countbg{
  width: 100%;
  background-color: #f3f5f7;
  height: 50px;
  position: fixed;
  bottom: 0;
}
.add-cart-count{
  width: 100%;
  display: flex;
  font-size: 14px;
      background-color: #fff;
}
.add-cart-all{
  width: 20%;
  height: 50px;
  line-height: 50px;
}
.cart-allcheck-none{
  width: 20px;
  height: 20px;
  display: inline-block;
  background-image: url('../assets/check.png');
  background-size: cover;
  vertical-align: middle;
  margin: 0 2px;
}
.cart-allcheck-block{
  background-position: 20px 0;
  width: 20px;
  height: 20px;
  display: inline-block;
  background-image: url('../assets/check.png');
  background-size: cover;
  vertical-align: middle;
  margin: 0 2px;
}
.add-cart-total{
  width: 54%;
  height: 50px;
  text-align: right;
  line-height: 26px;
}
.add-cart-total>p>span{
  color: #f23030;
  margin-right: 5px;
}
.add-cart-total>div>span{
  color: #666;
  margin-right: 5px;
}
.add-cart-go{
  width: 40%;
  height: 50px;
  text-align: center;
  background-color: #ff4545;
}
.add-cart-go>a{
  line-height: 50px;
  color: white;
  text-decoration: none;
  font-size: 1rem;
}
</style>