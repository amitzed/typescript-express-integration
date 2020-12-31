import { Router, Request, Response } from 'express';

const router = Router();

router.get('/', (req: Request, res: Response) => {
  res.send(`
    <div>
      <h1>Testing</h1>
    </div>
  `);
});

router.get('/login', (req: Request, res: Response) => {
  res.send(`
    <form method="POST">
      <div>
        <label>Email</label>
        <input type="text" name="email" />
      </div>
      <div>
        <label>Password</label>
        <input type="password" name="password" />
      </div>
      <button>Submit</button>
    </form>
  `);
});

// Route Handler for POST Request
router.post('/login', (req: Request, res: Response) => {

});

export { router };
