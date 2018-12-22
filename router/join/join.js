// join.js
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
router.get('/', function(req, res){
  console.log("get join url");
  res.sendFile(path.join(__dirname, "../../public/index.html"));
});

router.post('/', function(req, res){
  console.log("post join url");
  var body = req.body;
  var email = body.email;
  var name = body.name;
  var pwd = body.password;

  var sql = {email : email, name : name, pwd : pwd};
  var query = connection.query('insert into user_node set ?', sql, function(err, rows){
  //var query = connection.query('insert into user_node (email, name, pwd) values ("' + email + '","' + name + '","' + pwd + '")', function(err, rows){
    if(err) {throw err;}
    console.log("ok db insert");
    res.render('welcome.ejs', {'email':email, 'name':name, 'pwd':pwd});
  })
});

module.exports = router;
