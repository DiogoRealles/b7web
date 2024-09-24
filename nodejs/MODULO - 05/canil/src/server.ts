import express from 'express';
import routes from './routes/';
import path from 'path';
import mustache from 'mustache-express';

const PORT = process.env.PORT;

const server = express();
server.set('view engine', 'mustache');
server.engine('mustache', mustache());
server.use(express.static(path.join(__dirname, '../public')));
server.set('views', path.join(__dirname, 'views'));

server.use(express.json());
server.use(express.urlencoded({ extended: true }));

server.use('/', routes);
server.use((req, res) => {
  res.status(404).render('pages/404');
});

server.listen(PORT, () => {
  console.log(`Server running at: http://localhost:${PORT}`);
});
