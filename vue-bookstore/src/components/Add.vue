<template>
    <div>
      <h3>图书增加页</h3>
      <form action="">
        <div class="form-group">
          <label for="name">书名</label>
          <input type="text" id="name" class="form-control" placeholder="请输入书名"
                 v-model="book.bookName">
        </div>
        <div class="form-group">
          <label for="cover">封面</label>
          <input type="text" id="cover" class="form-control" placeholder="请输入封面"
                 v-model="book.bookCover">
        </div>
        <div class="form-group">
          <label for="price">价格</label>
          <input type="text" id="price" class="form-control" placeholder="请输入价格"
                 v-model="book.bookPrice">
        </div>
        <button class="btn btn-primary" @click="add">确认增加</button>
      </form>
    </div>
</template>

<script>
    export default {
        data(){
            return {
                book:{
                    bookName:'',
                    bookPrice:'',
                    bookCover:''
                }
            }
        },
        computed: {},
        components: {},
        methods: {
            add(){
              this.$http.post('/book',this.book).then(()=>{
                  this.$router.push('/list');
              });
            }
        }
    }
</script>

<style scoped>

</style>
