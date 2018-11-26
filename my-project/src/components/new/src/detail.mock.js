var Mock = require('mockjs');
Mock.mock('/testAPI/testCustomRefDialog', {
  "data": [{
    "id": "OID10000000k961",
    "refname": "test1",
    "refcode": "1"
  },
  {
    "id": "OID10000000k962",
    "refname": "test2",
    "refcode": "2"
  },
  {
    "id": "OID10000000k963",
    "refname": "test3",
    "refcode": "3"
  },
  {
    "id": "OID10000000k964",
    "refname": "test4",
    "refcode": "4"
  }
  ]
});

Mock.mock('/wbalone/ieoproleuitemplate/listByFunNodeAndNexusKey', { "form": { "name": "标题", "describe": "描述", "pkMetadata": "", "sysflag": "Y" }, "formLayout": "<div id=\"main_area\" style=\"width:100%;height:100%;\" _id=\"xvdn78iz9y\"><div id=\"table_area\" style=\"width:100%;padding-bottom:30px;\" _id=\"7ciloq8qmil\"><el-table _id=\"9qxefuqz5ui\" :inline=\"true\" :data=\"customRef_t\"><el-table-column type=\"selection\" width=\"50\" _id=\"16bp3bsyh6e\"><\/el-table-column><el-table-column _id=\"qorfz863xsq\" render-type=\"default\" separator=\",\" symbol=\"￥\" align=\"left\" header-align=\"left\" prop=\"id\" label=\"标识\" width=\"150\" format=\"\"><\/el-table-column><el-table-column _id=\"d1z1y3oltw\" render-type=\"default\" separator=\",\" symbol=\"￥\" align=\"left\" header-align=\"left\" prop=\"refcode\" label=\"编码\" width=\"150\" format=\"\"><\/el-table-column><el-table-column _id=\"ibj2rwv28y8\" render-type=\"default\" separator=\",\" symbol=\"￥\" align=\"left\" header-align=\"left\" prop=\"refname\" label=\"名称\" width=\"150\" format=\"\"><\/el-table-column><\/el-table><\/div><div id=\"form_area\" style=\"width:100%;\" _id=\"ap8uy1hvqk\"><el-form _id=\"ov9ryqr8b78\" :inline=\"true\" :rules=\"rules\" label-width=\"150px\" :adaptation=\"true\"><\/el-form><\/div><\/div>", "formData": { "rules": {}, "headData": {}, "headDataMeta": {}, "editable": true, "demo": { "id": "" }, "customRef_t": [] }, "formVersion": "1" });