const webpack = require("webpack");
const path = require("path");

const IS_PRODUCTION = process.env.NODE_ENV === "production";

module.exports = {
  target: "web",
  mode: IS_PRODUCTION ? "production" : "development",
  resolve: {
    modules: ["node_modules"],
    extensions: [".js", ".jsx", ".json"]
  },
  entry: "./src/index.jsx",
  devtool: IS_PRODUCTION ? false : "#source-map",
  output: {
    path: path.resolve(__dirname, "./dist"),
    filename: "[name].js",
    chunkFilename: "[name].js",
    sourceMapFilename: "[name].js.map"
  },
  module: {
    rules: [
      {
        test: /\.jsx$/,
        exclude: /node_modules/,
        loader: "babel-loader"
      }
    ]
  },
  optimization: {
    splitChunks: {
      name: "vendor",
      chunks: "initial"
    }
  },
  stats: "minimal",
  plugins: [
    new webpack.DefinePlugin({
      "process.env": {
        NODE_ENV: JSON.stringify(process.env.NODE_ENV || "development")
      },
      "process.title": JSON.stringify("browser")
    }),
    new webpack.optimize.ModuleConcatenationPlugin()
  ]
};
