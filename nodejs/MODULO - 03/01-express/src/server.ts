import express from 'express';
import helmet from 'helmet';
import path from 'path';
import router from './routes';

const server = express();

const PORT = process.env.PORT;

server.use(helmet());
server.use(express.json());
server.use(express.urlencoded({ extended: true }));
server.use(express.static(path.join(__dirname, '../public')));
server.use('/', router);

server.listen(PORT, () => {
  console.log(`Server running at: http://localhost:${PORT}`);
});
