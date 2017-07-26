<template>
    <div>
      <MHeader title="列表页"></MHeader>
      <ul class="list">
        <li v-for="book in books">

          <img v-lazy="book.bookCover" alt="">
          <div>
            <h3>{{book.bookName}}</h3>
            <p>{{book.content}}</p>
          </div>
        </li>
      </ul>
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
          getBook().then(res=>{
              console.log(res);
              this.books=res.data;//读取所有图书放到数组中
          }).catch(err=>{
            console.log(err);
          });
        },
        computed: {},
        components: {
          MHeader
        },
        methods: {}
    }
</script>

<style scoped>
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
</style>
