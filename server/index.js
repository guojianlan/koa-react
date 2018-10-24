const Koa = require('koa')
const path = require('path')
const koaBody = require('koa-body')
const config = require('config')
const R = require('ramda')
const resolve = src => path.resolve(__dirname,src)
const MIDDLEWARES =  ['handle','router','error']
class Server {
  constructor(){
    this.app= new Koa()
    this.useMiddleWares(this.app)(MIDDLEWARES);
    if (process.env.NODE_ENV == 'development') {
      //开发阶段的代码
      var webpack = require('webpack')
      var webpackConfig = require('../build/webpacl.development.conf')
      var devMiddleware = require('koa-webpack-dev-middleware')
      const historyFallback = require('koa2-history-api-fallback')
      var compiler = webpack(webpackConfig)
      this.app.use(historyFallback());
      this.app.use(devMiddleware(compiler,{
        publicPath: '/',
        stats: {
          colors: true
        },
        serverSideRender:false
      }))
      // app.use(serve(path.join(__dirname,'./client/src')))
    }
    this.app.use(async(ctx)=>{
      await ctx.render('index');
    })
  }
  useMiddleWares(app){
    return R.map(R.compose(R.map(i=>{i(app)}),require,i=>`${resolve('./middleware')}/${i}`))
  }
  start(port=3002){
    this.app.listen(port)
  }
}
module.exports = Server