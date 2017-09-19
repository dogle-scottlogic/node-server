/**
 * Example controller handle http requests
 */

var express = require("express");
var router = express.Router();
var modelOne = require("../models/modelOne");
var auth = require("../middleware/auth");

// Example post request handler.
// Uncommenting 'auth' runs auth middleware before handling request.
router.post("/", /*auth,*/ function(req, res) {
    modelOne.createThing(function(result, err) {
        if (!err) {
            res.sendStatus(201);
        } else {
            res.sendStatus(500);
        }
    });
});

// Example get request handler.
router.get("/", /*auth,*/ function (req, res) {
    modelOne.getThing(function(result, err) {
        if (!err) {
            res.json(result);
        } else {
            res.sendStatus(500);
        }
    });
});

module.exports = router;
