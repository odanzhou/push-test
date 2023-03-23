const http = require('http');
const Koa = require('koa');
const cors = require('@koa/cors');
const { Server } = require('socket.io');

const app = new Koa();
app.use(cors());
const server = http.Server(app.callback());
const io = new Server(server, {
  allowEIO3: true,
  cors: {
    origin: '*',
    methods: ['GET', 'POST'],
  },
});

const port = 8081;
server.listen(process.env.PORT || port, () => {
  console.log(`app run at : http://127.0.0.1:${port}`);
});

const hash = { value: 0 };
io.on('connection', (socket, ...args) => {
  const a = [socket, args];
  console.log('socket初始化完成');
  socket.on('chat_message', data => {
    const a = io;
    console.log(data, '接收到的信息');
    // socket.emit('message', { hello: '你是谁' });
  });
  setInterval(() => {
    const { value } = hash;
    hash.value += 1;
    socket.emit('chat_message', { value });
  }, 5000);
});
