import express, { urlencoded } from 'express';
import helmet from 'helmet';
import router from './routes';

const server = express();

const PORT = process.env.PORT;

server.use(helmet());
server.use(express.json());
server.use(urlencoded({ extended: true }));
server.use('/', router);

server.listen(PORT, () => {
  console.log(`Server running at: http://localhost:${PORT}`);
});
