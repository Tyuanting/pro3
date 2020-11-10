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
    //购物车数据 
    cart: [],
    proCount:[],
    checkArray:[],
    checkAllstate:0
  },
  
  mutations: {
    logined(state, val) {
      state.isLogined = val;
    },
    setUser(state, user) {
      state.username = user;
    },
    addcart(state,payload){
      state.cart.push(payload);
      state.proCount.push(1);//添加新pro时 往数量数组中新index存1
      state.checkArray.push(1);//添加新pro时 往复选框数组中新index存1,表示复选框选定
    },
    addnumber(state,payload){
      state.proCount[payload]=state.proCount[payload]+1;//添加商品重复时，往此数量[此蛋糕下标]+1
      //为了重新渲染页面 克隆一个数组 然后整体复制给原本数组
      let clone=[];
      for(var item in state.proCount){
        clone[item]=state.proCount[item]
      }
      state.proCount=clone;
    },
    rednumber(state,payload){
      if(state.proCount[payload] >= 1){
        state.proCount[payload]=state.proCount[payload]-1;
      }//添加蛋糕重复时，往此数量[此蛋糕下标]+1
      //为了重新渲染页面 克隆一个数组 然后整体复制给原本数组
      let clone=[];
      for(var item in state.proCount){
        clone[item]=state.proCount[item]
      }
      state.proCount=clone;
    },
     //取消复选框，复选框对应下标归0，反之
     changecheck(state,payload){
      let clone=[];
      if(state.checkArray[payload]==0){
        state.checkArray[payload]=1;
        //为了重新渲染页面 克隆一个数组 然后整体复制给原本数组
        for(var item in state.checkArray){
          clone[item]=state.checkArray[item]
        }
        state.checkArray=clone;
      }else{
        state.checkArray[payload]=0;
        //为了重新渲染页面 克隆一个数组 然后整体复制给原本数组
        for(var item in state.checkArray){
          clone[item]=state.checkArray[item]
        }
        state.checkArray=clone;
      }
    },
    //检验复选框数组是否有0，有的话 全选框不选
    checkAll(state){
      //先判断购物车里是否有内容
      if(state.checkArray.length>0){
        //遍历购物车，看勾选框是否勾选
        for(var i=0;i<state.checkArray.length;i++){
          if(state.checkArray[i]==1){
            state.checkAllstate=1;
          }else{
            //如果有一个未勾选 就把全选状态变为false并跳出循环
            state.checkAllstate=0;
            break;
          }
        }
      }else{state.checkAllstate=0;}
    },
    choseAll(state){
      let clone=[];
      //判断状态，每次点击，全选状态取反
      if(state.checkAllstate==0){
        state.checkAllstate=1;
      }else{
        state.checkAllstate=0;
      }
      //遍历，让每一个单选框状态和全选一致
      for(var i=0;i<state.checkArray.length;i++){
        state.checkArray[i]=state.checkAllstate;
      }
      //克隆一下数组再整体重新复制给checkArry，以便重新渲染
      for(var item in state.checkArray){
        clone[item]=state.checkArray[item]
      }
      state.checkArray=clone;
    }
  },
  getters:{
    //计算购物车总价格函数
    priceall(state){
      let sum=0;
      if(state.cart.length>0){
        for(let i=0;i<state.cart.length;i++){
          if(state.checkArray[i] == 1){
            sum=sum+state.cart[i].proPrice*state.proCount[i];
          }
        }
      }
      return sum;    
    }
  },
  actions: {
  },
  modules: {
  }
})
