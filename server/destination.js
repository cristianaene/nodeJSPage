var mysql = require('mysql');
var express = require('express'); //importing express framework

var con = mysql.createConnection({ //define mysql connection
  host: "localhost",
  user: "root",
  password: "",
  database:"destination"
});

con.connect(function(err) {//open connection to mysql database
  if (err) throw err;
  console.log("Connected!");
});

var app = express(); //initializing the http framework

app.get('/', function(req, res) {
    res.send('http is up and running');
});

app.get('/listvacation', function(req, res) {
    con.query("select name from vacationtype", function(err, result, fields){
        if(err){
            throw err;
        }
        res.send(result);
    });
});


var server = app.listen(8080, function(){
    var host = server.address().address;
    var port = server.address().port;
    console.log("Destination server listening at http://%s:%s", host, port);
});


