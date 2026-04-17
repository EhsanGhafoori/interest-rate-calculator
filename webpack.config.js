const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");

module.exports = {
  mode: "production",
  entry: "./src/script.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "main.js",
    clean: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "index-webpack.html",
      inject: "body",
      scriptLoading: "defer",
    }),
    new CopyWebpackPlugin({
      patterns: [
        { from: "styles.css", to: "styles.css" },
        { from: "favicon.ico", to: "favicon.ico" },
      ],
    }),
  ],
};
