<template>
  <div class="live2d"></div>
</template>

<script>
export default {
  mounted() {
    setTimeout(() => {
      window.L2Dwidget.init({
          pluginRootPath: 'live2dw/',
          pluginJsPath: 'lib/',
          pluginModelPath: 'live2d-widget-model-z16/assets/',
          tagMode: false,
          debug: false,
          model: { jsonPath: '../live2dw/live2d-widget-model-gf/assets/gf.model.json' },
          display: { position: 'right', width: 200, height: 250 },
          mobile: { show: true },
          log: false
          })
    }, 1000)
  },
}
</script>

<style>

</style>