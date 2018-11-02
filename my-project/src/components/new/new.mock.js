var Mock = require('mockjs');
Mock.mock('/date',{
  "row": [{
      "date": "OID10000000k961",
      "name": "test1",
      "address": "1"
  },{
      "date": "OID10000000k961",
      "name": "test1",
      "address": "1"
  },{
      "date": "OID10000000k961",
      "name": "test1",
      "address": "1"
  }]
})

Mock.mock('/list',{
  "data": [{
      "id": "OID10000000k961",
      "refname": "test1",
      "refcode": "1"
  },{
      "id": "OID10000000k961",
      "refname": "test1",
      "refcode": "1"
  },{
      "id": "OID10000000k961",
      "refname": "test1",
      "refcode": "1"
  }]
})