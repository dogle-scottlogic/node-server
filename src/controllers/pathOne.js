/**
 * Example controller handle http requests
 */

var express = require("express");
var router = express.Router();
var modelOne = require("../models/modelOne");
var auth = require("../middleware/auth");

// Example get request handler.
router.get("/", /*auth,*/ function (req, res) {
    const entityMatch = /\/*\('(\w+)'\)/;
    const entity = req.originalUrl.match(entityMatch);
    if (entity && entity[1]) {
        modelOne.getThingById(entity[1], function (err, result) {
            if (!err) {
                res.json({
                    '@odata.context': req.protocol + '://' + req.get('host') + '/api/$metadata#Films/$entity',
                    value: result.rows
                });
            } else {
                res.sendStatus(500);
            }
        });
    } else {
        modelOne.getThing(req, function (err, result) {
            if (!err) {
                res.json({
                    '@odata.context': req.protocol + '://' + req.get('host') + '/api/$metadata#Films',
                    value: result.rows
                });
            } else {
                res.sendStatus(500);
            }
        });
    }    
});

// Example post request handler.
// Uncommenting 'auth' runs auth middleware before handling request.
router.post("/", /*auth,*/ function (req, res) {
    modelOne.createThing(function (err, result) {
        if (!err) {
            res.sendStatus(201);
        } else {
            res.sendStatus(500);
        }
    });
});

module.exports = router;