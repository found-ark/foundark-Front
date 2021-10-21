const express = require('express')
const app = express()
const port = 3000
/*웹팩 설정 
출처 : https://skout90.github.io/2018/03/18/Frontend/3.웹팩-핫리로딩/
*/
// webpack의 dist를 static으로 등록
const staticWebpack = express.static("dist");

/*웹팩 미들웨어*/
// app.use(webpackDevMiddleware)
app.use('/dist',staticWebpack);//static적용

//static
const static = express.static("static");
app.use('/static',static)

let router = require('./router/main')(app); //라우터 적용

app.set('views', __dirname + '/views'); //html위치
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);



app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})