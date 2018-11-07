var Mock = require('mockjs')
Mock.mock('/element/huohoooo',{
  "table|3":[{
    "date": "@date(yyyy-mm-dd)",
    "name": "@cname",
    "address": "@province", //生成一个省份
    }]
})