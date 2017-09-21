/**
 * Example controller. See `pathOne.js`
 */

var express = require("express");
var router = express.Router();
var modelOne = require("../models/modelOne");
var auth = require("../middleware/auth");

router.get("/", /*auth,*/ function (req, res) {
    modelOne.getThing(function (err, result) {
        if (!err) {
            res.json(result);
        } else {
            res.sendStatus(500);
        }
    });
});

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

