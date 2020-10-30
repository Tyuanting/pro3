<template>
  <div>
    <div class="swipe">
      <mt-swipe
        :showIndicators="true"
        :auto="5000"
        :speed="500">
          <mt-swipe-item v-for="(item,index) of swipe" :key="index"><img :src="`banner/${item.img}`">
          </mt-swipe-item>
      </mt-swipe>
    </div>
  </div>
</template>
<style scoped>
.swipe{
  height:15.88rem;
}
.swipe img{
  height:15.88rem;
  width: 100%;
}
</style>
<script>
export default {
  data(){
    return {
      swipe:[]
    }
  },
  mounted(){
    this.axios.get('/mindex/swipe').then(result=>{
      this.swipe = result.data;
      console.log(result.data)
    });
  }
}
</script>