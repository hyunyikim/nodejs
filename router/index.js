// index.js
// front controller의 역할
var express = require('express')
var app = express()
var router = express.Router()
var path = require('path')
var main = require('./main/main')
var email = require('./email/email')
var join = require('./join/join')

router.get('/', function(req, res){
  console.log("루트 패스 접속");
  res.sendFile(path.join(__dirname, "../public/main.html"));
});

router.use('/main', main)
router.use('/email', email)
router.use('/join', join)

module.exports = router;
