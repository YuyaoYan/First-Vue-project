<template>
    <ifbp-page>
        <ifbp-breadcrumb name="用户解锁"></ifbp-breadcrumb>

        <!-- 用户信息列表 -->
        <ifbp-main-area type="list">
            <ifbp-template
                class="uitemplate-unlock" 
                ref="userUnlock"
                show-type="table"
                tpl-id="userTableId"
                :tpl-data="userTableData"
                :funnode="funnode"
                :nexuskey="nexuskey"
                :tpl-reset-fun="userTableResetFun"
                :methods="userTableMethods"
                @lock-open-table-click="stateTableRow">
            </ifbp-template>
            <!-- 用户信息表 分页 -->
            <el-pagination
                id="staff-pagination"
                @size-change="handleSizeChange"
                @current-change="handleCurrentChange"
                :current-page="currentPage"
                :page-sizes="[10, 20, 30, 40]"
                :page-size="size"
                layout="total, sizes, prev, pager, next, jumper"
                :total="totalElements">
            </el-pagination>
        </ifbp-main-area>
        <ifbp-del-dialog
           message="确认解锁该用户？"
           v-model="delDialogVisible"
           @click="deleteClick">
        </ifbp-del-dialog>
    </ifbp-page>
</template>

<script>
import mock from '../../../mock.js';
export default {
    data(){
        const vm = this;
        return {
            funnode: "BDSEARCH",
            nexuskey: "UNLOCK",
            userTableData: {},
            userTableMethods: {},
            currentClickData: '',
            userTableResetFun: function($node){
            //获取table,此id为ui模板上面的表格Id
            let $table = $node.find('el-table');
            // 定义最后一列的操作
            let operateArr = [
                {
                    icon: 'lock-open',
                    title: '解锁'
                }
            ];
            let operateHtml = this.getTableOperateHtml(operateArr);
            $table.append(operateHtml);
            // // 为用户编码增加hover事件，点击进入详情
            // let codeDom = $('el-table-column[prop="user_code"]',$table);
            // if(codeDom.length){
            //   codeDom.html(
            //     '<template scope="scope"><a @click="editTableRow(scope)">{{scope.row.user_code}}</a></template>'
            //   );
            // }
            return $node[0].outerHTML;
        },
        totalPages: '',
        totalElements: 0,
        size: 10,
        currentPage: 1,
        delDialogVisible: false,
      }        
    },
    methods: {
       /**
       *   获取列表请求
       **/
      request() {
        this.loading = true;
        var url;
        // if(n===undefined){
          url = '/ifbp-app-sm/sm/user/locked/list?pn=' + this.currentPage + '&ps=' + this.size; //+ '&qtAggVO=' + encodeURIComponent(JSON.stringify(this.searchTemplate));
        // } else {
        //   url = '/ifbp-app-sm/sm/user/pageList?pn='+ n + '&ps=' + s + '&qtAggVO=' + encodeURIComponent(JSON.stringify(this.searchTemplate));
        // }
        this.$http({
          url: url,
          method: 'get',
          dataType: 'json'
        }).then((res) => {
          this.loading = false;
          // this.totalElements = res.data.data.totalElements ;       // 总条数
          // this.size = res.data.data.size;                          // 每页的条数
          this.currentValue = res.data.data.content;
          this.$nextTick(() => {
            if(this.$refs.userUnlock) {
              this.$refs.userUnlock.setTableData(res.data.data.content);
            } else {
              this.$set(this.userTableData, 'uitemplateTableData', res.data.data.content);
            }
          });
        }).catch(() => {
          this.$message({
            message: '用户信息获取失败',
            type: 'error'
          });
        });
      },
      handleSizeChange(val) {
        this.size = val;
        this.request();
      },
      handleCurrentChange(val) {
        this.currentPage = val;
        this.request();
      },
      stateTableRow(data){
        this.delDialogVisible = true;
        this.currentClickData = data;
      },
      deleteClick() {
        let row = this.currentClickData.row;
        // console.log(row);
        this.$http({
          url: '/ifbp-app-sm/sm/user/unlock?id='+ row.id,
          method: 'get'
        }).then((res) => {
          if (res.data.success === true) {
            this.$message({
              message: res.data.data,
              type: 'success'
            });
            this.delDialogVisible = false;
            this.request();
           }else {
            this.$message({
              message: res.data.error.errorMessage,
              type: 'error'
            });
          }
        }).catch(() => {
          this.$message({
            message: '接口调用失败！',
            type: 'error'
          });
        });
      }
    },
    created(){
      this.request()
    }
    
}
</script>

