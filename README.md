##基于Vue开发图书管理系统
### 安装环境vue-cli
- node7.6+
>sudo npm install vue-cli -g

### 在指定文件夹生成项目
>sudo vue init webpack vue-book:在指定文件夹下载webpack
```
Runtime + Compiler
Runtime-only(不支持template写法)
```
```
? Project name vue-bookstore
? Project description A Vue.js project
? Author wlimiy <wangbingqi1027@163.com>
? Vue build standalone
? Install vue-router? Yes
? Use ESLint to lint your code? No
? Setup unit tests with Karma + Mocha? No
? Setup e2e tests with Nightwatch? No
```
### 安装依赖
 - cd vue-book
 - sudo npm install
 - npm run dev
### 安装其他项目依赖
 sudo npm install bootstrap vue-resource --save

### 新建组件
 List.vue
 Detail.vue
 Add.vue
 Navbar.vue
### 配置路由
```
{
  path: '/list',
  component: List
}
```
### 写后台服务
mock>server.js
### 前端调后端接口用axios：帮助我们从后端获取数据
>安装axioc:sudo npm install axios --save
### 轮播图效果需要安装swiper
>sudo npm install swiper --save
### 图片懒加载:vue-lazyload
>sudo npm install vue-lazyload
### 滚动加载:vue-scroller
>sudo npm install vue-scroller --save

### 页面效果图
![home](https://github.com/wlimiy/Vue-book/blob/master/vue-bookstore/src/assets/home.png)

![list](https://github.com/wlimiy/Vue-book/blob/master/vue-bookstore/src/assets/list.png)

![add](https://github.com/wlimiy/Vue-book/blob/master/vue-bookstore/src/assets/add.png)

