/**
 * Handle connection to the database
 */

const {
    Pool
} = require('pg');
var winston = require("./logger");
var url = process.env.DB_URI || "postgres://192.168.99.100:32768";

var state = {
    db: null,
};

exports.connect = function (done) {
    if (state.db) {
        return done();
    }

    const pool = new Pool({
        user: 'root',
        host: '192.168.99.100',
        database: 'postgres',
        password: 'root',
        port: '32768'
    });

    pool.on('error', (err, client) => {
        console.error('Unexpected error on idle client', err);
        winston.error('Unexpected error on idle client', err);
        process.exit(-1)
    })

    state.db = pool;
    done();
};

exports.get = function () {
    return state.db;
};

exports.set = function (db) {
    winston.info("setting database instance");
    state.db = db;
    return;
};

exports.executeQuery = function (query, params) {
    console.log(query);
    return state.db.connect().then(client => {
        return new Promise(function (resolve, reject) {
            client.query(query, params, (err, res) => {
                client.release();
                err ? reject(err) : resolve(res);
            });
        });
    })
}

exports.close = function (done) {
    if (state.db) {
        winston.info("closing database instance");
        state.db.close(function (err, result) {
            state.db = null;
            state.mode = null;
            done(err);
        });
    }
};