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
  </div>
</template>
<style scoped>
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
</style>
<script>
export default {
  data() {
    return {
      q: "" //搜索内容
    };
  },
  methods: {
    tosearch(e) {
      if (e.keyCode == 13) {
        this.$router.push({ path: "/searchResult", query: { q: this.q } }); // 注意：使用path时， params 将不可用
        window.location.reload(); //搜索后刷新一下页面
      }
    }
  }
};
</script>