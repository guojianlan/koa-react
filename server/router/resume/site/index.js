const Router = require('koa-router')
const router = new Router();
router.get('/index',async(ctx)=>{
  ctx.body='resume/site/index'
})
module.exports = router