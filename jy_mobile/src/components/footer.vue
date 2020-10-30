<template>
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
</template>
<style scoped>
#my-tabbar /deep/ .is-selected{
  color:#e98f36;
}
</style>
<script>
export default {
  data(){
    return{
      tabbar:'index'
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
  }
}
</script>