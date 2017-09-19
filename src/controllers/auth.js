/**
 * Handle calls to /auth
 */

// var express = require("express");
// var router = express.Router();
// var session = require("express-session");
// var sessions = {};
// var winston = require("../services/logger");

// router.get("/auth", function(req, res) {
//     var loggedIn = sessions[req.session.oauthAccessToken];
//     if (loggedIn) {
//         getType(loggedIn.user, function(admin) {
//             res.send(JSON.stringify({
//                 loggedIn: loggedIn
//             }));
//         });
//     } else {
//         res.sendStatus(401);
//     }
// });

// module.exports = {
//     sessions: sessions,
//     router: router
// };
