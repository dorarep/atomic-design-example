const path = require('path')
const rootPath = path.resolve(__dirname, '../')

module.exports = {
  module: {
    rules: [
      {
        test: /\.stylus$/,
        use: [
          {
            loader: "style-loader" // creates style nodes from JS strings
          },
          {
            loader: "css-loader" // translates CSS into CommonJS
          },
          {
            loader: "stylus-loader" // compiles Stylus to CSS
          }
        ]
      },
      {
        test: /\.pug$/,
        loader: 'pug-plain-loader'
      },
      { test: /\.svg$/,
        loader: 'vue-svg-loader'
      }
    ],
  },
  resolve: {
    extensions: ['.js', '.vue', '.json'],
    alias: {
      '@': rootPath,
      '~': rootPath,
      'vue$': 'vue/dist/vue.esm.js'
    }
  }
}

