const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CopyPlugin = require('copy-webpack-plugin')
const TerserPlugin = require('terser-webpack-plugin');
const Dotenv = require('dotenv-webpack')

module.exports = {
  mode: 'production',
  entry: './src/index.js',
  output:{
    path: path.resolve(__dirname,'dist'),
    filename: 'main.js'
  },
  resolve:{
    extensions:['.js']
  },
  module: {
    rules:[
      {
        test: /\.(js)$/,
        use: {
          loader: 'babel-loader'
        },
        exclude: /node_modules/
      }
    ]
  },
  plugins:[
    new HtmlWebpackPlugin({
      template: './public/index.html',
      filename: './index.html'
    }),
    new CopyPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, 'src/style/index.css'),
          to: './assets/style/index.css'
        },
        {
          from: path.resolve(__dirname, 'src/images'),
          to: './assets/images'
        }
      ]
    }),
    new Dotenv(),
  ],
  optimization:{
    minimize: true,
    minimizer: [
      new TerserPlugin()
    ]
  }
}