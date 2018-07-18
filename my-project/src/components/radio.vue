<template>
    <div>
        <el-radio-group v-model="radio2">
            <el-radio  :label="1">备选项</el-radio>
            <el-radio  :label="3">备选项</el-radio>
            <el-radio  :label="2">备选项</el-radio>
            <el-radio  :label="4">备选项</el-radio>
        </el-radio-group>
        <br>
        <el-radio-group v-model="radio3">
            <el-radio-button label="Beijing"></el-radio-button>
            <el-radio-button label="`Beijing"></el-radio-button>
            <el-radio-button label="1Beijing"></el-radio-button>
            <el-radio-button label="2Beijing"></el-radio-button>
            <el-radio-button label="3Beijing"></el-radio-button>
        </el-radio-group>
    </div>
</template>

<script>
  export default {
    data () {
      return {
        radio2: '1',
        radio3: 'Beijing'
      };
    }
  }
</script>