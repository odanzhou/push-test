import { useEffect, useState } from 'react';
// https://blog.csdn.net/weixin_30030167/article/details/93627269
const API = 'http://localhost:8400/push';
const evtSource = new EventSource(API);
// 直接打开 http://localhost:8400/push 就能看到推送信息了
const EventSourcePush = () => {
  const [data, setData] = useState('');
  useEffect(() => {
    const fn = e => {
      console.log('e', e);
      setData(e.data);
    };
    evtSource.addEventListener('message', fn);
    evtSource.addEventListener('error', e => {
      console.error(e);
    });
    return () => {
      evtSource.removeEventListener('message', fn);
    };
  }, []);
  return (
    <div>
      <h2>eventSource 推送</h2>
      <div>{data}</div>
    </div>
  );
};

export default EventSourcePush;
