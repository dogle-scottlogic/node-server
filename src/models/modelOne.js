/**
 * Example model. Will retrive data and return to controller.
 */

var db = require("../services/db");
var winston = require("../services/logger");

exports.getThing = function (done) {
    db.executeQuery('SELECT * FROM films').then((res) => {
        done(res);
    }).catch((err) => {
        console.log(err);
        winston.error(err);
    });
};

exports.setThing = function (thing, done) {
    done('ok');
};