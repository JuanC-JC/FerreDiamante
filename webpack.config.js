const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const path = require('path')

module.exports = {
  entry: './src/index.js',
  output:{
    path: path.resolve(__dirname,'dist'),
    filename:'bundle.js',
    clean: true,
  },
  resolve:{
    extensions: ['.js']
  },
  module:{
    rules:[
      {
        test: /\.html$/,
        use: [
          {
            loader: 'html-loader',
          }
        ],
      },
      {
        test: /\.(png|jpg|svg)$/i,  
        type: 'asset/resource',
        generator:{
          filename: '[hash][ext]'
        }
      },
      {
        test: /\.(s?css)$/i,
        use:[
          {
            loader: MiniCssExtractPlugin.loader
          },
          'css-loader',
          'sass-loader']
      },
      {
        test:/\.js$/i,
        exclude: /node_modules/,
        use: 'babel-loader'
      },
    ]
  },
  plugins:[
    new HtmlWebpackPlugin({
      template: './public/index.html',
      filename:'index.html',
      inject: true,
    }),
    new MiniCssExtractPlugin({
      filename: '[name].css'
    })
  ]
}