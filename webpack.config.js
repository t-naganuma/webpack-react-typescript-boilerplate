const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./src/index.tsx",
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "dist"),
  },
  module: {
    rules: [
      {
        test: /\.*(ts|tsx)$/,
        use: ["babel-loader"],
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    modules: [path.resolve(__dirname, "src"), "node_modules"],
    extensions: [".js", ".jsx", ".ts", ".tsx"],
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "output",
      template: "src/index.html",
      filename: "index.html",
    }),
  ],
  devServer: {},
};
