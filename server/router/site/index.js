const Router = require('koa-router')
module.exports = (app)=>{
  const router = new Router({
    prefix:'/site'
  });
  router.get('/',async(ctx)=>{
    ctx.body="site"
  })
  app.use(router.routes())
    .use(router.allowedMethods());
}