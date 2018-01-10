const express = require('express');
const request = require('request');
const app = express();

app.use(express.static('public'));
app.listen(process.env.PORT || 8080); // process.env.PORT lets the port be set by Heroku


app.listen(port, () => {
  console.log('Example app listening on' + port);
});

app.get("/api/status", function(req, res, next) {
  request('http://www3.septa.org/hackathon/Alerts/', function(error, response, body) {
    res.send(body);
  });
});



