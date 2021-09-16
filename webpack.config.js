const path = require("path");
const HtmlWebPackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development",
  entry: "./src/index.js",
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "dist"),
  },
  devServer: {
    contentBase: "./dist",
    compress: true,
    watchOptions: { aggregateTimeout: 300, poll: 1000 },
    host: process.env.HOST,
    port: process.env.PORT || 7000,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Content-Type": "application/javascript; charset=windows-1251",
    },
  },
  module: {
    rules: [
      {
        test: /\.js|\.jsx$/,
        exclude: /node_modules/,
        use: "babel-loader",
      },
      {
        test: /\.css|\.scss$/,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: "./public/index.html"
    }),
  ],
};
