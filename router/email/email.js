// email.js
var express = require('express')
var app = express()
var router = express.Router()
var path = require('path')
var mysql = require('mysql')

// database setting
var connection = mysql.createConnection({
  host : 'localhost',
  port : '3306',
  user : 'testuser',
  password : '1004',
  database : 'cafeboard'
});
connection.connect();

// Router
router.post('/form', function(req, res){
  res.render('email.ejs', {'email' : req.body.email});
});

router.post('/send', function(req, res){
  var email = req.body.email;
  console.log("입력한 이메일 : " + email);
  var responseData = {};
  var query = connection.query('select name from user_node where email = "'+ email +'"', function(err, rows){
    if(err) throw err;
    if(rows[0]){
      console.log("데이터 조회 : " + rows[0]);
      responseData.result = "ok";
      responseData.name = rows[0].name;
    } else {
      console.log("데이터 조회 안됨 ");
      responseData.result = "none";
      responseData.name = "";
    }
    res.json(responseData);
  });
});

module.exports = router;
