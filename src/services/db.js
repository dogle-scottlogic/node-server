/**
 * Handle connection to the database
 */

var winston = require("./logger");
// var MongoClient = require("mongodb").MongoClient;
var url = process.env.DB_URI || "mongodb://my-url-string";

var state = {
    db: null,
};

exports.connect = function(done) {
    if (state.db) {
        return done();
    }

    // MongoClient.connect(url, function(err, db) {
    //     winston.info("Connecting to datbase");
    //     if (err) {
    //         return done(err);
    //     }
    //     state.db = db;
    //     winston.info("Database successfully connected: " + url);
    //     done();
    // });
};

exports.get = function() {
    return state.db;
};

exports.set = function(db) {
    winston.info("setting database instance");
    state.db = db;
    return;
};

exports.close = function(done) {
    if (state.db) {
        winston.info("closing database instance");
        state.db.close(function(err, result) {
            state.db = null;
            state.mode = null;
            done(err);
        });
    }
};
