// COR MODULE PARA ESCREVER EM ARQUIVOS DE FORMA ASYNCRONA
import { readFile, unlink, writeFile } from 'fs/promises';

const fileName = './arquivo_lista';

// CRIANDO E ESCREVENDO ARQUIVO
const fnWrite = async () => {
  console.log('ESCREVENDO ARQUIVO');

  const listArr = ['Amanda', 'Barbara', 'Camila'];
  const listTxt = listArr.join('\n');

  await writeFile(fileName, listTxt);

  console.log('ARQUIVO FINALIZADO!');
};

fnWrite();

// LENDO ARQUIVO
const fnRead = async () => {
  const fileContent = await readFile(fileName, { encoding: 'utf8' });

  console.log('\nLENDO ARQUIVO...');

  const listArr = fileContent.split('\n');

  console.log(listArr);
};

fnRead();

// ATUALIZANDO ARQUIVO
const fnUpdate = async () => {
  const fileContent = await readFile(fileName, { encoding: 'utf8' });

  setTimeout(() => {
    console.log('\nATUALIZANDO ARQUIVO...');
    console.log(`adicionando: ${nameNew}`);

    console.log(listNew);
  }, 1000);

  const listArr = fileContent.split('\n');
  const nameNew = 'Daniela';
  listArr.push(nameNew);

  const listNew = listArr.join('\n');

  await writeFile(fileName, listNew);
};

fnUpdate();

// DELETANDO ARQUIVO
const fnDelete = async () => {
  setTimeout(() => {
    console.log('\nDELETANDO ARQUIVO...');
  }, 1300);

  await unlink(fileName);
};

fnDelete();
