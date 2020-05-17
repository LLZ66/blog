<template>
  <div class="music-select">
      <div class="select-item" v-for="item in selects" @click="selectitemclick(item.type)">
        <i class="iconfont" :class="item.icon"></i>
        <span>{{item.type}}</span>
      </div>
    </div>
</template>
<script>
export default {
  data() {
    return {
      selects: [
        {"icon":"icon-shuye", "type":"forest"},
        {"icon":"icon-hailang", "type":"ocean"},
        {"icon":"icon-A", "type":"daily"},
        {"icon":"icon-A1", "type":"night"},
        {"icon":"icon-wenhao", "type":"commend"}
      ]
    }
  },
  methods: {
    //提交改变的listtype
    selectitemclick(type) {
      this.$emit("musicselectchange", type)
    }
  },
}
</script>

<style>
  .music .music-select {
    display: flex;
    justify-content: space-evenly;
    height: 6.25rem;
    width: 100%;
  }
  .music .music-select .select-item {
    text-align: center;
    color: #ff6b81;
  }
  .music-select .select-item i {
    display: block;
    height: 3.75rem;
    width: 3.75rem;
    line-height: 3.75rem;
    text-align: center;
    font-size: 1.875rem;
    border: 1px solid #7bed9f;
    background-color: #dfe4ea;
    border-radius: 50%;
    margin: 5px auto;
    cursor: pointer;
  }
</style>