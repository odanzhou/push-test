// const app = new Koa();

// const router = new Router();
// router.use('/api', pushRouter.routes(), pushRouter.allowedMethods());
// app.use(cors());
// app.use(router.routes()).use(router.allowedMethods());

// const port = 4000;

// const server = http2.createSecureServer(
//   {
//     allowHTTP1: true,
//     key: fs.readFileSync(path.join(__dirname, '../localhost-privkey.pem')),
//     cert: fs.readFileSync(path.join(__dirname, '../localhost-cert.pem')),
//   },
//   app.callback(),
// );

const http2 = require('http2');
const fs = require('fs');
const path = require('path');
const Koa = require('koa');
const Router = require('koa-router');
const cors = require('@koa/cors');
const { Server } = require('socket.io');
const pushRouter = require('./router');

const port = 7000;

const app = new Koa();
app.use(cors());

const router = new Router();
router.use('/api', pushRouter.routes(), pushRouter.allowedMethods());
app.use(cors());
app.use(router.routes()).use(router.allowedMethods());
const server = http2.createSecureServer(
  {
    allowHTTP1: true,
    key: fs.readFileSync(path.join(__dirname, '../localhost-privkey.pem')),
    cert: fs.readFileSync(path.join(__dirname, '../localhost-cert.pem')),
  },
  app.callback(),
);

const io = new Server(server, {
  allowEIO3: true,
  cors: {
    origin: '*',
    methods: ['GET', 'POST'],
  },
  // transports: ['websocket'],
});

const hash = { value: 0 };
io.on('connection', socket => {
  console.log('socket初始化完成', port);
  socket.on('chat_message', data => {
    console.log(data, '接收到的信息');
    // socket.emit('message', { hello: '你是谁' });
  });
  setInterval(() => {
    const { value } = hash;
    hash.value += 1;
    socket.emit('chat_message', { value });
  }, 5000);
});

server.listen(port, () => {
  console.log(`app run at : https://127.0.0.1:${port}`);
});
