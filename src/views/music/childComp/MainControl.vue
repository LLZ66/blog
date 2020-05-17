<template>
  <div class="main-control noselect">
    <div class="left-control">
      <s><i class="likeicon iconfont">&#xea21;</i></s>
    </div>
    <div class="playcontorl">
      <i class="pre iconfont" @click="preclick">&#xe603;</i>
      <i class="play iconfont" v-show="!isplay" @click="playiconclick">&#xe600;</i>
      <i class="pause iconfont" v-show="isplay" @click="pauseiconclick">&#xe60a;</i>
      <i class="next iconfont" @click="nextclick">&#xe677;</i>
    </div>
    <div class="right-control">
      <span>播放模式: </span>
      <i class="random iconfont" @click="changestatus()" v-if="israndom">&#xe609;</i>
      <i class="seq iconfont" @click="changestatus()" v-else>&#xe67b;</i>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      israndom: false,
    }
  },
  props: {
    songlist:{
      type: Array
    }
  },
  computed: {
    //判断是否为播放状态
    isplay() {
      return this.$store.state.music.isplay
    },
    //获取播放歌曲的信息
    currentsong() {
      return this.$store.state.music.currentsong
    },
    //获取播放歌曲在列表中的index
    index() {
      return this.$store.state.music.songindex
    },
    //判断是否在播放列表播放
    isplayingtype() {
      return this.$store.state.music.listtype === this.$store.state.music.playingtype
    }
  },
  methods: {
    changestatus(type) {
      this.israndom = !this.israndom;
      console.log(this.israndom);
      this.$store.commit("getIsRandom", {
        random: this.israndom
      })
    },
    //图标点击事件
    playiconclick() {
      this.$emit("playicon"),
      this.$store.commit("play")
    },
    pauseiconclick() {
      this.$store.commit("pause")
      this.$emit("pauseicon")
    },
    preclick() {
      if(this.index > 0 && this.isplayingtype) {
        this.$parent.play(this.index-1,this.songlist[this.index-1].name)
      }else{
        return
      }
    },
    nextclick() {
      if(this.index < this.songlist.length-1 && this.isplayingtype) {
        this.$parent.play(this.index+1,this.songlist[this.index+1].name)
      }else {
        return
      }
    },
  },
}
</script>

<style>
  .main-control {
    display: flex;
    justify-content: space-around;
    align-items: center;
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 3.5rem;
    line-height: 3.5rem;
    background-color: rgba(220, 221, 225,.7);
  }
  .main-control .playcontorl {
    line-height: 3.5rem;
  }
  .main-control .playcontorl i {
    font-size: 1.875rem;
    cursor: pointer;
    margin: 0 5px;
    color: rgba(0, 0, 0, .7);
  }
  .main-control .playcontorl i.play,.main-control .playcontorl i.pause {
    position: relative;
    top: 5px;
    font-size: 2.5rem;
  }
  .main-control i {
    font-size: 20px;
    margin-left: 5px;
    cursor: pointer;
  }
  .liked {
    color: #ee5253;
  }
</style>