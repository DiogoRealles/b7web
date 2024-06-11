'use client';

import { TodoItem } from '@/types/TodoItem';
import { useState } from 'react';

const Index = () => {
  const [itemInput, setItemInput] = useState<string>('');
  const [list, setList] = useState<TodoItem[]>([
    { id: 1, label: 'Estudar HTML5', checked: true },
    { id: 2, label: 'Práticar HTML5', checked: false },
  ]);

  const handleAddButton = () => {
    if (itemInput.trim() === '') return;

    setList([
      ...list,
      { id: list.length + 1, label: itemInput, checked: false },
    ]);
    setItemInput('');
  };

  const deleteItem = (id: number) => {
    setList(list.filter((item) => item.id !== id));
  };

  const toggleItem = (id: number) => {
    let newList = [...list];

    for (let i in newList) {
      if (newList[i].id == id) {
        newList[i].checked = !newList[i].checked;
      }
    }

    setList(newList);
  };

  return (
    <section className="">
      <header className="text-center py-10">
        <h1 className="text-4xl mb-5">Component 11</h1>
        <p>
          Exercicio pratico de state, componentes, renderização, props, e mais.
        </p>
      </header>

      <div className="grid place-content-center h-screen">
        <div className="flex flex-col gap-5">
          <div className="flex rounded-md">
            <input
              className="flex-1 border border-black p-3 text-black outline-none ring-0"
              type="text"
              placeholder="O que deseja fazer?"
              value={itemInput}
              onChange={({ target }) => setItemInput(target.value)}
            />
            <button
              className="flex-1 py-1 px-3 bg-white/10 hover:bg-white/20 transition-all ease-linear font-semibold text-lg"
              type="button"
              onClick={handleAddButton}
            >
              Add item
            </button>
          </div>

          <ul className="w-full max-w-lg list-disc px-2">
            {list.map((item) => (
              <li className="flex justify-between py-2" key={item.id}>
                <input
                  className="w-6 h-6 mr-3"
                  type="checkbox"
                  checked={item.checked}
                  onChange={() => toggleItem(item.id)}
                />
                {item.label}
                <button
                  className="hover:underline underline-offset-8"
                  onClick={() => deleteItem(item.id)}
                >
                  [Deletar]
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Index;
