//'use strict'
var express = require('express');
var router = express.Router();
var request = require('request');

router.get('/all-status', function (req, res, next) {
    request('http://www3.septa.org/hackathon/Alerts/get_alert_data.php?req1=all', (error, response, body) => {
        if (!error && response.statusCode === 200) {
            var data = JSON.parse(body);
            var result = [];
            for (var d of data) {
                if (d.route_id.includes("rr_")) result.push(d);
            }
            res.send(JSON.stringify(result));
        }
    });
});

module.exports = router;
