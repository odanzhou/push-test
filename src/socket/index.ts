import { io } from 'socket.io-client';

const API = 'https://localhost:4000'; // 'https://localhost:8081'; // 'wss://localhost:400';
const socket = io(API, {
  reconnectionDelayMax: 10000,
  // transports: ['websocket'],
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
      socket.close();
    },
  };
};
