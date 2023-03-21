import { Outlet, Link } from '@modern-js/runtime/router';

const list = [
  {
    name: 'http2',
    url: '/push/http2',
  },
  {
    name: 'scoket',
    url: '/push/scoket',
  },
  {
    name: 'event source',
    url: '/push/eventSource',
  },
  {
    name: 'poll',
    url: '/push/poll',
  },
];

export default () => {
  return (
    <div>
      <div>
        {list.map(({ name, url }) => (
          <div key={name}>
            <Link to={url}>{name}</Link>
          </div>
        ))}
      </div>
      <Outlet />
    </div>
  );
};
