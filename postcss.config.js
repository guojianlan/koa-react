module.exports = {
  parser: 'postcss-scss',
  plugins: [
      require('postcss-cssnext'),
      require('autoprefixer')({
          broswers: ['>1%', 'last 5 versions', 'Firefox ESR', 'not ie < 9']
      })
  ]
}
