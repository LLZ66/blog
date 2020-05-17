<template>
  <div class="more">
    <todo-page></todo-page>
  </div>
</template>

<script>
import TodoPage from './childComp/Todopage'
export default {
  name: "more",
  components: {
    TodoPage
  }
}
</script>

<style scoped>
  
</style>