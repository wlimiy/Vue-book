<template>
    <div class="header">
      {{title}}
    </div>
</template>

<script>
    export default {
        props:['title'],
        data(){
            return {}
        },
        computed: {},
        components: {},
        methods: {}
    }
</script>

<style scoped>
  .header{
    width: 100%;
    height: 60px;
    text-align: center;
    line-height: 60px;
    color: #666666;
    background: #f1f1f1;
  }
</style>
