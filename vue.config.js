const path = require('path')

function resolve(dir) {
  return path.join(__dirname, dir)
}

module.exports = {
  publicPath: './',
  // devServer: {
  //   proxy: {
  //       '/api': {                //这里最好有一个 /
  //           target: 'http://112.74.103.14:8080',         // 服务器端接口地址
  //           ws: true,            //如果要代理 websockets，配置这个参数
  //           changeOrigin: true,  //是否跨域
  //           pathRewrite: {
  //               '^/api': ''
  //           }
  //       }
  //   }
  // },
  chainWebpack: (config) => {
    config.resolve.alias
      .set('/',resolve('public/'))
      .set('@', resolve('./src'))
      .set('components', resolve('./src/components'))
      .set('views', resolve('src/views'))
      .set('network', resolve('src/network'))
      .set('assets', resolve('src/assets'))
      .set('plugins', resolve('src/plugins'))
    // set第一个参数：设置的别名，第二个参数：设置的路径
  },
}

  