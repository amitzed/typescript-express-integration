import express, { Request, Response } from 'express';

import { router } from './routes/loginRoutes';

const app = express();

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
