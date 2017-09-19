/**
 * Authentithication middleware checks user token calling the 'next' callback or returning a 401.
 */

var auth = require("../controllers/auth");
module.exports = function(req, res, next) {
    if (req.cookies.sessionToken) {
        var user = auth.sessions[req.cookies.sessionToken];
        if (user) {
            next();
        } else {
            res.sendStatus(401);
        }
    } else {
        res.sendStatus(401);
    }
};
