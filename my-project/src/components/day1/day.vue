<template>
    <div>
        <sub-vue></sub-vue>
    </div>
</template>
<script>
    import SubVue from './sub.vue';
    export default {
        filters: {
            myFilter: funtion(value) {  //value就是text
                //输入的内容进行反转
                //转换成数组->翻转数组->转换成字符串
                return value.split('').reverse().join('');
            }
        },
        data() {
            return {
                text: ''
            }
        },
        components: {
          subVue: SubVue
        }
    }
</script>