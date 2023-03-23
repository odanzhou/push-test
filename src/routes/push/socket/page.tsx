import { sendMessage } from '@/socket';

sendMessage(1, (...args) => {
  console.log('sendMessage', args);
});

const SocketPush = () => {
  return (
    <div>
      <h2>socket 推送</h2>
    </div>
  );
};

export default SocketPush;
