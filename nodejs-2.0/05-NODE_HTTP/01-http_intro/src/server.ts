import { createServer } from 'node:http';
const PORT = process.env.PORT;

const server = createServer((req, res) => {
  const username: string = 'Diogo',
    age: number = 35;

  res.end(`Name: ${username} - Age: ${age} years old`);
});

server.listen(PORT, () => {
  console.log(`Server running at port:http://localhost:${PORT}`);
});
