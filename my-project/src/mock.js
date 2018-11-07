// 使用 Mock。命令告知Node去node_modules中查找mock包，先局部查找，找不到就去全局环境中查找。找到之后就会赋值给gulp变量，然后我们就可以使用它了
var Mock = require('mockjs')

// 获取 mock.Random 对象
const Random = Mock.Random;

// mock一组数据
// const produceData = function (opt) {
//     console.log('opt', opt);
//     let articles = [];
//     for (let i = 0; i < 30; i++) {
//         let newArticleObject = {
//             title: Random.csentence(5, 30), // Random.csentence( min, max )
//             thumbnail_pic_s: Random.dataImage('300x250', 'mock的图片'), // Random.dataImage( size, text ) 生成一段随机的 Base64 图片编码
//             author_name: Random.cname(), // Random.cname() 随机生成一个常见的中文姓名
//             date: Random.date() + ' ' + Random.time() // Random.date()指示生成的日期字符串的格式,默认为yyyy-MM-dd；Random.time() 返回一个随机的时间字符串
//         }
//         articles.push(newArticleObject)
//     }
//     return {
//         data: articles
//     }
// }

const huohoooo = function(opt){
  console.log('opt', opt);
  debugger;
  let tableDemo = [];
  for (let i = 0; i < 30; i++) {
    let newObject = {
      date: Random.date('yyyy-MM-dd'),
      name: Random.cname(),
      address: Random.region(), //生成一个省份
    }
    tableDemo.push(newObject)
  }
  return {
    data: tableDemo
  }
}
Mock.mock('/element/huohoooo', huohoooo);//当post或get请求到/element/huohoooo路由时Mock会拦截请求并返回上面的数据
// Mock.mock('/element/produceData','get', produceData);
