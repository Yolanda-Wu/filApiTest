var webpack = require("webpack"); // eslint-disable-line no-unused-vars
var path = require("path");

module.exports = {
  context: __dirname,
  entry: {
    main: "./src/index.js"
  },
  mode: "development",
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "dist")
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      }
    ]
  }
};
