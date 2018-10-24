const path = require('path');
const resolve = src => path.resolve(__dirname, src);
const glob = require('glob')
const fs = require('fs')
const router_cwd = path.join(__dirname,'../router');
const routerMatchs = glob.sync('*/*.js',{
  root:router_cwd,
  cwd:router_cwd,
  absolute: true
});
const R = require('ramda')
const router = (app) => {
  let RouterCompose = R.compose(i=>{i(app)},require)
  R.forEach((item)=>{
    RouterCompose(item)
  })(routerMatchs)
}
module.exports.router = router;