const HtmlWebpackPlugin = require("html-webpack-plugin")
const MiniCssExtractPlugin = require("mini-css-extract-plugin")

module.exports = {
  entry: {
    scripts: "./inc/js/scripts.js",
    bootstrap: "./inc/scss/bootstrap.scss",
    main: "./inc/scss/main.scss"
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./inc/template.html",
      filename: "../../index.html"
    })
  ],
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"]
      }
    ]
  },
  watch: true
}
