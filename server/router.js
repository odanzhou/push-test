const Router = require('koa-router');

const setBody = (data, reset) => {
  return {
    state: 200,
    type: 'success',
    ...reset,
    data,
  };
};

const hash = {
  poll: 1,
};

const page = new Router();
page.get('/poll', async ctx => {
  const val = hash.poll + 1;
  hash.poll = val;
  console.log(`pagepage:${val}`);
  ctx.status = 200;
  ctx.body = setBody(val);
});

module.exports = page;
