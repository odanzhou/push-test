const Koa = require('koa');
const Router = require('koa-router');
const cors = require('@koa/cors');
const pushRouter = require('./router');

const app = new Koa();

const router = new Router();

router.use('/api', pushRouter.routes(), pushRouter.allowedMethods());
app.use(cors());
app.use(router.routes()).use(router.allowedMethods());

const PORT = 4000;

app.listen(PORT, () => {
  console.log(`koa2 started in ${PORT}`);
});
