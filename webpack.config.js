const path = require("path");
const CleanWebpackPlugin = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry:  "./index.ts",

  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.[chunkhash].js",
  },

  mode: "development",

  devtool: "inline-source-map",

  resolve: {
    extensions: [".ts", ".tsx", ".js"]
  },

  module: {
    rules: [
      { test: /\.tsx?$/, loader: "awesome-typescript-loader" },
    ]
  },

  plugins: [
    new CleanWebpackPlugin("dist"),
    new HtmlWebpackPlugin(),
  ],
};
