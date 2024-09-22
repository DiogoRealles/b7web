import { readFile, writeFile } from 'fs/promises';

const contactsData = './data/contacts.txt';

let list: string[] = [];

export const getContacts = async () => {
  try {
    const data = await readFile(contactsData, { encoding: 'utf8' });

    list = data.split('\n');
  } catch (error) {}

  return list;
};

export const createContact = async (name: string) => {
  list = await getContacts();

  list.push(name);

  await writeFile(contactsData, list.join('\n'));
};

export const deleteContact = async (name: string) => {
  list = await getContacts();

  list = list.filter((item) => item.toLowerCase() !== name.toLowerCase());

  await writeFile(contactsData, list.join('\n'));
};
