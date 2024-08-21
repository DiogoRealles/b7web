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

server.get('/', (req, res) => {
  res.send('Hello World - HOME');
});

server.listen(PORT, () => {
  console.log(`Server running at port: http://localhost:${PORT}`);
});
