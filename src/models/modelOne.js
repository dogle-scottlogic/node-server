/**
 * Example model. Will retrive data and return to controller.
 */

var db = require("../services/db");
var winston = require("../services/logger");
var createFilter = require('odata-v4-pg').createFilter;

exports.getThing = function (req, done) {
    var filter = createFilter(req.query.$filter);
    db.executeQuery(filter.from("films"), filter.parameters).then((res) => {
        done(null, res);
    }).catch((err) => {
        console.log(err);
        winston.error(err);
        done(err);
    });
};

exports.getThingById = function (id, done) {
    db.executeQuery('SELECT * FROM films where code = \'' + id + '\'').then((res) => {
        done(null, {
            rows: res
        });
    }).catch((err) => {
        console.log(err);
        winston.error(err);
        done(err);
    });
}

exports.setThing = function (thing, done) {
    done('ok');
};