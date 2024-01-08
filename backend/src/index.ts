import express, { Express, Request, Response } from 'express';

const app: Express = express();

app.get('/api/hello', (req: Request, res: Response) => {
  res.json('Hello from the Backend!');
});

app.listen(3000, () => {
  console.log('Server running on port 3000');
});