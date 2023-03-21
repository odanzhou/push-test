const http2 = require('http2');
const fs = require('fs');
const path = require('path');
const Koa = require('koa');
const Router = require('koa-router');
const cors = require('@koa/cors');
const pushRouter = require('./router');

const app = new Koa();

const router = new Router();
app.use(async ctx => {
  ctx.body = 'Hello World';
});
router.use('/api', pushRouter.routes(), pushRouter.allowedMethods());
app.use(cors());
app.use(router.routes()).use(router.allowedMethods());

const PORT = 4000;

http2
  .createServer(
    {
      key: fs.readFileSync(path.join(__dirname, '../localhost-privkey.pem')),
      cert: fs.readFileSync(path.join(__dirname, '../localhost-cert.pem')),
    },
    app.callback(),
  )
  .listen(PORT, () => {
    console.log(`koa2 started in ${PORT}`);
  });
