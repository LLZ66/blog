<template>
  <div class="beauty">
    <side-nav :imglist="imgList" @sidenavclick="imgnavclick"></side-nav>
    <div class="img-window wrap">
      <a class="iconfont left-arrow" @click="leftclick()">&#xe618;</a>
      <img :src="imgPic[index]" alt="">
      <a class="iconfont right-arrow" @click="rightclick()">&#xe605;</a>
      <span class="imgpage">{{(index+1)+"/"+imgPic.length}}</span>
      <el-input autosize v-model="autotime" placeholder="时间/s" class="autotime"></el-input>
      <el-checkbox v-model="auto" label="" class="auto">自动播放</el-checkbox>
    </div>
  </div>
</template>

<script>
import SideNav from './childComp/SideNav';
import {getbeautydata, beautyMethods} from 'network/beauty.js'
export default {
  data() {
    return {
      imgList: [],
      index: 0,
      imgPic: [],
      auto: false,
      timer: null,
      autotime: null
    }
  },
  methods: {
    imgnavclick(listname) {
        beautyMethods("post","get_image/",{i_name : listname}).then(res => {
          let arr = []
          res.data.map(item => {
            arr.push(item.i_url)
          })
          this.imgPic = arr
          this.$options.methods.preloadimg(this.imgPic)
        })
        this.index = 0
        this.auto = false
    },
    leftclick() {
      if(this.index <=0) {
        return this.$alert("这是第一页")
      }
      console.log(this.index);
      this.index--
    },
    rightclick() {
      if(this.index >= this.imgPic.length-1){
        return this.$alert("已经是最后一页了");
      }
      this.index++
    },
    preloadimg(imglist) {
      [...imglist].map((item, index) => {
        let img = new Image();
        img.src = item
        img.onload = () => {
          // console.log(item);
        }
      })
    }
  },
  watch: {
    "auto": function() {
      if(!(parseInt(this.autotime)>0) && this.auto == true) {
        alert("请输入正整数，默认值设为1s")
      }
      let time = parseInt(this.autotime) > 0? parseInt(this.autotime)*1000 : 1000
      let This = this
      if(this.auto == true) {
        This.timer = setInterval(function(){This.index++},time)
      }else{
        clearInterval(This.timer)
      }
    }
  },
  components: {
    SideNav
  },
  created() {
      beautyMethods("get","get_i_name/").then(res => {
        res.data.forEach(item => {
          this.imgList.push(item.i_name)
        })
        beautyMethods("post","get_image/",{i_name : this.imgList[0]}).then(res => {
          res.data.map(item => {
            this.imgPic.push(item.i_url)
            this.$options.methods.preloadimg(this.imgPic)
          })
        })
      }).catch(err => {
        console.log(err);
      })
  }
  }
</script>

<style scoped>
  .beauty-pic {
    display: none;
  }
  .beauty .img-window {
    text-align: center;
    position: relative;
    height: 37.5rem;
    width: 68.75rem;
    top: 2.8125rem;
    user-select: none;
  }
  .beauty .img-window img {
    max-width: 62.5rem;
    max-height: 600px;
    transition: all 0.5s linear;
  }
  .beauty .iconfont {
    position: absolute;
    top: 18.75rem;
    font-size: 2.5rem;
    color: #888;
  }
  .beauty .img-window .left-arrow {
    left: 10rem;
  }
  .beauty .img-window .right-arrow {
    right: 10rem;
  }
  .beauty .iconfont:hover {
    cursor: pointer;
  }
  .beauty .img-window .imgpage {
    position: absolute;
    bottom: 10px;
    left: 50%;
    font-size: 1.875rem;
  }
  .auto {
    position: absolute;
    bottom: 1rem;
    right: 1rem;
  }
  .autotime {
    position: absolute;
    width: 10rem;
    bottom: 1rem;
    right: 6rem;
  }
</style>