import { Router, Request, Response } from 'express';

interface RequestWithBody extends Request {
  body: { [key: string]: string | undefined}
}

const router = Router();

// router.get('/', (req: Request, res: Response) => {
//   res.send(`
//     <div>
//       <h1>Testing</h1>
//     </div>
//   `);
// });

// Homepage and Login in status check
router.get('/', (req: Request, res: Response) => {
  // Look at req.session property:
  if(req.session && req.session.loggedIn) {
    res.send(`
      <div>
        <h3>Logged In</h3>
        <a href="/logout">Logout</a>
      </div>
    `);
  } else {
    res.send(`
      <div>
        <h3>Not Logged In</h3>
        <a href="/login">Login</a>
      </div>
    `);
  }
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
router.post('/login', (req: RequestWithBody, res: Response) => {
  const { email, password } = req.body;

  // res.send(email + password) // TEST
  if(email && password && email === 'amit@email.com' && password === '12345') { // if email and password are DEFINED, and if email is equal to amit@email.com - user logged in.

    req.session = { loggedIn: true};
    res.redirect('/');
  } else {
    res.send('Email or Password is not valid.')
  }
});



export { router };
