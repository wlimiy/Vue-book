<template>
    <div>
      <!-- Slider main container -->
      <div class="swiper-container">
        <!-- Additional required wrapper -->
        <div class="swiper-wrapper">
          <!-- Slides -->
          <div class="swiper-slide" v-for="item in data"><img :src="item" alt=""></div>
        </div>
        <!-- If we need pagination -->
        <div class="swiper-pagination"></div>
      </div>
    </div>
</template>

<script>
  import Swiper from 'swiper';
  import 'swiper/dist/css/swiper.css';
    export default {
        props:['data'],//挂载在当前的组件的实例上
        data(){
            return {}
        },
        mounted(){
          var mySwiper = new Swiper('.swiper-container', {
            loop: true,
            pagination: '.swiper-pagination',
          });
        },
        computed: {},
        components: {},
        methods: {}
    }
</script>

<style scoped>
  img {
    width: 100%;
  }
</style>
