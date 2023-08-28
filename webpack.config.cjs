import webpack from 'webpack';
import options from './options.json' assert { type: "json" };
import TerserPlugin from 'terser-webpack-plugin';

const uglifyJS = new TerserPlugin({ parallel: true })
const { env } = options

module.exports = {
  entry: [
    'element.prototype.matches',
    'element-closest',
    'nodelist-foreach-polyfill',
    `./app/scripts/index.js`
  ],
  output: {
    path: `${__dirname}/dist/js/`,
    filename: 'app.js'
  },
  mode: env === 'prod' ? 'production' : 'development',
  devtool: 'cheap-module-source-map',
  resolve: {
    modules: ['node_modules'],
    extensions: ['.web.js', '.mjs', '.js', '.json', '.web.jsx', '.jsx']
  },
  module: {
    rules: [
      {
        test: /\.m?js$/i,
        exclude: /node_modules/,
        use: {
          presets: ['@babel/env'],
          plugins: ['@babel/proposal-class-properties']
        },
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          },
        },
      }
    ]
  },
  plugins: env !== 'dev' ? [uglifyJS] : [
    new webpack.ProvidePlugin({
      jQuery: 'jquery',
      'window.jQuery': 'jquery',
      jquery: 'jquery',
      'window.jquery': 'jquery',
      $: 'jquery',
      'window.$': 'jquery'
    })
  ],
  performance: {
    hints: false
  }
}
