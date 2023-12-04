const path = require("path");
const webpack = require("webpack");
const HTMLWebpackPlugin = require("html-webpack-plugin");

const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const FaviconsWebpackPlugin = require("favicons-webpack-plugin");

module.exports = {
  // enntry file
  // - sass가 존재할경우 entry: ['@babel/polyfill', './main.js', './main.scss'],
  entry: ["./src/App.jsx", "@babel/polyfill", "./src/sass/main.scss"],
  // 컴파일 + 번들링된 js 파일이 저장될 경로와 이름 지정
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "js/bundle.js",
    clean: true,
  },
  //server 옵션
  devServer: {
    //contentBase에서 변경됨
    static: {
      directory: "dist",
    },
    // hot 프로퍼티를 true로 설정!
    hot: true,
  },
  plugins: [
    // 컴파일 + 번들링 CSS 파일이 저장될 경로와 이름 지정
    new MiniCssExtractPlugin({ filename: "css/style.css" }),
    new HTMLWebpackPlugin({
      template: "./public/index.html",
    }),
    new FaviconsWebpackPlugin({
      logo: "./public/favicon.ico",
    }),
    //자동으로 import React from 'react'선언
    new webpack.ProvidePlugin({
      React: "react",
    }),
  ],
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        // include: [path.resolve(__dirname, "src/js")], //이거 추가하면 jsx인식을 못함
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-react", "@babel/preset-env"],
          },
        },
        // use: "babel-loader",
      },
      {
        test: /\.scss$/,
        use: [
          MiniCssExtractPlugin.loader,
          "css-loader", // translates CSS into CommonJS
          "sass-loader", // compiles Sass to CSS, using Node Sass by default
        ],
        exclude: /node_modules/,
      },
      {
        test: /\.(png|jpe?g|gif|svg|webp)$/i,
        loader: "file-loader",
        options: {
          publicPath: "",
          // name: 'images/[name].[ext]',
          name: "[name].[ext]?[hash]",
        },
      },
    ],
  },
  resolve: {
    extensions: [".js", ".jsx"],
  },
  devtool: "source-map",
  // https://webpack.js.org/concepts/mode/#mode-development
};
