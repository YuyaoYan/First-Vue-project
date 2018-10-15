<template>
    <div>
         <header-vue :textTwo="text2"></header-vue>
    </div>
</template>

<script>
  export default {
    data () {
         return {
             text2: '哈哈'
         }  
    },
    methods: {},
    //子组件接收父组件传来的值，在props中定义传来的变量
    props: [
        'textTwo'
    ]
  }
</script>

<style>
.red{
    background: red;
}
.green{
    background: green;
}
</style>
