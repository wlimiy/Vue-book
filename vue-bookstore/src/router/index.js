import Vue from 'vue'
import Router from 'vue-router'
// import Hello from '@/components/Hello'
import Home from '@/containers/Home'
import List from '@/containers/List'
import Collect from '@/containers/Collect'
import Add from '@/containers/Add'//@表示src
Vue.use(Router);//router是vue插件，需要use一下，才能使用

export default new Router({
  routes: [
    // {
    //   path: '/',
    //   name: 'Hello',
    //   component: Hello
    // }
    {
      path: '/home',
      component: Home
    },
    {
      path: '/add',
      component: Add
    },
    {
      path: '/collect',
      component: Collect
    },
    {
      path: '/list',
      component: List
    },
    {
      path:'*',
      redirect:'/home'
    }
    // {
    //   path: '/detail/:id',//id:this.$route.params.id
    //   name:'detail',//name只是路径的别名
    //   component: Detail
    // },
  ],
  linkActiveClass:'active'//别名
})
