import express, { Request, Response } from 'express';
import bodyParser from 'body-parser';
import cookieSession from 'cookie-session';

import { router } from './routes/loginRoutes';

const app = express();

// Middleware below must remian in this order
app.use(bodyParser.urlencoded({extended: true}));
app.use(cookieSession({ keys: ['asdf'] }));

app.use(router);

// Route Handlers
// app.get('/', (req: Request, res: Response) => {
  // res.send(`
  //   <div>
  //     <h1>Testing</h1>
  //   </div>
  // `);
// });



app.listen(3000, () => {
  console.log('Listening on port 3000')
})
