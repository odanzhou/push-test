const fs = require('fs');
const path = require('path');
const { PassThrough, Readable } = require('stream');
const cors = require('@koa/cors');
const Koa = require('koa');
const Router = require('koa-router');

const port = 8400;
const app = new Koa();

const router = new Router();

function RR(...args) {
  Readable.call(this, args);
}

RR.prototype = new Readable();

RR.prototype._read = function (data) {};

const sse = (stream, event, data) => {
  return stream.push(`event:${event}\ndata:${JSON.stringify(data)}\n\n`);
};

app.use(cors());

router.get('/push', ctx => {
  const stream = new RR();
  ctx.set({
    'Content-Type': 'text/event-stream',
    'Cache-Control': 'no-cache',
    Connection: 'keep-alive',
  });
  sse(stream, 'message', { a: 'yango', b: 'tango' });
  ctx.body = stream;
  setInterval(() => {
    sse(stream, 'message', { a: 'yango', b: Date.now() });
  }, 3000);
  setInterval(() => {
    stream.push(':ping');
  }, 5000);
});
app.use(router.routes());
app.listen(port, () => {
  console.log(`eventSource app run at : https://127.0.0.1:${port}`);
});
