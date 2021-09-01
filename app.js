const express = require('express')
const app = express()
const port = 3000

let router = require('./router/main')(app); //라우터 적용

app.set('views', __dirname + '/views'); //html위치
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})