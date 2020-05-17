<template>
  <div class="todo content">
    <div class="tasklist">
      <div class="el-select">
        <el-select v-model="listTypeValue" placeholder="请选择种类">
          <el-option
            v-for="item in listType"
            :key="item.value"
            :label="item.label"
            :value="item.value">
          </el-option>
        </el-select>
      </div>
      <ul>
        <div class="listarea">
          <li v-for="item of taskList">{{item}}</li>
        </div>
      </ul>
      <i class="iconfont add" @click="addTask">&#xe6c9;</i>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      listType: [{value: "1",label:"工作"},{value: "2",label:"学习"},{value: "3",label:"休闲"},{value: "4",label:"娱乐"}],
      listTypeValue: "",
      taskList: [],
      allTaskList: {
        1: ["vue","js","uniapp"],
        2: ["vue2","js2","uniapp2"],
        3: ["听歌","打游戏"],
        4: []
      }
    }
  },
  watch: {
    "listTypeValue": function() {
      console.log("object");
      this.taskList = this.allTaskList[this.listTypeValue]
    }
  },
  methods:{
    addTask() {
      this.$prompt("请输入名称","提示",{
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        inputPattern: /^[\u4e00-\u9fa5]{0,10}$/,
        inputErrorMessage: "请输入十位以内汉字"
      }).then(res => {
        if(this.listTypeValue) {
          this.taskList.push(res.value)
        }
      }).catch((error) => {
        this.$message({
            type: 'info',
            message: '取消输入'
          });
      })
    }
  },
  mounted() {
    let head = document.getElementById("head-nav");
    head.style.backgroundImage = `linear-gradient(90deg, #70a1ff, #1e90ff, #5352ed, #3742fa)`;
    head.style.boxShadow = `0 1px 1px 0 #1abc9c`;
  },
  destroyed() {
    let head = document.getElementById("head-nav");
    head.style.backgroundImage = `linear-gradient(90deg, #fd79a8, #ee5253)`;
    head.style.boxShadow = `0 1px 1px 0 #fd79a8`;
  }
}
</script>

<style scoped>
  .todo {
    display: flex;
  }
  .todo .tasklist {
    background-color:  #fff;
    margin-left: 7.7813rem;
    width: 20rem;
    height: 20rem;
    text-align: center;
    box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04);
  }
  .todo .tasklist ul {
    display: flex;
    /* flex-wrap: wrap; */
    height: 17.5rem;
    width: 20rem;
    flex-direction: column;
    background-color: #409EFF;
    overflow: hidden;
  }
  .todo .tasklist ul li {
    flex-shrink: 0;
    height: 4.375rem;
    line-height: 4.375rem;
    text-align: center;
    color: #fff;
    line-height: 4rem;
    transition: all 0.1s linear;
  }
  .todo .tasklist ul .listarea {
    transform: translate(0, -4.375rem);
  }
  .todo .tasklist ul li:hover {
    background-color: #fff;
    color: #409EFF;
  }
  .el-select {
    width: 20rem;
  }
  .todo .tasklist .add {
    color: #409EFF;
    font-size: 2rem;
    cursor: pointer;
  }
</style>