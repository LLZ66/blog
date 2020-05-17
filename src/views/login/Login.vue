<template>
  <div class="login content">
    <el-input type="password" v-model="userpassword" placeholder="请输入密码" class="pwdinput" @keyup.enter.native="inputpwd(userpassword)"></el-input>
    <el-button type="primary" plain @click="inputpwd(userpassword)">确定</el-button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      userpassword: "",
    }
  },
  methods: {
    inputpwd(userpassword) {
      if(userpassword === this.$store.state.password) {
        this.$router.push("/beauty111");
        this.$store.commit('changeuserpwd', {
          userpassword
        })
      }else {
        alert("密码不正确,请重新输入")
        this.userpassword = ""
      }
    }
  }
}
</script>

<style scoped>
    .login {
      text-align: center;
      padding-top: 12.5rem;
    }
    .login .pwdinput {
      width: 18.75rem;
    }
</style> 