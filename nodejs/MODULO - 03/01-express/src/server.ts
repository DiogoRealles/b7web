// 01 - express
import express from 'express';
import helmet from 'helmet';
import path from 'path';

// 02 - routes
import router from './routes';

// 03 - erros
import { errorHandler, notFoundRequest } from './routes/errorhandler';

const server = express();
const PORT = process.env.PORT;

server.use(helmet());
server.use(express.json());
server.use(express.urlencoded({ extended: true }));
server.use(express.static(path.join(__dirname, '../public')));

// 02 - routes
server.use('/', router);

// 03 - erros
server.use(notFoundRequest);
server.use(errorHandler);

server.listen(PORT, () => {
  console.log(`Server running at: http://localhost:${PORT}`);
});
