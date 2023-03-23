const https = require('https');
const fs = require('fs');
const path = require('path');
const Koa = require('koa');
const cors = require('@koa/cors');
const { Server } = require('socket.io');
const socketConnect = require('./socket');


const app = new Koa();
app.use(cors());
const server = https.createServer(
  {
    key: fs.readFileSync(path.join(__dirname, '../localhost-privkey.pem')),
    cert: fs.readFileSync(path.join(__dirname, '../localhost-cert.pem')),
  },
  app.callback(),
);
socketConnect(server, 6000)
return
const io = new Server(server, {
  allowEIO3: true,
  cors: {
    origin: '*',
    methods: ['GET', 'POST'],
  },
  // transports: ['websocket'],
});

const port = 9000;
server.listen(process.env.PORT || port, () => {
  console.log(`app run at : https://127.0.0.1:${port}`);
});

const hash = { value: 0 };
io.on('connection', (socket, ...args) => {
  const a = [socket, args];
  console.log('socket初始化完成', port);
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
