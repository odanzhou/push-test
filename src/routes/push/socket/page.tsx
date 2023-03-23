import { useEffect, useState } from 'react';
import { chatMessage } from '@/socket';

const socketRes = chatMessage();
const { on, emit, close } = socketRes;
emit('来了');
const SocketPush = () => {
  const [message, setMessage] = useState(0);
  useEffect(() => {
    on(res => {
      setMessage(res.value);
    });
    return close;
  }, []);
  const onClose = () => {
    close();
  };

  return (
    <div>
      <h2>socket 推送</h2>
      <div>{message}</div>
      <button onClick={onClose}>close</button>
    </div>
  );
};

export default SocketPush;
