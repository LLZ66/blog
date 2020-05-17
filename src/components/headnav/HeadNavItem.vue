<template>
  <div class="head-nav-item">
    <div class="left">
      <i class="iconfont wind">&#xe6c7;</i>
      <i class="iconfont orange">&#xe601;</i>
    </div>
    <div class="right">
      <a v-for="item in itempart" :path="item.path" @click="headNavItemClick(item.path)" class="noselect"><i class="iconfont" :class="item.font"></i><span>{{item.name}}</span></a>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      itempart : [
        {"path":"/home","font":"icon-home","name":"home"},
        {"path":"/beauty","font":"icon-flower","name":"beauty"},
        {"path":"/music","font":"icon-music","name":"music"},
        {"path":"/more","font":"icon-shuye","name":"more"}
      ]
    }
  },
  methods: {
    headNavItemClick(path) {
      this.$router.push(path)
      if (path == "/beauty") {
        this.$store.state.userpassword === this.$store.state.password ? this.$router.push("/beauty111") : this.$router.push("/login");
      }
    },
  }

  
}
</script>

<style>
  @import url("~assets/icon/font/iconfont.css");
  
  .head-nav-item{
    display: flex;
    justify-content: space-between;
  }
  .head-nav-item .left {
    justify-content: flex-start;
    color: #c8d6e5;  
  }
  .head-nav-item .left .orange, .head-nav-item .left .wind {
    display: inline-block;
    transition: all 1.5s ease;
  }
  @media screen and (min-width: 768px) {
    .head-nav-item .left:hover .orange {
    transform: translate(5rem) rotate(720deg);
    }
   .head-nav-item .left:hover .wind {
    transform: translate(10px);
    color: white;
    }
  }
  
  .head-nav-item .right {
    display: flex;
    justify-content: flex-end;
  }
  .head-nav-item .right a{
    padding: 0 1.25rem;
    color: #c8d6e5;
    /* border-bottom: 1px solid #ee5253; */
    transition: all 0.3s ease;
    cursor: pointer;
  }
  .head-nav-item .right a span {
    /* color: #c8d6e5; */
    /* font-family: "iconfont"; */
    margin-left: 0.625rem;
  }
  .head-nav-item .right a:hover {
    background-color: #fff;
    /* border-bottom: 1px solid #fff; */
    color: #ff6b6b;
  }
</style>