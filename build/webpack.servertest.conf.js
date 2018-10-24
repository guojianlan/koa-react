var baseConfig = require('./webpack.base.conf')
var webpackMerge = require('webpack-merge')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin'); //html
const MiniCssExtractPlugin = require('mini-css-extract-plugin'); // 提取文件
const CleanWebpackPlugin = require('clean-webpack-plugin'); //删除文件
const ModuleConcatenationPlugin = require('webpack/lib/optimize/ModuleConcatenationPlugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin'); //压缩js
var HtmlWebpackIncludeAssetsPlugin = require('html-webpack-include-assets-plugin');
var path = require('path')
let config = webpackMerge(baseConfig, {
  output: {
    filename: 'koa_react/js/[name].[hash:8].js',
  },
  module: {
    rules: [{
      test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
      exclude: /(node_modules)/,
      use: {
        loader: 'url-loader',
        options: {
          publicPath: 'https://cdnnzy.knowgroup.cn',
          limit: 10000,
          name: 'koa_react/images/[name].[hash:7].[ext]'
        },
      }
    }, ]
  },
  optimization: {
    splitChunks: {
      // chunks:'all',
      cacheGroups: {
        commons: {
          chunks: "initial",
          minChunks: 2,
          maxInitialRequests: 5, // The default limit is too small to showcase the effect
          minSize: 0 // This is example is too small to create commons chunks
        },
        vendor: {
          test: /node_modules/,
          chunks: "initial",
          name: "vendor",
          priority: 10,
          enforce: true
        }
      }
    }
  },
  plugins: [
    new webpack.ProgressPlugin(),
    new webpack.DllReferencePlugin({
      manifest: require(path.join(__dirname,'../static/libs/libs.manifest.json'))
    }),
    new CleanWebpackPlugin(['koa_react'], {
      root: path.join(__dirname, '../static'),
      verbose: true,
      dry: false
    }),
    new ModuleConcatenationPlugin(),
    new MiniCssExtractPlugin({
      filename: 'koa_react/[name].[hash:8].css',
      chunkFilename: 'koa_react/[name]-[id].[hash:8].css',
    }),
   
    new webpack.DefinePlugin({
      "process.env.NODE_ENV": JSON.stringify("server-test"),
      'RESOURCE': JSON.stringify('/koa_react/resource/i18n'),
      resourceVersion: JSON.stringify(+new Date())
    }),
    new UglifyJsPlugin({
      parallel: true,
      uglifyOptions: {
        compress: {
          warnings: false,
          drop_debugger: true,
          drop_console: true
        }
      }
    }),
    new HtmlWebpackPlugin({
      filename: path.join(__dirname, '../views/index.html'),
      template: path.resolve(__dirname, '../client/src/index.html'),
      // minify: {
        // removeComments: true,
        // collapseWhitespace: true,
        // removeAttributeQuotes: true
        // more options:
        // https://github.com/kangax/html-minifier#options-quick-reference
      // },
    }),
    new HtmlWebpackIncludeAssetsPlugin({
      assets: [{ path: 'libs', glob: '*.js', }],
      append: false
    })
  ]
})
module.exports = config