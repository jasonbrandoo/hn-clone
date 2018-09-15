const HtmlWebPackPlugin = require('html-webpack-plugin');

module.exports = {
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: "style-loader"
          },
          {
            loader: "css-loader",
            options: {
              url: false,
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebPackPlugin({
    template: "./public/index.html",
    })
  ]
}