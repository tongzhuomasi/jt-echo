#  jt-echo

## 效果演示 

[查看deme请戳这里](http://echo.liansixin.win)


## 目录结构

``` bash
├── build                        // 构建相关  
├── config                       // 配置相关
├── src                          
│   ├── assets                   // 静态资源 样式、图标等静态资源
│   ├── components               // 全局公用组件
│   |   ├── banner.vue           // banner组件
│   |   ├── list.vue             // 列表组件
│   |   ├── musicBar.vue         // 音乐条组件
│   |   ├── sheet.vue            // 模态框组件
│   ├── utils                   
│   |   ├── cache.js             // 缓存方法
│   |   ├── fetch.js             // 请求方法
│   |   ├── tool.js              // 工具方法
│   ├── mock                     // mock数据
│   ├── page                   
│   |   ├── detail               //  详情页
│   |   ├── index                //  首页
│   ├── router                   // 路由
│   ├── store                    // 状态管理
│   ├── App.vue                  // 入口页面
│   └── main.js                  // 入口配置
├── static                       //空文件夹，只作为github保留                   
├── .babelrc                     // babel-loader 配置
├── eslintrc.js                  // eslint 配置项
├── .gitignore                   // git 忽略项
├── index.html                   // html模板
└── package.json                 // 项目依赖
```

## 安装运行

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8088
npm run dev

# build for production with minification
npm run build
```
