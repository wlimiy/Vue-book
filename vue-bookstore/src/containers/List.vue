<template>
    <div>
      <MHeader title="列表页"></MHeader>
      <scroller :on-refresh="refresh" ref="scroller" class="top">
        <ul class="list">
          <li v-for="book in books">
            <img v-lazy="book.bookCover" alt="">
            <div>
              <h3>{{book.bookName}}</h3>
              <p>{{book.content}}</p>
            </div>
          </li>
        </ul>
      </scroller>
    </div>
</template>

<script>
  import MHeader from '../components/MHeader.vue';
  import {getBook} from '@/api';
    export default {
        data(){
            return {books:[]}
        },
        created(){
          this.getList();
        },
        computed: {},
        components: {
          MHeader
        },
        methods: {
          refresh(){
              //获取最新数据
            this.getList();
          },
          getList(){
            getBook().then(res=>{
              console.log(res);
              this.books=res.data;//读取所有图书放到数组中
              //加载数据后。获取scroller，调用finishPullToRefresh
              this.$refs.scroller.finishPullToRefresh();
            }).catch(err=>{
              console.log(err);
            });
          }
        }
    }
</script>

<style scoped>
  .top{
    margin-top: 60px;
  }
  .list{

  }
  .list li{
    display: flex;
    border-bottom: 1px solid #ccc;

  }
  .list li img{
    height: 90px;
    margin: 10px;
  }
  .list li div{
    display: flex;
    flex-direction: column;
  }
  .list li div h3{
    color: #666666;
    font-size:16px;
    margin: 10px 0;
  }
  img[lazy='loaded']{
    animation:fadeIn 0.5s;
  }
  img[lazy='loading']{
    background: url("../assets/loading.gif") no-repeat center;
    background-size: 50%;
  }
  @keyframes fadeIn {
    from{opacity: 0}
    to{opacity: 1}
  }
</style>
