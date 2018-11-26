<template>
    <ifbp-template
      class="uitemplate-unlock"
      ref="unlockUser"
      showType = "table"
      :funnode="funnode"
      :nexuskey="nexuskey">
    </ifbp-template>
</template>
<!-- <template>
  <el-table
    :data="tableData"
    stripe
    style="width: 70%; ">
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
      label="地址"
      width="180">
    </el-table-column>
  </el-table>
</template> -->
<script>
import mock from "./new.mock.js"
// import jquery from "./jquery.3.3.1"
export default {
  data() {
    return {
      // show: true,
      // input2: "",
      tableData: [],
      unlockUser: {},
      funnode: "BDSEARCH",
      nexuskey: "UNLOCK",

    };
  },
  methods: {
    request(){
      var url = '/date'
      this.$http({
        url: url,
        method: 'get',
        dataType: 'json'
      }).then((res) => {
        this.$nextTick(() => {
          if(this.$refs.unlockUser){
            this.$refs.unlockUser.setTableData(res.data.row.content);
            console.log('res',res);
          } else {
            this.$set(this.unlockUser,'uitemplateTableData',res.data.row.content);
          }
        })
      }).catch(() => {
        this.$message({
          message: '用户信息获取失败',
          type: 'error'
        });
      });
    },
    getTableData() {
      this.$http({
        url: '/date',
        ifbpNotUseCache: true,
        type: 'post'
      }).then(res => {
        this.$nextTick(() => {
          if (this.$refs.tableData) {
            console.log('res',res.data.row);
            // this.$refs.tableData.setCurrentRow(res.data.row);
            // this.$set(this.tableData,res.data);
            this.$set(this.tableData,res.data.row);
          } else {
            this.$set(this.tableData,res.data.row);
          }
        });
      });
    },
  },
  created() {
    this.request();
  },
  mounted() {
    // this.getTableData();

  }
};
</script>