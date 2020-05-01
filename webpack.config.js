const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  entry: './js/app.module.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
  plugins: [new MiniCssExtractPlugin()],
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.html$/,
        use: {
          loader: "html-loader"
        }
      },
      {
          test: /\.scss$/,
          use: [
            // {loader: "style-loader"}, //if u want the css as hidden js, use this. otherwise, use the minicssextractplugin loader
            {loader: MiniCssExtractPlugin.loader},
            {loader: "css-loader"},
            {loader: "sass-loader"}
          ]
      }
    ]
  }
};