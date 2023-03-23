const { Server } = require('socket.io');

let io;
const socketConnect = server => {
  if (!io) {
    io = new Server(server, {
      allowEIO3: true,
      cors: {
        origin: '*',
        methods: ['GET', 'POST'],
      },
    });
  }
  io.on('connetction', socket => {
    console.log('a user connected', socket);
    socket.on('chat_message', msg => {
      console.log('message: ', msg);
      io.emit('chat_message', msg + 1);
    });
  });
};

module.exports = socketConnect;
