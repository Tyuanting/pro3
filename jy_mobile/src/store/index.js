import Vue from 'vue'
import Vuex from 'vuex'
import qs from 'qs'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  //物品
  state: {
    // 记录登陆状态
    isLogined: localStorage.getItem('isLogined') ? localStorage.getItem('isLogined') : 0,
    username: localStorage.getItem('username') ? localStorage.getItem('username') : '登录/注册',
    //模拟数据 
    cartGoods: [
      
      
    ],
  },
  mutations: {
    logined(state, val) {
      state.isLogined = val;
    },
    setUser(state, user) {
      state.username = user;
    }
  },
  actions: {
  },
  modules: {
  }
})
