<template>
  <div id="app">
    <head-nav></head-nav>
    <router-view></router-view>
    <!-- <live2d></live2d> -->
  </div>
</template>

<script>
import HeadNav from 'components/headnav/HeadNav.vue';
// import Live2d from 'components/live2d/live2d.vue';

export default {
  name: 'app',
  components: {
    HeadNav,
    // Live2d
  },
  //决定刷新更新状态或者重开网页更新状态
  created () {
    if (sessionStorage.getItem("store")) {
      this.$store.replaceState(Object.assign({}, this.$store.state, JSON.parse(sessionStorage.getItem("store"))))
    }
    window.addEventListener("beforeunload", () => {
      sessionStorage.setItem("store", JSON.stringify(this.$store.state))
    })
  },
  
};
</script>
<style>
@import url('assets/css/reset.css');
@import url('assets/css/common.css');
body {
  background-color: #ced6e0;
}
#app {
  height: 90vh;
}
</style>
