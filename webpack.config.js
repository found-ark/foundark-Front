const path = require('path');
const webpack = require('webpack');
const HTMLWebpackPlugin = require('html-webpack-plugin');

const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const FaviconsWebpackPlugin = require('favicons-webpack-plugin')

const dotenv = require("dotenv");
dotenv.config({//env가져오기
    path: path.resolve(//경로찾기
        process.cwd(),//현재경로 + 
        process.env.NODE_ENV == "production" ? "env/.production.env" : "env/.development.env"//실제는 .env, 개발은 .env.dev사용
    ),
    });
console.log(process.env.IP)

module.exports = {
    // enntry file
    // - sass가 존재할경우 entry: ['@babel/polyfill', './main.js', './main.scss'],
    entry: ['@babel/polyfill', './src/main.js', './sass/main.scss'],
    // 컴파일 + 번들링된 js 파일이 저장될 경로와 이름 지정
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'js/bundle.js',
        publicPath: process.env.IP
    },
    devServer: {
        contentBase: "dist",
        overlay: true,
        // 웹팩의 상태값에 색상을 부여한다.
        stats: {
          colors: true
        },
        // hot 프로퍼티를 true로 설정!
        hot: true
      },
    plugins: [
        // 컴파일 + 번들링 CSS 파일이 저장될 경로와 이름 지정
        new MiniCssExtractPlugin({ filename: 'css/style.css' }),
        new webpack.DefinePlugin({
            'process.env.IP': JSON.stringify(process.env.IP), // env에서 읽은 ip를 저장
            'process.env.API_IP': JSON.stringify(process.env.API_IP), //
            'process.env.PORT': JSON.stringify(process.env.PORT),
        }),
        new HTMLWebpackPlugin({
            template: "./views/index.html"
          }),
        new FaviconsWebpackPlugin({
            logo: './public/favicon.ico',
        }),
    ],
    module: {
        rules: [
            {
                test: /\.js$/,
                include: [
                    path.resolve(__dirname, 'src/js')
                ],
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env'],
                        plugins: ['@babel/plugin-proposal-class-properties']
                    }
                }
            },
            {
                test: /\.scss$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',// translates CSS into CommonJS
                    'sass-loader'// compiles Sass to CSS, using Node Sass by default
                ],
                exclude: /node_modules/
            }
        ]
    },
    devtool: 'source-map',
    // https://webpack.js.org/concepts/mode/#mode-development
    mode: 'development'
};