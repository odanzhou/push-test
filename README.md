# Your App

## Prerequisites

1. [Node.js LTS](https://github.com/nodejs/Release)
    * [Automatically call nvm use](https://github.com/nvm-sh/nvm#deeper-shell-integration)

## Get Started

按开发环境的要求，运行和调试项目

```
pnpm dev
```

继续创建更多项目要素，比如应用入口

```
pnpm new
```

其他

```
pnpm build        # 按生产环境的要求，构建项目
pnpm serve        # 按生产环境的要求，运行项目
```

### http2
[使用koa创建基于http2的服务](https://juejin.cn/post/7039525929558736927)
[koa-server-push](https://www.npmjs.com/package/koa-server-push)
[NodeJs 中的 http、https 和 http2](https://www.jianshu.com/p/d9029f7227ea)
### socket.io
[socket.io](https://github.com/socketio/socket.io)
[https://qa.1r1g.com/sf/ask/719296721/](https://qa.1r1g.com/sf/ask/719296721/)
#### 问题
在 http2 的模式下，使用 transports: ['websocket']，服务器端会报错，关闭后，推送无效，但自动启用了轮训
同时在客户端和服务端启用这个参数依旧报错
