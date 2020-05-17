<template>
  <div class="lyric">
    <div class="songlyric">
      <span v-for="item in result" :time="item.time" :class="{active: item.time == activespan}">{{item.lyric}}</span>
    </div>
  </div>
</template>

<script>
import {getmusic} from 'network/music.js'
export default {
  data() {
    return {
      result: [],
      activespan: 0,
      currentindex: 0
    }
  },
  methods: {
    //获取当前url歌词
    getlyricnow(url) {
      this.result = []
      let songlyric = document.getElementsByClassName("songlyric")[0]
      songlyric.style.transform = `translate(0)`
      let cuturl = `${url.slice(0,-4)}.lrc`
      console.log(cuturl);
      getmusic(cuturl).then(res => {
        let lyricarray = res.data.split(/[\n]/)
        let pateern = /(\d{2}):(\d{2}).(\d{2})/
        let result = [];
        let time = 0
        for(let i in lyricarray) {
          let eachtime =  lyricarray[i].match(pateern);
          if(eachtime != null) {
            // 获取每一句歌词
            time = Number(eachtime[1])*60+Number(eachtime[2])
            if(eachtime.input.match(/\]([^\[].*)/)) {
              let eachlyric = eachtime.input.match(/\]([^\[].*)/)[1];
              this.result.push({"time":time,"lyric":eachlyric});
            }
          }
        }
      })
    },
    //根据时间调整歌词位置
    judgetime(audiotime) {
      let lyrics = document.querySelectorAll(".songlyric span")
      let audiotime2 = parseInt(audiotime)
      let songlyric = document.getElementsByClassName("songlyric")[0]    
      lyrics.forEach((i, index) => {
        let spantime = i.getAttribute("time")
        if(parseInt(spantime) == audiotime2) {
            this.currentindex = index
            this.activespan = spantime
            if(this.currentindex >= 4 && this.currentindex <= lyrics.length-5) {
              songlyric.style.transform = `translate(0, -${(this.currentindex-4)*40}px)`
            }
          }
        })
      }
    },
  }
</script>

<style>
  .lyric {
    position: absolute;
    right: -100%;
    top: 0;
    width: 100%;
    height: 100%;
    background-color:#ced6e0;
    border: 1px solid rgba(0, 0, 0, 0.5);
    box-shadow: 0 0 1px 0 gray;
    text-align: center;
    overflow: hidden;
  }
  .lyric .songlyric {
    position: absolute;
    transition: all 0.5s ease;
    text-align: center;
    width: 28.75rem;
  }
  .songlyric span {
    display: block;
    color: rgba(0, 0, 0, .7);
    font-size: 1.25rem;
    padding: 0.625rem 0;
  }
  .songlyric span.active {
    font-size: 1.5rem;
    /* background-color: rgba(255, 255, 255, .7); */
    color: #ee5253;
  }
  @media screen and (max-width: 768px){
    .lyric  {
      display: none;
    }
  }
</style>