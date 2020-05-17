import Vue from 'vue';
import VueRouter from 'vue-router';

const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}

Vue.use(VueRouter);

const Home = () => import('views/home/Home')
const Beauty = () => import('views/beauty/Beauty')
const Music = () => import('views/music/Music')
const Login = () => import('views/login/Login')
const More = () => import('views/more/More')
const Todo = () => import('views/more/childComp/Todo')
const routes = [
      {
        path: '',
        redirect: '/home'
      },
      {
        path: '/home',
        component: resolve => require(["views/home/Home"], resolve)
      },
      {
        path: '/beauty111',
        component: resolve => require(["views/beauty/Beauty"], resolve)
      },
      {
        path: '/music',
        component: resolve => require(["views/music/Music"], resolve)
      },
      {
        path: '/login',
        component: resolve => require(["views/login/Login"], resolve)
      },
      {
        path:'/todo',
        component: resolve => require(["views/more/childComp/Todo"], resolve)
      },
      {
        path: '/more',
        component: resolve => require(["views/more/More"], resolve),
      }
  // // {
  // //   path: '/',
  // //   name: 'Home',
  // //   component: Home,
  // // },
  // // {
  // //   path: '/about',
  // //   name: 'About',
  // //   // route level code-splitting
  // //   // this generates a separate chunk (about.[hash].js) for this route
  // //   // which is lazy-loaded when the route is visited.
  // //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
  // }
];

const router = new VueRouter({
  // mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
