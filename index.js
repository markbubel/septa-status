const express = require('express');
const request = require('request');
const app = express();

app.use(express.static('public'));
// process.env.PORT lets the port be set by Heroku
var port = process.env.PORT || 8080;

app.listen(port, () => {
  console.log('Example app listening on' + port);
});

app.get("/", function(req, res, next) {
  console.log("Testing out having a / path");
});

app.get("/api/status", function(req, res, next) {
  request('http://www3.septa.org/hackathon/Alerts/', function(error, response, body) {
    res.send(body);
  });
});



