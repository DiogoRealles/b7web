import express from 'express';
import helmet from 'helmet';
import path from 'path';

const server = express();

const PORT = process.env.PORT;

server.use(helmet());

server.use(express.json());

server.use(
  express.urlencoded({
    extended: true,
  })
);

server.use(express.static(path.join(__dirname, '../public')));

server.get('/ping', (req, res) => {
  res.json({ pong: true });
});

server.get('/', (req, res) => {
  const username: string = 'Diogo',
    age: number = 35;

  res.json({ username, age });
});

server.listen(PORT, () => {
  console.log(`Server running at port: http://localhost:${PORT}`);
});
