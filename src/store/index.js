import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    userpassword: "",
    password: "llznb",
  },
  mutations: {
    changeuserpwd(state, payload) {
      state.userpassword = payload.userpassword
    },
  },
  actions: {
  },
  modules: {
    music: {
      state: {
        isplay: false,
        currentSong: {},
        listtype: "",
        playingtype: "",
        songindex: 0,
        israndom: null
      },
      mutations: {
        getCurrentSong(state, payload) {
          state.currentSong = payload.curentsong
          state.songindex = payload.index
          state.isplay = true
        },
        play(state) {
          state.isplay = true
        },
        pause(state) {
          state.isplay = false
        },
        getListType(state, payload) {
          state.listtype = payload.type
        },
        setPlayingType(state, payload) {
          state.playingtype = payload.type
        },
        getIsRandom(state, payload) {
          state.israndom = payload.random
        }
      }
    }
  },
});
