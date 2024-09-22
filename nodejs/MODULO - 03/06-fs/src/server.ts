import express from 'express';
import { readFile, unlink, writeFile } from 'fs/promises';

const server = express();
const PORT = process.env.PORT;

const fileName = './file.txt';

// 01 - Criar arquivo
const fileCreate = async () => {
  console.log('Criando arquivo...');

  const file = ['Apple', 'Banana', 'Cherry'];

  const fileTxt = file.join('\n');

  await writeFile(fileName, fileTxt);

  console.log('Arquivo criado!');
};

// fileCreate();

// 02 - Ler arquivo
const fileRead = async () => {
  const fileContent = await readFile(fileName, { encoding: 'utf8' });

  const arrFile = fileContent.split('\n');

  console.log(arrFile);
};

// fileRead();

// 03 - Atualizar arquivo
const fileUpdate = async () => {
  console.log('Abrindo aquivo...');

  const fileContent = await readFile(fileName, {
    encoding: 'utf8',
  });

  const arrFile = fileContent.split('\n');

  arrFile.push('Damasco');

  const arrTxt = arrFile.join('\n');

  await writeFile(fileName, arrTxt);

  console.log(arrFile);
};
// fileUpdate();

// 04 - remover arquivo
const fileDelete = async () => {
  try {
    await unlink(fileName);
    console.log('Arquivo deletado com sucesso!');
  } catch (error) {
    console.log('[ERROR] File not found!');
    return;
  }
};
fileDelete();

server.listen(PORT, () => {
  console.log(`Server running at: http://localhost:${PORT}`);
});
