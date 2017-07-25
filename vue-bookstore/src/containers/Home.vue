<template>
    <div>
      <!--如果一个组件过于庞大，会导致难以维护，转播图组件，可能也会被复用-->
      <!--没有数据就不展示，有了数据再展示-->
      <!--v-if的好处：数据没有，里面代码不执行，数据有了，代码才执行-->
      <div v-if="sliders.length"><Slider :data="sliders"></Slider></div>
      <!--不能直挂渲染slider，因为数据可能没过来，slider就渲染完毕了，导致轮播图不能使用-->
      <h3>最新上架</h3>
      <ul class="hot">
        <li v-for="hot in hots">
          <img :src="hot.bookCover" alt="">
          <span>{{hot.bookName}}</span>
        </li>
      </ul>
      <Loading v-if="isLoading"></Loading>
    </div>
</template>

<script>
  import {getSliders,getHot} from '@/api';
  import Slider from '../components/Slider.vue';
  import Loading from '../components/Loading.vue';
  console.log(getSliders);
    export default {
        data(){
            return {
                sliders:[],
                hots:[],
                isLoading:true
            }
        },
        created(){//在这里调ajax,实例挂载完，数据创建后
          getSliders().then(res=>{
              console.log(res);
              this.sliders=res.data;//将获取的数据放在sliders数组中
          }).catch(err=>{
              console.log(err);
          });
          getHot().then(res=>{
              console.log(res);
              this.hots=res.data;
              this.isLoading=false;//数据加载完成隐藏Loading
          }).catch(err=>{
              console.log(err);
          })
        },
        computed: {},
        components: {
            Slider,
            Loading
        },
        methods: {}
    }
</script>

<style scoped>
  h3{
    color: #666666;
    padding-left: 2%;
    margin: 10px 0;
    font-weight: normal;
  }
  .hot{
    display: flex;
    flex-wrap: wrap;
  }
  .hot li{
    width: 50%;
    display: flex;
    flex-direction: column;
    text-align: center;
    margin: 10px 0;
  }
  .hot li img{
    width: 100%;
  }
</style>
