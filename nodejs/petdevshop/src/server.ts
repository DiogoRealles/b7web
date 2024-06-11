import chalk from 'chalk';
import mustache from 'mustache-express';
import path from 'path';
import express, { Request, Response } from 'express';
const server = express();
const port = process.env.PORT;
import mainRoutes from './routes';

server.set('view engine', 'mustache');
server.set('views', path.join(__dirname, 'views'));
server.engine('mustache', mustache());

server.use(express.static(path.join(__dirname, '../public')));

server.use(mainRoutes);

server.use((req: Request, res: Response) => {
  res.status(404).send('404 - Page not found!');
});

server.listen(port, () =>
  console.log(chalk.blue(`Server running at http://localhost:${port}`))
);
