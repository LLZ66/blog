<template>
  <div class="daily wrap">
    <strong>Daily</strong>
    <div class="content">
      <div>
      <span>2020/4/3</span>
      <p>
        利用proxy实现vue.js 的数据绑定：
        <code>
          function View() {
            let proxy = new Proxy({}, {
              get(obj, property) {

              },
              set(obj, property, value) {
                document.querySelectorAll(`[v-model="${property}"]`).foreach(item => {
                  item.value = value
                });
                document.querySelectorAll(`[v-bind="${property}"]`).foreach(item => {
                  item.innerHtml = value
                })
              }
            });
            this.init = function() {
              const els = document.querySeletorAll("[v-model]");
              els.foreach(el => {
                el.addEventListener("keyup", function() {
                  proxy[this.getAttuibute("v-model")] = this.value
                })
              })
            }
          }
        </code>
      </p>
    </div>
    <div>
      <span>2020/4/24</span>
      <p>在nginx部署时碰到的一些问题：
        1： 在vuecli4中，已经没有assetspublicPath，取而代之的是自定义的vue.config.js，在使用
        npm run build 打包时， 需要修改vue.config.js中的publicPath："./",这样打包出来的页面才能正常显示，
        还有如果打包出来的的页面路由跳转出现空白，需要将router中的index.js里面的model：history注销掉，这样才能正确
        跳转路由，如果打包出来的index.html没什么问题，就可以开始部署到nginx中了
        2： nginx部署，将打包好的dist文件夹放入nginx文件夹下的html文件中，（注意：如果有中文文件名的话需要查看是否乱码，如果乱码的话需要用unzip -O CP936 xxx.zip解压），
        然后就可以开始修改nginx/nginx.conf文件了，在html块下增加server，配置如下
        <code>
          server{
            listen 8080；//服务开启端口
            server_name xxx.xxx.xxx.xx；//你的服务器ip地址 
            location / { //指定路径的跳转 这里是指定基本路径 xxx.xxx.xxx.xx:8080
              root /usr/share/nginx/html/dist //你的dist文件夹存放位置（注意如果是docker的话，可能会改变位置）
              index index.html index.htm； //你的启动页面
            }
            //关于反向代理解决跨域问题等解决了再写
          }
        </code>
      </p>
    </div>
    <div>
      <span>关于axios的Post请求</span>
      <p>axios的post方法</p>
    </div>
    </div>
  </div>
</template>

<script>
export default {
  
}
</script>


<style scoped>
  .daily {
    display: flex;
    flex-wrap: wrap;
    text-align: center;
    justify-content: space-between;
    background-image: linear-gradient(90deg, #fd79a8, #ee5253);
    width: 100%;
  }
  .daily strong {
    display: block; 
    width: 100%;
    font-size: 1.875rem;
    margin-bottom: 5px;
    color: #D980FA;
  }
  .daily .content {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
  }
  .daily .content div{
    display: inline-block;
    width: 49%;
    height: 25rem;
    margin-bottom: 1rem;
    text-align: center;
    color: #006266;
    background-color: rgba(255, 255, 255, 0.2);
  }
  @media screen and (max-width: 768px){
    .daily .content div {
      width: 80%;
    }
  }
  .daily .content div span {
    display: block;
    height: 2.75rem;
    line-height: 2.75rem;
  }
  .daily .content div p {
    padding: 0 1rem;
    text-align: left;
    text-indent: 2em;
    margin: 0 auto;
    word-break: break-all;
  }
</style>