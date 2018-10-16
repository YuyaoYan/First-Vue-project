# my-project
Try my first vue project used elementUI/Mockjs. 
> A Vue.js project

## 文件说明

```
│  fis-conf.js // fis3配置
│  gulpfile.js // gulp配置，用于启动服务及监听文件
│  package.json // 项目配置
│  README.md // 说明文件
│  
├─build
│      build.js // 产出dist目录
│      dev-server.js // 开发启动服务
├─config  // 配置文件
│      
├─locals // 多语资源文件
│      
└─src  
    └─apps // 项目开发时修改的目录
    │  │      
    │  └─assets // 项目静态资源文件，图片、josn文件等，直接放入dist
    │  │      
    │  └─common // 项目公共资源，公共的js、vue组件等，进行打包后合并放入dist/包名/common/index.js
    │  │      
    │  └─pages // 项目功能节点
    │     │
    │     └─*** // 功能节点目录
    │         │
    │         └─index.js  // 功能节点下的路由信息
    │         │
    │         └─mockdemo.js  // 开发时mock数据，产出代码前需要将此文件的引用去掉
    │         │
    │         └─src  // 功能节点下的vue文件
    │               BjBrokaccDetailDetail.vue
    │               BjBrokaccDetailEdit.vue
    │               BjBrokaccDetailList.vue
    │
    └─widget // 小部件开发目录
    │
    └─widgetVue // 以.vue方式开发小部件对应目录
    │
    └─dependencies.json // 描述在 app/pages 目录下页面间相互依赖的JSON文件, 如: { 'page': [ 'dep1', 'dep2' ] }
├─static // 用于本地调试的静态资源目录，例如：element放到 static/ap/trd/ifbp-element下
```

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
