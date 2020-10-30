<template>
  <div>
    <div class="detail-page">
    <!-- 顶部轮播图和头部 -->
    <div class="d-swipe">
      <mt-swipe
      :showIndicators="false"
        :auto="5000"
        :speed="500">
          <mt-swipe-item>
            <div>
              <header class="header-top">
                <div class="header-sm">
                  <div class="hd-back">
                    <a href="">
                      <i class="icon-back">
                      <img src="../assets/return.png" alt="">
                    </i>
                    </a>
                  </div>
                  <div class="hd-cart">
                    <a href="">
                      <i class="icon-back">
                      <img src="../assets/button/shoppingCart.png" alt="">
                      </i>
                    </a>
                  </div>
                </div>
              </header>
              <a href="">
                <img :src="`${details.d_img1}`" alt="" class="banner-img">
              </a>
            </div>
          </mt-swipe-item>
          <mt-swipe-item>
            <div>
              <header class="header-top">
                <div class="header-sm">
                  <div class="hd-back">
                    <a href="">
                      <i class="icon-back">
                      <img src="../assets/return.png" alt="">
                    </i>
                    </a>
                  </div>
                  <div class="hd-cart">
                    <a href="">
                      <i class="icon-back">
                      <img src="../assets/button/shoppingCart.png" alt="">
                      </i>
                    </a>
                  </div>
                </div>
              </header>
              <a href="">
                <img :src="`${details.d_img2}`" alt="" class="banner-img">
              </a>
            </div>
          </mt-swipe-item>
      </mt-swipe>
    </div>
    <!-- 详情部分 -->
    <div class="description">
      <div class="des-content">
        <div class="nomal-price">
          <div class="d-title">{{details.title}}</div>
          <p class="d-dec">{{details.details}}</p>
          <div class="good-price">
            <div class="price-text">
              <span style="color:#ff4545;">￥</span>
              <span class="sale-price" style="color:#ff4545; font-size:1.5rem">{{details.price}}
                <small class="sm" style="color:#ff4545; font-size:1rem">.00</small>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- 规格 -->
    <div class="selectSize">
      <div class="row">
        <div class="s-col" style="width:16%;font-size:.8rem">
          <strong style="font-weight:400; color:#999">规格</strong>
        </div>
        <div class="s-col2">
          <div class="s-col3">已选：65Q8</div>
          <div class="coupon-icon" @click="Show">
            <i class="icon-right" style="display:inline-block">
              <img src="../assets/right.png" alt="">
            </i>
          </div>
        </div>
      </div>
    </div>
    <!-- 选项规格 -->
    <div class="black-mark" :style="{display:`${isShow==true ? 'block' : 'none'}`}"></div>
    <div :class="`${isShow==false ? 's parameter' : 'd parameter'}`">
      <div class="p-content">
        <div class="param-product">
          <div class="pic">
            <img src="image/tv1.png" alt="">
          </div>
          <div class="p-info">
            <p class="p-title">{{details.title}}</p>
            <p class="p-price">￥5999.00<span><span></span></span></p>
            
          </div>
        </div>
        <div class="choose-type">
          <div class="type">
            <h4>规格</h4>
            <div class="item">
              <button class="select">000</button>
              <button class="disabled">...</button>
            </div>
          </div>
          <div class="choose-amount">
            <span class="txt">购买数量</span>
            <div class="item">
              <button class="symbol-color-active">-</button>
              <input type="number" class="number">
              <button class="symbol-color">+</button>
            </div>
          </div>
        </div>
        <div class="spec-btn">
          <div class="btn">
            <button class="buy-ing">立即购买</button>
            <button class="add-cart">加入购物车</button>
          </div>
        </div>
        <div class="close" @click="offShow">×</div>
      </div>
    </div>
    <!-- 详情页的页脚 -->
    <footer class="normal-footer">
      <div class="footer_bar">
        <div class="col">
          <div class="share-icon">
            <i class="icon"><img src="../assets/button/main.png" alt=""></i>
            <span>首页</span>
          </div>
        </div>
          <div class="col">
          <div class="share-icon">
            <i class="icon"> <img src="../assets/button/category.png" alt=""> </i>
            <span>分类</span>
          </div>
          </div>
        <div class="col">
          <div class="share-icon">
            <i class="icon"> <img src="../assets/button/fav.png" alt=""> </i>
            <span>收藏</span>
        </div>
        </div>
        <div class="footer-radius">
          <div class="addToCart">加入购物车</div>
          <div class="buy">立即购买</div>
        </div>
      </div>
    </footer>
    </div>
  </div>
