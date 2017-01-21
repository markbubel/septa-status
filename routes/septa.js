
var express = require('express');
var router = express.Router();
var request = require('request');

router.get('/all-status', function (req, res, next) {
    request('http://www3.septa.org/hackathon/Alerts/get_alert_data.php?req1=all', (error, response, body) => {
        if (!error && response.statusCode === 200) {
            res.send(body);
        }
    });
});

module.exports = router;
