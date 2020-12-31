"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
var express_1 = require("express");
var router = express_1.Router();
exports.router = router;
router.get('/', function (req, res) {
    res.send("\n    <div>\n      <h1>Testing</h1>\n    </div>\n  ");
});
router.get('/login', function (req, res) {
    res.send("\n    <form method=\"POST\">\n      <div>\n        <label>Email</label>\n        <input type=\"text\" name=\"email\" />\n      </div>\n      <div>\n        <label>Password</label>\n        <input type=\"password\" name=\"password\" />\n      </div>\n      <button>Submit</button>\n    </form>\n  ");
});
// Route Handler for POST Request
router.post('/login', function (req, res) {
});
