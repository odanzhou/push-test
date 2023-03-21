import { useEffect, useState } from 'react';
import { pollPush } from '@/utils/push';

const PollPush = () => {
  const [val, setVal] = useState(0);
  useEffect(() => {
    const timer = setInterval(() => {
      pollPush()
        .then(res => {
          setVal(res.data.data);
        })
        .catch(err => {
          console.error(err);
        });
    }, 3000);
    return () => {
      clearInterval(timer);
    };
  }, []);
  return (
    <div>
      <h2>轮训 推送</h2>
      <div>{val}</div>
    </div>
  );
};

export default PollPush;
