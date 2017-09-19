/**
 * Handle logging with Winston
 */

var winston = require("winston");
var fs = require("fs");
var date = new Date();
var env = process.env.NODE_ENV || "development";

// Create the log directory if it does not exist
if (!fs.existsSync("logs")) {
    fs.mkdirSync("logs");
}

// Create a logger
var logger = new(winston.Logger)({
    transports: [
        new(winston.transports.Console)({
            colorize: true,
            level: env === "development" ? "warn" : "error"
        }),
        new(winston.transports.File)({
            filename: "logs/server_logs.log_" + date.getDate() + "-" +
                date.getMonth() + "-" + date.getUTCFullYear() + ".log",
            level: env === "development" ? "debug" : "error"
        })
    ]
});

module.exports = logger;
