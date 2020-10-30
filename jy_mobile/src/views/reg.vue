<template>
  <div>
    <mt-header title="注册" id="Myheader">
  <router-link to="/me" slot="left">
    <mt-button icon="back"></mt-button>
  </router-link>
</mt-header>
<!-- 登录部分 -->
<div class="user-register">
  <!-- 标题 -->
  <div class="login-tab">
    <span id="active">用户账号注册</span>
  </div>
  <!-- 输入框 -->
  <div>
    <div class="user-box">
      <div class="reg-box">
        <span class="icon-user"><img src="../assets/user.png" alt=""></span>
        <input type="text" placeholder="手机号/邮箱/用户名" v-model="uname" class="reg-input">
      </div>
      <div class="reg-box">
        <span class="icon-user"><img src="../assets/upwd.png" alt=""></span>
        <input type="text" placeholder="登录密码" v-model="upwd" class="reg-input">
      </div>
      <div class="reg-box">
        <button class="sumbit" @click="register">注册</button>
      </div>
      <div class="login-tab">
    <span class="tabItem">忘记密码</span>
    <span class="tabItem"><router-link to="/login">去登录</router-link></span>
  </div>
    </div>
  </div>
</div>
  </div>
</template>
<style scoped>
div{
  box-sizing: border-box;
}
.user-register {
    height: 100%;
    margin-top: 40px;
    background-color: #fff;
    border-top: 1px solid #999;
}
.user-register .login-tab {
    height: .75rem;
    line-height: .75rem;
    font-size: 1.1rem;
    margin: 2.5rem auto;
    text-align: center;
}
.user-register .login-tab #active {
    color: #f45;
    border: none;
}
.user-register .login-tab span {
    text-align: center;
    padding: 0 .82rem;
    color: #999;
}
.user-register .login-tab span:nth-child(1) {
    border-right: 1px solid #e6e6e6;
}
.user-register .user-box {
    width: 100%;
    height: 100%;
    margin-top: 1.55rem;
    padding: 0 1rem;
}
.user-register .user-box .reg-box {
    width: 100%;
    font-size: .75rem;
    padding-bottom: 1.25rem;
    position: relative;
}
.user-register .user-box .reg-box .icon-user {
    color: #777;
    width: 2.95rem;
    height: 2.95rem;
    font-size: .75rem;
    line-height: 2.95rem;
    text-align: center;
    position: absolute;
    top: 0;
    left: .5rem;
}
.user-register .user-box .reg-box .icon-user img{
    width: 1.5rem;
    height: 1.5rem;  
    top: 0.5rem;
    left: 1rem;
}
.user-register .user-box .reg-box .reg-input {
    width: 100%;
    height: 2.95rem;
    font-size: 1rem;
    border: 1px solid #c3baba;
    text-indent: 4.5rem;
    vertical-align: top;
    box-sizing: border-box;
}
.user-register .sumbit {
    width: 100%;
    color: #fff;
    height: 2.95rem;
    font-size: 1.2rem;
    line-height: 1.75rem;
    margin-top: .55rem;
    text-align: center;
    display: block;
    border: 1px solid #f45;
    background-color: #f45;
}
</style>
<script>
export default {
  data(){
    return {
      uname:'',
      upwd:'',
      reg:/^(?!_)(?!.*?_$)[a-zA-Z0-9_\u4e00-\u9fa5]+$/
    }
  },
  methods:{
        register(){
            if(this.reg.test(this.uname)){
            this.axios.post(
            "/user/register",
            `uname=${this.uname}&upwd=${this.upwd}`
          ).then(result=>{
            if(result.data==1){
              this.$toast('注册成功')
              this.$router.push('/login')         
            }else{
              this.$toast("注册失败")
            } 
          })
        }else if(this.uname == ''){
          this.$toast('用户名不能为空')    
        }else{
          this.$toast("用户名不可用！")
        }
        }
    }
}
</script>