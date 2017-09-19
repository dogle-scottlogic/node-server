var express = require("express");
var cookieParser = require("cookie-parser");
var bodyParser = require("body-parser");
var db = require("./services/db");
var session = require("express-session");
var winston = require("./services/logger");
var http = require("http");
// For use with websockets
// var ws = require("./services/ws");

module.exports = function(port, callback, rootUrl) {

    winston.info("Setting up server");

    if (!rootUrl) {
        rootUrl = "http://localhost";
    }

    var app = express();
    // Expose path to static files here.
    app.use("/", express.static(__dirname + "/../client"));
    // app.use("/lib", express.static(__dirname + "/../node_modules"));
    // app.use("/img", express.static(__dirname + "/../images"));

    // If using websockets setup here
    //var server = ws.init(app);
    var server = http.createServer(app);

    app.use(cookieParser());
    app.use(bodyParser.json());
    app.use(session({
        secret: "keyboard cat",
        resave: false,
        saveUninitialized: true,
        cookie: {
            secure: true
        }
    }));
    app.use(require("./controllers"));

    // Connect to db
    db.connect(function(err, cb) {
        if (err) {
            exitServer("Unable to connect to Database.");
        }
    });

    function exitServer(message) {
        winston.warn("Closing server");
        process.exit(1);
    }

    server = server.listen(port, callback);

    // We manually manage the connections to ensure that they're closed when calling close().
    var connections = [];
    server.on("connection", function(connection) {
        connections.push(connection);
    });

    return {
        close: function(callback) {
            connections.forEach(function(connection) {
                connection.destroy();
            });
            server.close(callback);
        }
    };
};
