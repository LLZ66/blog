<template>
  <div class="music wrap">
    <!-- <music-select @musicselectchange="typechange"></music-select> -->
    <song-list ref="songlist" :currentList="songlist" @justplay="justplay" @play="play">
      <main-control slot="main-control" :songlist="songlist" @playicon="justplay" @pauseicon="pause"></main-control>
      <lyric slot="lyric" ref="lyric"></lyric>
    </song-list>
    <audio controls src=""></audio>
  </div>
</template>

<script>
// import MusicSelect from "./childComp/MusicSelect"//分类歌曲组件
import SongList from "./childComp/SongList"//展示歌曲组件
import {getmusic} from "network/music.js" 
import MainControl from './childComp/MainControl';
import Lyric from './childComp/Lyric';

export default {
  data() {
    return {
      // alllist: {},
      songlist: [],
      // listtype: null,
      time: null,
    } 
  },
  computed: {
    currentsong() {
      return this.$store.state.music.currentSong
    },
    audio() {
      return document.querySelector("audio")
    },
    index() {
      return this.$store.state.music.songindex
    },
    israndom() {
      return this.$store.state.music.israndom
    }
  },
  components: {
    // MusicSelect,
    SongList,
    MainControl,
    Lyric
  },
  // 获取所有歌曲列表
  created() {
    //获取歌曲列表
    getmusic("/json/music.json").then( res => {
      this.songlist = res.data.night
      console.log(res.data);
      // console.log(window.document.location.pathname);
    });
    // getmusicfromQQ("周杰伦",5).then(res => {
    //   console.log(res);
    // })
  },
  updated() {
    //改变活跃状态
    this.$children.forEach(item => {
      item.addclass? this.$refs.songlist.addclass(item) : 0;
    })
  },
  watch: {
    "time" : function() {
      this.$refs.lyric.judgetime(this.time)
    }
  },
  methods: {
    //改变列表类型
    // typechange(type) {
    //   this.listtype = type
    //   this.songlist = this.alllist[type]
    //   this.$store.commit("getListType", {
    //     type
    //   })
    // },
    justplay() {
      this.audio.play()
    },
    play() {
      this.audio.src = this.currentsong.url;
      console.log(this.audio.src);
      this.audio.play()
    },
    pause() {
      this.audio.pause()
    }
  },
  mounted() {
    //获取当前播放时间
    this.audio.addEventListener("timeupdate", () => {
      this.time =  this.audio.currentTime;
    });
    //自动播放下一首
    this.audio.addEventListener("ended",()=> {
      if(!this.israndom) {
        if(this.index < this.songlist.length-1) {
          this.$refs.songlist.play(this.index+1,this.songlist[this.index+1].name)
        }else{
          this.$alert("当前列表已播放完")
          this.$refs.songlist.removeclass()
        }
      }else {
        let i = Math.floor(Math.random()*this.songlist.length);
        while(i == this.index) {
          i = Math.floor(Math.random()*this.songlist.length);
        }
        this.$refs.songlist.play(i,this.songlist[i].name)
      } 
    }),
    this.audio.addEventListener("play", ()=> {
      this.$store.commit("play")
    }),
    this.audio.addEventListener("pause", ()=> {
      this.$store.commit("pause")
    })
  }
}
</script>

<style>
  .music {
    height: 100%;
    display: flex;
    margin-top: 2.9375rem;
    animation: fade 0.5s ease;
  }
  audio {
    margin-left: 3.125rem;
    width: 95%;
    height: 4rem;
  }
  @media screen and (max-width: 768px){
    audio {
      display: none;
    }
  }
  audio:focus {
    outline: none;
  }
</style>