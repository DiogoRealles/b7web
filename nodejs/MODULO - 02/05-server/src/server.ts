import { createServer } from 'node:http';

const PORT = process.env.PORT;

const server = createServer((req, res) => {
  res.end('Hello World - NodeJS & Server HTTP!');
});

server.listen(PORT, () => {
  console.log(`Server running at: http://localhost:${PORT}`);
});
