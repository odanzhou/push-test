const { Server } = require('socket.io');

let io;
const socketConnect = (server, { port, autoListen = true } = {}) => {
  if (!io) {
    io = new Server(server, {
      allowEIO3: true,
      cors: {
        origin: '*',
        methods: ['GET', 'POST'],
      },
      // transports: ['websocket'],
    });
  }
  const hash = { value: 0 };
  io.on('connection', socket => {
    console.log('wss socket初始化完成', port);
    socket.on('chat_message', data => {
      const a = io;
      console.log(data, '接收到的信息');
      // socket.emit('message', { hello: '你是谁' });
    });
    socket.on('error', err => {
      debugger;
      if (err && err.message === 'unauthorized event') {
        socket.disconnect();
      }
    });
    setInterval(() => {
      const { value } = hash;
      hash.value += 1;
      socket.emit('chat_message', { value });
    }, 5000);
  });
  if (autoListen && port) {
    server.listen(port, () => {
      console.log(`app run at : https://127.0.0.1:${port}`);
    });
  }
};

module.exports = socketConnect;
