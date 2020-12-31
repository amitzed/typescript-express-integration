"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
var express_1 = require("express");
var router = express_1.Router();
exports.router = router;
// router.get('/', (req: Request, res: Response) => {
//   res.send(`
//     <div>
//       <h1>Testing</h1>
//     </div>
//   `);
// });
// Homepage and Login in status check
router.get('/', function (req, res) {
    // Look at req.session property:
    if (req.session && req.session.loggedIn) {
        res.send("\n      <div>\n        <h3>Logged In</h3>\n        <a href=\"/logout\">Logout</a>\n      </div>\n    ");
    }
    else {
        res.send("\n      <div>\n        <h3>Not Logged In</h3>\n        <a href=\"/login\">Login</a>\n      </div>\n    ");
    }
});
router.get('/login', function (req, res) {
    res.send("\n    <form method=\"POST\">\n      <div>\n        <label>Email</label>\n        <input type=\"text\" name=\"email\" />\n      </div>\n      <div>\n        <label>Password</label>\n        <input type=\"password\" name=\"password\" />\n      </div>\n      <button>Submit</button>\n    </form>\n  ");
});
// Route Handler for POST Request
router.post('/login', function (req, res) {
    var _a = req.body, email = _a.email, password = _a.password;
    // res.send(email + password) // TEST
    if (email && password && email === 'amit@email.com' && password === '12345') { // if email and password are DEFINED, and if email is equal to amit@email.com - user logged in.
        req.session = { loggedIn: true };
        res.redirect('/');
    }
    else {
        res.send('Email or Password is not valid.');
    }
});
