const http2 = require('http2');
// const http = require('http');
const fs = require('fs');
const path = require('path');
const Koa = require('koa');
const Router = require('koa-router');
const cors = require('@koa/cors');
const pushRouter = require('./router');
const socketConnect = require('./socket');
// require('./socket2'); // 8081 端口socket
require('./sockehttps'); // 9000 端口socket

const app = new Koa();

const router = new Router();
router.use('/api', pushRouter.routes(), pushRouter.allowedMethods());
app.use(cors());
app.use(router.routes()).use(router.allowedMethods());

let PORT = 4000;

const server = http2.createSecureServer(
  {
    key: fs.readFileSync(path.join(__dirname, '../localhost-privkey.pem')),
    cert: fs.readFileSync(path.join(__dirname, '../localhost-cert.pem')),
  },
  app.callback(),
);

// socket
socketConnect(server);

// 启动监听
server.listen(PORT, () => {
  console.log(`koa2 started in ${PORT}`);
});

server.on('error', e => {
  if (e.code === 'EADDRINUSE') {
    console.log(`端口:${e.port} 被占用`);
    PORT++;
  } else {
    console.log('错误：', e);
  }
});
