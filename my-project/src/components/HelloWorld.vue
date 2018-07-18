<template>
<div>
  <ifbp-default-value-input 
  show-value="当前日期"
  real-value="(new Date()).getTime()"
  @change='handleChange'></ifbp-default-value-input>
</div>
  
</template>

<script>
  export default {
    data() {
      return {
      };
    },
    methods: {
      handleChange(showValue,realValue) {
        console.log(showValue,realValue);
      }
    }
  };
</script>








