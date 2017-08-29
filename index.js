const express = require('express');
const request = require('request');
const app = express();

app.use(express.static('public'));

app.listen(3000, () => {
  console.log('Example app listening on port 3000!');
});

app.get("/api/status", function(req, res, next) {
  request('http://www3.septa.org/hackathon/Alerts/', function(error, response, body) {
    res.send(body);
  });
});



