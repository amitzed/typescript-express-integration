"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var body_parser_1 = __importDefault(require("body-parser"));
var cookie_session_1 = __importDefault(require("cookie-session"));
var loginRoutes_1 = require("./routes/loginRoutes");
var app = express_1.default();
// Middleware below must remian in this order
app.use(body_parser_1.default.urlencoded({ extended: true }));
app.use(cookie_session_1.default({ keys: ['asdf'] }));
app.use(loginRoutes_1.router);
// Route Handlers
// app.get('/', (req: Request, res: Response) => {
// res.send(`
//   <div>
//     <h1>Testing</h1>
//   </div>
// `);
// });
app.listen(3000, function () {
    console.log('Listening on port 3000');
});
