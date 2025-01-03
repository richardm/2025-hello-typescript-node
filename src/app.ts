import express, { Request, Response } from 'express';
const app = express();

app.get('/', (req: Request, res: Response) => {
  res.send('Hello World!');
});

app.get('/healthcheck', (req: Request, res: Response) => {
  res.send('OK');
});

export default app;
