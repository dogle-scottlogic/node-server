/**
 * Define router paths 
 */

var router = require("express").Router();
var auth = require("./auth");
var one = require("./pathOne");
var two = require("./pathTwo");

router.use("/api/Films", one);

router.use("/api/pathTwo", two);

module.exports = router;
