# 在线聊天室

## 如何使用

1. 进入项目目录,首先安装 node_module 依赖。

```

npm install

```

2. 在本地启动项目。

```

npm run dev

```

## 在上线前编译项目。

```

npm run build

```

## 一旦上线,在你的机器上运行 prod.ts。

```

npm run start

```

## 完整的本地开发过程:

1. 在服务器端运行 `src/index.ts`。

2. webpack 开始编译(生成 main 和 chatRoom 页面)。

3. 用户在浏览器中请求 `dev.ts` 中的 url。

4. 服务器返回相应的页面(由 webpack 编译的客户端页面)。

## 项目主要分为:

- (客户端)HTML5 页面。

1. `npm run build` -> 构建客户端资源

2. 流程:

2-1. Webpack 将 TS+CSS+main.html 编译成-> 主页

2-2. Webpack 将 TS+CSS+chatRoom.html 编译成 -> 聊天室页面

- Node 服务器

1. 启动 express 服务器

2. 确定当前 process.env.NODE_ENV 环境:

NODE_ENV 环境:4-1 本地开发走 `dev.ts`,4-2 上线环境走 `prod.ts`。

3. 用户从浏览器(客户端)向 Node 服务器请求一个页面:

```

localhost:3000/main

localhost:3000/chatroom

dev.ts -> 重定向到 main/main.html 和 chatRoom/chatRoom.html

prod.ts -> 直接返回 main/main.html 和 chatRoom/chatRoom.html

```
