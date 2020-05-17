<template>
  <div id="head-nav">
    <head-nav-item>
      
    </head-nav-item>
  </div>
</template>

<script>
import HeadNavItem from './HeadNavItem'

export default {
  components: {
    HeadNavItem
  }
}
</script>

<style>
  body {
    background-color: #f1f2f6;
  }
  #head-nav {
    position: fixed;
    top: 0;
    z-index: 999;
    width: 100%;
    /* background-color:#ee5253;
     */
    background-image: linear-gradient(90deg, #fd79a8, #ee5253);
    height: 2.75rem;
    line-height: 2.75rem;
    border: 1px solid transparent;
    box-shadow: 0 1px 1px 0 #fd79a8;
  }
</style>
  
