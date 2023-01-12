var mysql = require("mysql");
var connection = mysql.createConnection({
  host: "mysql.ckern25chvy6.ap-south-1.rds.amazonaws.com",
  port: "3306",
  user: "admin",
  password: "Nauman-12345",
  database: "movie_review",
});

connection.connect((err) => {
  if (err) throw err;
  console.log("Connected to DB");
});

var express = require("express");
var app = express();
app.route("/mysql").get(demoData);
function demoData(req, res) {
  var sql = "Select * from shows";
  connection.query(sql, function (err, result) {
    console.log(result);
    res.send(result);
  });
}

app.listen(3000);
console.log("http://127.0.0.1:3000/mysql");
