import { io } from 'socket.io-client';

const API = 'http://localhost:8081'; // 'https://localhost:4000'; // 'wss://localhost:400';
const socket = io(API, {
  reconnectionDelayMax: 10000,
  auth: {
    token: '123',
  },
  query: {
    'my-key': 'my-value',
  },
});

export const chatMessage = () => {
  return {
    emit: message => socket.emit('chat_message', message),
    on: callback => socket.on('chat_message', callback),
    close: () => {
      debugger;
      socket.close();
    },
  };
};
