<template>
  <div class="todopage content">
    <i class="iconfont">&#xe604;</i>
    <strong>Find a way to recode your life</strong>
    <span>(a simple tool to recode time)</span>
    <!-- <el-button plain></el-button> -->
    <router-link to="/todo"><el-button type="primary" round id="btn">click here to start</el-button></router-link>
  </div>
</template>

<script>
export default {
  computed: {
    btn() {
      return document.getElementById("btn")
    }
  },
  methods: {
    // btnclick() {
    //   this.$router.push("/more/todo")
    // },
  },
  mounted() {
    let head = document.getElementById("head-nav");
    head.style.backgroundImage = `linear-gradient(90deg, #2ecc71, #27ae60, #16a085, #1abc9c)`;
    head.style.boxShadow = `0 1px 1px 0 #1abc9c`;
  },
  destroyed() {
    let head = document.getElementById("head-nav");
    head.style.backgroundImage = `linear-gradient(90deg, #fd79a8, #ee5253)`;
    head.style.boxShadow = `0 1px 1px 0 #fd79a8`;
  }
}
</script>

<style>
  .todopage {
    padding-top: 5rem;
    height: 100vh;
    background: url("~assets/img/more.jpg") top left repeat ;
    text-align: center;
  }
  .todopage i {
    font-size: 7rem;
    color: seagreen;
    display: block;
  }
  .todopage strong {
    display: block;
    position: relative;
    font-weight: normal;
    font-size: 3rem;
    color: #ecf0f1;
    margin-bottom: 2rem;
  }
  .todopage>span {
    display: block;
    color: #ecf0f1;
    margin-bottom: 2rem;
  }
</style>