<template>
  <div class="cartadd-style">
    <div class="cartadd">
      <span @click="red">-</span>
      <input type="text" v-model="num" />
      <span @click="add">+</span>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      num: 1,
    };
  },
  methods: {
    red() {
      if (this.num > 1) {
        this.num--;
      } else if (this.num == 1) {
        this.num = 1;
      }
    },
    add() {
      this.num++;
    },
  },
};
</script>
<style scoped>
.cartadd-style{
  display: flex;
  justify-content: flex-end;
}
.cartadd {
  width: 65%;
  border: 1px solid #eeeded;
  display: flex;
  text-align: center;
  /* margin-left: 30%; */
}
.cartadd > span {
  width: 35%;
}
.cartadd > input {
  width: 60%;
  text-align: center;
  border: 0;
  background-color: transparent;
  border-left: 1px solid #eeeded;
  border-right: 1px solid #eeeded;
}
</style>