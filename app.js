//app.js
var express = require('express')
var app = express()
var bodyParser = require('body-parser')
var router = require('./router/index')

app.listen(8888, function(){
    console.log("express server on!");
});

app.use(express.static('public'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))
app.set('view engine', 'ejs')

// 새로운 라우터 정의
app.use(router)
