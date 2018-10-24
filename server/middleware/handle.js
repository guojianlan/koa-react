const views = require('koa-views')
const serve =require('koa-static')
const path = require('path');
const resolve = src=>path.resolve(__dirname,src)
exports.headle = app =>{
  const handler = async (ctx, next) => {
    try {
      let start_time = Date.now()
      await next();
      console.log(`加载${ctx.url}的时间为:${Date.now()-start_time}`);
    } catch (err) {
      // console.log(err.name)
      ctx.response.status = err.statusCode || err.status || 500;
      ctx.response.body = {
        message: err.message
      };
      ctx.app.emit('error', err, ctx);
    }
  };
  app.use(handler);
}
exports.views = app=>{
  app.use(views(resolve('../../views'), {
    extension: 'html',
  }))
}
exports.static = app=>{
  app.use(serve(resolve('../../static'),{
    
  }))
}
