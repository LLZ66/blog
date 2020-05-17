<template>
  <div class="swiper wrap">
    <img :src = imgList[1] alt="">
    <div class="dots">
      <!-- <span v-for="(index, item) in imgList" @click="dotclick(index) :class="{active: index === currentIndex}" :key="dot""></span> -->
    </div>
  </div>
</template>

<script>
export default {
    data() {
      return {
        imgList: ['~assets/img/bimg/1.jpg','~assets/img/bimg/2.jpg','~assets/img/bimg/3.jpg','~assets/img/bimg/4.jpg'],
        currentIndex: 0
      }
    },
    methods: {
      dotclick(index) {
        this.currentIndex = index
      }
    }
    
  }
</script>

<style scoped>
  .swiper {
    position: relative;
    height: 500px;
  }
  .swiper .dots {
    position: absolute;
    bottom: 20px;
    right: 20px;
  }
  .swiper .dots span {
    display: inline-block;
    margin-left: 20px;
    height: 8px;
    width: 8px;
    background-color: #fff;
    border: 1px solid gray;
    border-radius: 50%;
  }
  .active {
    background-color: #f00;
  }
</style>