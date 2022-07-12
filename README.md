# 基于next.js、Egg.js搭建的个人博客系统

## 项目简介

最近看了看node.js的书籍，node.js开发指南、了不起的node.js、还有三分之一本深入浅出nodejs（底层太难了，后面看不下去了）。node.js开发指南从搭建简单的node服务器到基于ejs、express快速搭建个人博客系统，简明的展示了node.js用作后端开发的特点和优势。了不起的node.js借助各种例子来介绍node.js的整体框架和各个模块的应用，非常通俗易懂。书上的很多例子让人印象深刻，不过看书的时候偷了懒，没有把示例代码实现一遍。于是跟着技术胖的博客做了这个项目，也算是作为node.js的一个实践和学习吧。

## 技术栈

框架：Next.js、React、Egg.js。

涉及到的技术：react-router4、antd、mysql、redux。

## 项目结构

前端用Next.js框架，服务端渲染便于更好地SEO。用Egg.js搭建中台，主要是给前台和后端提供接口，数据库选择熟悉的MySQL。后台则用React+antd快速搭建，不用考虑SEO。

![image-20220712165318021](https://github.com/luozhiqiang-code/react_blog/blob/master/image-20220712165318021.png)

## 功能实现

**前台功能：**

1. 公用Header组件
2. 首页组件拆分
3. 首页文章列表
4. 右侧个人信息面板
5. 右侧文章导航
6. 面包屑导航
7. 文章详情页面开发
8. 收藏的视频

**中台功能：**

1. 登录验证
2. 路由守卫
3. 文章CURD的接口
4. 视频数据CURD的接口

**后台功能：**

1. 登录验证
2. 文章管理列表
3. 文章编辑列表

**待实现功能：**

1. 游客登录
2. 游客评论
3. 视频管理页面
4. 待定...

## 项目收获

项目虽然简单，但是收获的知识不少。巩固了React基础语法（状态、事件、组件、属性），对React架构有了更深刻的理解诸如虚拟Dom原理、生命周期函数、react中过渡和动画的实现、容器组件和无状态组件的设计、利用Styled-components封装自己的组件、redux中间件原理。

## 项目运行

1.将项目clone下来

```shell
$ git clone https://github.com/luozhiqiang-code/react_blog.git
$ cd admin
$ npm install
$ cd blog
$ npm install
$ cd service
$ npm install
```

2.运行

首先到service/config/config.default.js修改数据库的端口和账户密码等信息

```javascript
  config.mysql = {
    // database configuration
    client: {
      // host
      host: "localhost",
      // port
      port: "3306",
      // username
      user: "admin",
      // password
      password: "123456789",
      // database
      database: "react_blog",
    },
```

然后到service、blog、admin目录下分别启动前中后台。

```javascript
$ npm run dev
```

现在就在本地的http://127.0.0.1:7001/default/访问前台，在http://127.0.0.1:7001/admin/访问后端。

