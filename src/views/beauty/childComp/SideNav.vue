<template>
  <div class="sidenav noselect">
      <i class="top-btn iconfont" @click="topclick()">&#xe62c;</i>
      <ul class="namelist">
        <li v-for="list in imglist" @click="imglistclick(list)"><span>{{list}}</span></li>
      </ul>
      <i class="bottom-btn iconfont" @click="bottomclick()">&#xe62d;</i>
    </div>
</template>

<script>
export default {
  props: {
    imglist: {
      type: Array,
      default() {
        return []
      }
    }
  },
  data() {
    return {
      currentIndex: 0,
      translate: 0,
    }
  },
  methods: {
    imglistclick(list) {
      this.$emit('sidenavclick', list)
    },
    topclick(e) {
      if(this.currentIndex <=0) {
        return
      }
      this.translate += 80
      this.currentIndex--
      this.changeStyle(this.translate)
    },
    bottomclick(e) {
      if(this.currentIndex >=Object.keys(this.imglist).length - 5) {
        return 
      }
      this.translate -=80
      this.currentIndex++
      this.changeStyle(this.translate)
    },
    changeStyle(translate) {
      let ul = document.getElementsByClassName('namelist')[0]
      ul.style.transform = `translate(0, ${translate}px)`
    },
  }
}
</script>

<style>
  .beauty .sidenav {
    position: fixed;
    left: 0;
    top: 6rem;
    height: 25rem;
    width: 5rem;
    background-color: #ee5253;
    border: 2px solid #ee5253;
    box-shadow: 0 0 1px 1px #ee5253;
    overflow: hidden;
    z-index: 9;
  }
  .beauty .sidenav ul {
    height: 25rem;
    transition: all 0.2s ease;
  }
  .beauty .sidenav ul li {
    text-align: center;
    height: 5rem;
    line-height: 5rem;
    transition: all 0.3s ease;
    cursor: pointer;
  }
  .beauty .sidenav ul li span {
    color: #fff;
  }
  .beauty .sidenav ul li:hover {
    background-color: #fff;
  }
  .beauty .sidenav ul li:hover span {
    color: #ee5253;
  }
  /* arrow */
  .sidenav .top-btn, .sidenav .bottom-btn {
    position: absolute;
    z-index: 9;
  }
  .sidenav .top-btn {
    top: 5px;
    left: 0;
    right: 0;
    text-align: center;
  }
  .sidenav .bottom-btn {
    bottom: 5px;
    left: 0;
    right: 0;
    text-align: center;
  }
  .sidenav .iconfont {
    color: #e5e5e5;
  }
  .sidenav .iconfont:hover {
    cursor: pointer;
    color: red;
  }
</style>