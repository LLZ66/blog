<template>
  <div class="home">
    <!-- <swiper></swiper> -->
    <wall-paper></wall-paper>
    <daily></daily>
  </div>
</template>

<script>
import Swiper from 'components/swiper/Swiper';
import WallPaper from './childComp/WallPaper'
import Daily from './childComp/Daily'
export default {
  data() {
    return {
      
    }
  },
  components: {
    Swiper,
    WallPaper,
    Daily
  },
  methods: {

  }
};
</script>

<style>
  .home {
    animation: fade 0.5s ease;
  }
</style>
