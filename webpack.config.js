const path = require("path");
const webpack = require("webpack");
const HTMLWebpackPlugin = require("html-webpack-plugin");

const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const FaviconsWebpackPlugin = require("favicons-webpack-plugin");

const StylexPlugin = require('@stylexjs/webpack-plugin');


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
    //react-router에서 url에서 바로 접근하는거 가능하도록
    historyApiFallback: true,
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
    new StylexPlugin({
      filename: 'styles.[contenthash].css',

      // Use statically generated CSS files and not runtime injected CSS.
      // Even in development.
      runtimeInjection: false,
      // optional. default: 'x'
      classNamePrefix: 'x',
      // Required for CSS variable support
      unstable_moduleResolution: {
        // type: 'commonJS' | 'haste'
        // default: 'commonJS'
        type: 'commonJS',
        // The absolute path to the root directory of your project
        rootDir: __dirname,
      },
    }),
  ],
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        // include: [path.resolve(__dirname, "src/js")], //이거 추가하면 jsx인식을 못함
        exclude: /node_modules/,
        use: "babel-loader",
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
    extensions: [".jsx", ".js"],
  },
  devtool: "source-map",
  // https://webpack.js.org/concepts/mode/#mode-development
};
