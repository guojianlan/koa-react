const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const resolve = (src) => {
  return path.resolve(__dirname, src)
}
let cssLoader = [{
  loader: "css-loader",
  options: {
    url: false,
    modules: true
  }
}]
process.env.NODE_ENV === 'development'?cssLoader.splice(0,0,'style-loader'):cssLoader.splice(0,0,MiniCssExtractPlugin.loader)
let scssLoader = [{
    loader: 'css-loader',
    options: {
      importLoaders: 1,
      url: true,
      modules: true,
      sourceMap: process.env.NODE_ENV === 'development',
      localIdentName: '[name]-[local]-[hash:base64:5]'
    }
  },
  'postcss-loader',
  'sass-loader',
]
process.env.NODE_ENV === 'development'?scssLoader.splice(0,0,'style-loader'):scssLoader.splice(0,0,MiniCssExtractPlugin.loader)
module.exports = {
  mode: process.env.NODE_ENV === 'development' ? 'development' : 'production',
  entry: {
    app: resolve('../client/src/main.js')
  },
  output: {
    path: resolve('../static'),
    filename: '[name].js',
    publicPath: '/'
  },
  resolve: {
    extensions: ['.js', '.jsx', '.json'],
    alias: {
      '@': resolve('../client/src'),
    }
  },
  module: {
    rules: [{
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: file => (
          /node_modules/.test(file)
        )
      },
      {
        test: /.jsx$/, //使用loader的目标文件。这里是.jsx
        loader: 'babel-loader',
        exclude: file => (
          /node_modules/.test(file)
        )
      },
      {
        test: /\.css$/,
        exclude: [/node_modules/],
        use: cssLoader
      },
      {
        test: /\.scss$/,
        use: scssLoader
      }
    ]
  }
}