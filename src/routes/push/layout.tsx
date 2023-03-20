import { Outlet, Link } from '@modern-js/runtime/router'

export default () => {
  return (
    <div>
      <div>
        <div>
          <Link to="/push/http2">http2</Link>
        </div>
        <div>
          <Link to="/push/scoket">scoket</Link>
        </div>
        <div>
          <Link to="/push/eventSource">event source</Link>
        </div>
      </div>
      <Outlet />
    </div>
  )
}
