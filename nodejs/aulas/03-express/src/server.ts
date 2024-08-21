import express, { Request, Response } from 'express';
const server = express();
import path from 'path';
const port = 3333;

server.use(express.static(path.join(__dirname, '../public')));

import mainRouter from './routes';

server.use('/', mainRouter);

server.use((req: Request, res: Response) => {
  res.status(404).send('404 - Page not found');
});

server.listen(port, () => console.log(`Server running at port: ${port}`));
