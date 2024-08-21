import express from 'express';
const server = express();
const PORT = process.env.PORT;

server.get('/', (req, res) => {
  const username: string = 'Diogo',
    age: number = 35;
  res.send(`Name: ${username} - Age: ${age} years old`);
});

server.listen(PORT, () => {
  console.log(`Server running at port: http://localhost:${PORT}`);
});
