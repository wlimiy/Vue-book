<template>
  <div id="app">
    <!--<img src="./assets/logo.png">-->

    <!--保持缓存页面-->
    <div class="content">
      <keep-alive>
        <router-view></router-view>
      </keep-alive>
    </div>
    <Tab></Tab>
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
import Tab from '@/components/Tab';
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
.content{
  margin-bottom: 80px;
}
</style>
