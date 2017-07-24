<template>
    <nav>
      <router-link to="/home">
        <i class="iconfont icon-shouye"></i>
        <span>首页</span>
      </router-link>
      <router-link to="/list">
        <i class="iconfont icon-category"></i>
        <span>列表</span>
      </router-link>
      <router-link to="/collect">
        <i class="iconfont icon-favorite"></i>
        <span>收藏</span>
      </router-link>
      <router-link to="/add">
        <i class="iconfont icon-add"></i>
        <span>添加</span>
      </router-link>
    </nav>
</template>

<script>
    export default {
        data(){
            return {}
        },
        computed: {},
        components: {},
        methods: {}
    }
</script>

<style scoped>
  nav{
    position: fixed;
    left:0;
    bottom: 0;
    display: flex;
    width: 100%;
    height: 60px;
    border-top: 1px solid #ccc;
    align-items: center;
  }
  nav a{
    display: flex;
    flex: 1;
    flex-direction: column;
    align-items: center;
  }
  nav a i{
    font-size: 20px;
  }
  .active{
    color: darkblue;
  }
</style>
