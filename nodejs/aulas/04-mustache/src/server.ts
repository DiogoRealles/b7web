import express, { Request, Response, urlencoded } from 'express';
import path from 'path';
import mustache from 'mustache-express';
// import dotenv from 'dotenv';
// const port = 3333;

// dotenv.config();
const server = express();

server.set('view engine', 'mustache');
server.set('views', path.join(__dirname, '../src/views'));
server.engine('mustache', mustache());

server.use(express.static(path.join(__dirname, '../public')));

server.use(express.urlencoded({ extended: true }));

import mainRouter from './routes';

server.use('/', mainRouter);

server.use((req: Request, res: Response) => {
  res.status(404).send('404 - Page not found');
});

server.listen(process.env.PORT, () =>
  console.log(`Server running at port: ${process.env.PORT}`)
);
