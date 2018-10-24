const Router = require('koa-router')
const site = require('./site')
module.exports = (app) => {
  const router = new Router({
    prefix: '/resume'
  });
  router.use(async(ctx,next)=>{
    console.log('router-resume-middleware')
    await next()
  })
  router.get('/', async (ctx) => {
    ctx.body = "resume"
  })
  router.use('/site', site.routes(), site.allowedMethods())
  app.use(router.routes())
    .use(router.allowedMethods());
}