</template>
<style>
/* 规格选择 */
.parameter .p-content .spec-btn{
  position: absolute;
  bottom: 0;
  width: 100%;
  box-sizing: border-box;
}
.parameter .p-content .spec-btn .btn{
  box-sizing: border-box;
  padding: .5rem;
  width: 100%;
  display: flex;
  flex-direction: row;
}
.parameter .p-content .spec-btn .btn .buy-ing{
  color: #fff;
    background-color: #f0c08d;
    border-top-left-radius: 1.5rem;
    border-bottom-left-radius: 1.5rem;
  border-right: none;
  flex: 1;
  height: 2.8rem;
  font-size: 1rem;
  border: none;
}
.parameter .p-content .spec-btn .btn .add-cart{
  background: #ff4545;
  color: #fff;
  border: none;
      border-top-right-radius: 1.5rem;
    border-bottom-right-radius: 1.5rem;
  flex: 1;
  height: 2.8rem;
  font-size: 1rem;
}
.choose-amount{
  margin-top: .7rem;
    height: 1.146666rem;
    padding: 0 .5rem;
    -ms-flex-direction: column;
    flex-direction: column;
    -ms-flex-pack: justify;
    justify-content: space-between;
    display: flex;
    
}
.choose-amount .txt{
  font-size: .9rem;
    font-weight: 400;
    padding-bottom: .7rem;
    color: #999;
}
.choose-amount .item{
  margin-top: .3rem;
  display: flex;
  flex-direction: row;
}
.choose-amount .item .symbol-color-active{
  color: #ccc;
  border-right: none;
  height: 1.9rem;
  width: 2.3rem;
  background: 0 0;
  border: 1px solid #b2b2b2;
    box-sizing: border-box;
  
}
.choose-amount .item .symbol-color{
  color: #7f7f7f;
  border-left: none;
  height: 1.9rem;
  width: 2.3rem;
  background: 0 0;
  border: 1px solid #b2b2b2;
    box-sizing: border-box;

}
.choose-amount .item input{
  height: 1.9rem;
    font-size: .373333rem;
    margin-left: -.026667rem;
    width: 3.4rem;
    text-align: center;
    border-radius: 0;
    border: 1px solid #b2b2b2;
    box-sizing: border-box;
}
.parameter .p-content .close{
  height: 2.5rem;
    width: 2.5rem;
    position: absolute;
    top: .8rem;
    right: .2rem;
    text-align: center;
    font-size: 1.5rem;

}
.parameter .p-content .choose-type{
  overflow: scroll;
    overflow-x: hidden;
    position: absolute;
    top: 8rem;
    left: 0;
    bottom: 1.6rem;
    right: 0;
}
.parameter .p-content .choose-type .type{
  box-sizing: border-box;
    padding: 0 .5rem;
    font-size: .32rem;
}
.parameter .p-content .choose-type .type h4{
  font-size: .9rem;
    font-weight: 400;
    padding-bottom: .7rem;
    color: #999;
}
.parameter .p-content .choose-type .type .item{
  max-height: 2.666667rem;
    overflow: hidden;
    overflow-y: auto;
}
.parameter .p-content .choose-type .type .item>button{
max-width: 6rem;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
    display: inline-block;
    font-size: .5rem;
    padding: .2rem .7rem;
    margin-right: .5rem;
    margin-bottom: .25rem;
    color: #7f7f7f;
    background: #fff;
    border-radius: 4rem;
        border: 1px solid #b2b2b2;
}
.parameter .p-content .choose-type .type .item .select{
  border-color: #d9232e;
    color: #d9232e;
}
.parameter .p-content .param-product .p-info{
  flex: 1;
  overflow: hidden;
  padding: .6rem 0 .6rem 1rem;
}
.parameter .p-content .param-product .p-info p{
  line-height: 1.2rem;
  font-size: 1rem;
  
}
.parameter .p-content .param-product .p-info .p-title{
  padding-bottom: .8rem;
  padding-top: .8rem;
  
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.parameter .p-content .param-product .p-info .p-price{
  color: #ff4545;
  font-weight: 600;
}
.parameter .p-content{
  height: 100%;
  width: 100%;
  position: relative;
  margin: 0 auto;
  box-sizing: border-box;
  background: #fff;
}
.parameter .p-content .param-product{
  box-sizing: border-box;
  padding: 1.2rem .7rem 1rem;
  overflow: hidden;
  display: flex;
  flex-direction: row;
}
.parameter .p-content .param-product .pic{
  border: 1px solid #dedede;

  height: 5.4rem;
  width: 5.4rem;
  position: relative;
  margin-right: .35rem;
}
.parameter .p-content .param-product .pic img{
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate3d(-50%,-50%,0);
  width: 100%;
}
.black-mark{
  background: rgba(0,0,0,.6);
  height: 100%;
  position: fixed;
  width:100%;
  top:0;
  left:0;
  z-index:2000;
  /* display: none; */
}
.d{
  transform: translateZ(0)!important;
    transition-duration: .4s;
    opacity: 1;
}
.s{
  transform: translate3d(0,100%,0)!important;
    transition-duration: .4s;
}
.parameter{
  width: 100%;
  position: fixed;
  top: 40%;
  bottom: 0;
  left: 0;
  z-index: 2022;
}

/* 规格 */
.selectSize{
  position: relative;
  font-size: .6rem;
  background-color: #fff;
}
.selectSize .row{
  display: flex;
  align-items: center;
  padding: .5rem 0;
  margin: 0 1rem;
  position: relative;
  height: auto;
  zoom: 1;
}
.selectSize .row::after,.selectSize .row::before{
  content: "";
    display: table;
    clear: both;
    overflow: auto;
    box-sizing: border-box;
    outline: 0;
}
.selectSize .s-col2{
  display: flex;
  align-items: center;
  width: 83%;
}
.selectSize .s-col3{
  display: block;
  width: 95%;
  font-size: 1rem;
}
.coupon-icon{
  width: 4%;
  float: left;
    -ms-flex: 0 0 auto;
    flex: 0 0 auto;
        position: relative;
}
/* 详情部分 */
.description{
  position: relative;
  border-bottom: .4rem solid #f5f5f5;
  font-size: 1rem;
  background-color: #fff;
}
.description .nomal-price{
  padding: .75rem .6rem .4rem;
}
.description .nomal-price .d-title{
  font-weight: 600;
  font-size: 1.2rem;
      line-height: 1.5rem;
}
.description .nomal-price .d-dec{
  color: #999;
  line-height: 160%;
  margin-top: .3rem;
  font-size: .9rem;
}
.description .good-price{
  margin-top: 1rem;
    position: relative;
    display: flex;
    align-items: center;
    margin-left: 0;
    margin-right: 0;
    height: auto;
    zoom: 1;
}
.description .good-price::before,.decription .good-price::after{
content: "";
    display: table;
    clear: both;
    overflow: auto;
        box-sizing: border-box;
    outline: 0;
}
.description .good-price .price-text{
  font-weight: 600;
  display: block;
  width: 80%;
}

/*  */
.d-swipe a{
  display: block;
}
.d-swipe{
    height: 24rem;
    transform: translateX(0px);
}
.header-top{
  position: absolute;
  z-index: 20;
  width: 100%;
  padding: .3rem .55rem;
  display: block;
  font-size: 1rem;
  box-sizing: border-box;
}
.header-sm{
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;
}
.header-sm .icon-back{
  height: 2rem;
  width: 2rem;
  border-radius: 100%;
  border: 1px solid #999;
  background-color: rgba(0, 0, 0, .1);
  margin-top: 0;
  display: inline-block;
}
.header-sm .icon-back img{
  height: 1.5rem;
  width: 1.5rem;
  vertical-align: middle;
  margin: .3rem 0 0 .25rem;
}
.banner-img{
  width: 100%;
  height: 100%;
}

.normal-footer{
    z-index: 1600;
    position: fixed;
    width: 24rem;
    bottom: 0;
    background-color: #fff;
    display: block;
    font-size: .65rem;
}
.normal-footer .footer_bar{
    height: 3.3rem;
    line-height: 2.3rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    white-space: nowrap;
    overflow: hidden;
    background-color: #fff;
    position: relative;
    margin-left: 0;
    margin-right: 0;
    zoom: 1;
}
.footer_bar::before{
    content: "";
    display: table;
    clear: both;
    overflow: auto;
    box-sizing: border-box;
    outline: 0;
}
.footer_bar::after{
  content: "";
    display: table;
    clear: both;
    overflow: auto;
    box-sizing: border-box;
    outline: 0;
}
.footer_bar .col{
  position: relative;
  height: 100%;

  color: #333;
  display: block;
  width: 12.5%;
}
.normal-footer .footer_bar .share-icon{
  line-height: 100%;
  padding: .45rem 0;
  display: block;
  margin-bottom: .15rem;
      margin-left: .8rem;
}
.normal-footer .footer_bar .share-icon .icon{
  height: 1.5rem;
  width: 1.5rem;
  margin-bottom: .15rem;
  display: block;
}
.normal-footer .footer_bar .share-icon .icon img{
  height: 1.5rem;
  width: 1.5rem;
}
.footer_bar .footer-radius{
  width: 56%;
  height: 2.5rem;
  line-height: 2.5rem;
}
.footer_bar .footer-radius .addToCart{
 color: #fff;
 background-color: #f0c08d;
 border-top-left-radius: 1.5rem;
 border-bottom-left-radius: 1.5rem;
 width: 48.5%;
 height: 100%;
 text-align: center;
 position: relative;
 float: left;
 font-size: .7rem;
}
.footer_bar .footer-radius .buy{
 color: #fff;
 background-color: #ff4545;
 border-top-right-radius: 1.5rem;
 border-bottom-right-radius: 1.5rem;
 width: 48.5%;
 height: 100%;
 text-align: center;
 position: relative;
 float: left;
 font-size: .7rem;
 flex: 0 0 auto;
}
</style>
<script>
export default {
  data(){
    return{
       isShow:false,
       pid:'',
       details:[]
    }
   
  },
  methods:{
    Show(){
     this.isShow = true;
    //  console.log(111)
   },
    offShow(){
     this.isShow = false;
   }
  },
  mounted(){
    this.pid=this.$route.params.pid,
    this.axios.get("/details",{
    //       参数名  props中获得地址栏中的商品编号
      params:{pid: this.pid } 
    }).then(result=>{
      this.details = result.data[0];
      console.log(this.details)
    })
  }
}
</script>