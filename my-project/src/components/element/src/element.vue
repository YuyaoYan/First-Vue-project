<template>
  <el-table
    ref="userInfoRef"
    :data="tableData"
    stripe
    style="width: 100%">
    <el-table-column
      prop="date"
      label="日期"
      width="180">
    </el-table-column>
    <el-table-column
      prop="name"
      label="姓名"
      width="180">
    </el-table-column>
    <el-table-column
      prop="address"
      label="地址">
    </el-table-column>
  </el-table>
</template>

<script>
import mock from '../../../mock.js';
  export default {
    data() {
      return {
        tableData: [],
      }
    },
    methods: {
      request(){
        this.$http({
          url: '/element/huohoooo',
          type: 'get'
        }).then((res) => {
          console.log('res',res);
          var jsondata = JSON.stringify(res.body.data);
          // this.$nextTrick(()=>{
            if(this.$refs.userInfoRef){
              // this.$refs.userInfoRef(res.body.table);
              this.tableData = res.body.data;
            } else {
              this.$set(this.$refs.userInfoRef,'uitemplate',res.body.data);
            }
          // })
        }).catch((res) => {
          this.$message({
            message: '数据获取失败',
            type: 'error'
          })
        })
      }
    },
    created() {
      this.request();
    }
  }
</script>