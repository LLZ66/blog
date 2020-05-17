<template>
  <div class="songlist">
    <div class="listhead">
      <span class="name">歌曲</span>
      <span>歌手</span>
      <span>时长</span>
    </div>
    <ul>
      <li v-for="(item, index) in currentList" :name="item.name">
        <span class="name">
          {{item.name}}
          <i class="play iconfont" @click="play(index, item.name)">&#xe600;</i>
        </span>
        <span>{{item.singer}}</span>
        <span>{{item.time}}</span>
      </li>
    </ul>
    <slot name="main-control"></slot>
    <slot name="lyric"></slot>
  </div>
</template>

<script>

export default {
  props: {
    currentList: {
      type: Array,
    },
    listtype: {
      type: String
    },
  },
  data() {
    return {
      songindex: null,
      lastclick: null,
      songname: null,
    }
  },

  methods: {
    // 添加歌曲活跃状态
    addclass(self){
      let playing = document.querySelector(`[name="${self.songname}"]`);
      let allsong = document.getElementsByTagName("li");
      [...allsong].map(item => {
        item.classList.remove("activepart")
      });
      if(playing) {
        playing.classList.add("activepart")
      }
    },
    //移除活跃状态
    removeclass() {
      let allsong = document.getElementsByTagName("li");
      [...allsong].map(item => {
        item.classList.remove("activepart")
      });
    },
    // 播放歌曲
    play(index, name) {
      this.$children.forEach(item => {
        item.getlyricnow? item.getlyricnow(this.currentList[index].url) : 0
      })
      this.songname = name;
      this.$store.commit("setPlayingType",{
        type : this.listtype
      })
      this.$store.commit('getCurrentSong', {
        curentsong: this.currentList[index],
        index
      })
      if(this.lastclick === index && this.songname === name) {
        this.$emit("justplay")
      }else {
        this.$emit("play");
      };
      this.$options.methods.addclass(this)
    },
  }
}
</script>

<style scoped>
  .songlist {
    position: relative;
    display: inline-block;
    margin-left: 5%;
    height: 23.875rem;
    width: 45%;
    background-image: linear-gradient(90deg, #fd79a8, #ee5253);
  }
  @media screen and (max-width: 768px){
    .songlist {
      height: 85%;
      width: 80%;
      justify-content: center;
    }
  }
  .songlist .listhead {
    display: flex;
    height: 2.75rem;
    
    color: rgba(255, 255, 255, .7);
    line-height: 2.75rem;
    border-bottom: 1px solid rgba(238, 82, 83, 0.5);
  }
  .songlist .listhead span {
    width: 6.4375rem;
    padding-left: 1.125rem;
  }
  .songlist ul li {
    display: flex;
    justify-content: right;
    text-align: center;
    height: 2.75rem;
    line-height: 2.75rem;
  }
  .songlist ul li span {
    color: rgba(255, 255, 255, .7);
    width: 6.4375rem;
    text-align: left;
    padding-left: 1.125rem;
    position: relative;
  }
  .songlist .name {
    flex: 1;
  }
  .songlist ul li span i {
    font-size: 25px;
    position: absolute;
    right: 0;
    cursor: pointer;
    user-select: none;
    visibility: hidden;
  }
  /* .songlist ul li span i.play {
    right: 25px;
  } */
  .songlist ul li:hover span i{
    visibility: visible;
  }
  .activepart {
    height: 3.75rem !important;
    line-height: 3.75rem !important;
    font-weight: 500;
    background-color: rgba(255, 255, 255, .2);
  }
  .activepart::before {
    font-family: iconfont;
    content: "";
    width: 1.25rem;
    height: 3.75rem;
    line-height: 3.75rem;
    padding: 0 5px;
    background: url("https://y.gtimg.cn/mediastyle/yqq/img/wave.gif?max_age=2592000&v=78979d47cc7dc55cab5d36b4c96168d5") 15px 25px no-repeat;
    background-size: 40%;
  }
</style>