var router = require("express").Router();
var auth = require("./auth");
var one = require("./pathOne");
var two = require("./pathTwo");

router.use("/api/pathOne", one);

router.use("/api/pathTwo", two);

router.use("/oauth", auth.router);

router.get("/", function(req, res) {
    res.render("index");
});

module.exports = router;
