<template>
  <div id="app">
    <!--<img src="./assets/logo.png">-->
    <Tab></Tab>
    <router-view></router-view>
    <!--<div class="container">-->
      <!--<div class="row">-->
        <!--<div class="col-md-12">-->
          <!---->
        <!--</div>-->
      <!--</div>-->
    <!--</div>-->
  </div>
</template>

<script>
import Tab from '@/components/Tab'
//import Hello from '@/components/Hello'
export default {
//  name: 'app'
  components:{
//    Hello,
    Tab
  }
}
</script>

<style>
/*#app {*/
  /*font-family: 'Avenir', Helvetica, Arial, sans-serif;*/
  /*-webkit-font-smoothing: antialiased;*/
  /*-moz-osx-font-smoothing: grayscale;*/
  /*text-align: center;*/
  /*color: #2c3e50;*/
  /*margin-top: 60px;*/
/*}*/
</style>
