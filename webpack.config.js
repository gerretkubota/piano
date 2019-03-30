const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: path.resolve(__dirname, './src/client/index.js'),
  output: {
    path: path.resolve(__dirname, './build'),
    filename: 'webpack-bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.(jsx|js)?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['@babel/preset-env', '@babel/preset-react'],
          plugins: ['@babel/plugin-proposal-class-properties']
        }
      },
      {
        test: /\.css?$/,
        exclude: /node_modules/,
        loaders: ['style-loader', 'css-loader']
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, './src/client/public/index.html'),
      inject: 'body'
    })
  ],
  devServer: {
    contentBase: path.resolve(__dirname, './src/')
  }
}