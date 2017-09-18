var db = require("../services/db");
var winston = require("../services/logger");

// Get the list of tracked Words
exports.getThing = function (done) {
    (done('some data'));
};

// Get the list of tracked users
exports.setThing = function (thing, done) {
    done('ok');
};
