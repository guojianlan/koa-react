const webpackMerge = require('webpack-merge');
const baseConfig = require('./webpack.base.conf.js')
const htmlWebpackPlugin =require('html-webpack-plugin')
const path = require('path');
const resolve = (src)=>{
  return path.resolve(__dirname,src)
}
const developmentConfig = webpackMerge(baseConfig,{
  plugins:[
    new htmlWebpackPlugin({
      template:resolve('../client/src/index.html')
    })
  ]
})
module.exports  = developmentConfig