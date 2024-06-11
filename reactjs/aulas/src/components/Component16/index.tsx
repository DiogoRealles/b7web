'use client';

import { listReducer } from '@/reducers/listReducer';
import { useReducer, useState } from 'react';

const Index = () => {
  const [list, dispatch] = useReducer(listReducer, []);
  const [addField, setAddField] = useState('');

  const handleAddButton = () => {
    if (addField.trim() === '') return false;

    dispatch({
      type: 'ADD',
      payload: {
        label: addField.trim(),
      },
    });

    setAddField('');
  };

  const handleCheckedCheckbox = (id: number) => {
    dispatch({
      type: 'TOGGLECHECKED',
      payload: { id },
    });
  };

  const handleEdit = (id: number) => {
    const newItem = list.find((item) => item.id === id);
    if (!newItem) return false;

    const newLabel = window.prompt('Editar tarefa', newItem.label);
    if (!newLabel || newLabel.trim() === '') return false;

    dispatch({
      type: 'EDITLABEL',
      payload: { id, newLabel },
    });
  };

  const handleRemove = (id: number) => {
    if (!window.confirm('Tem certeza que deseja exlcuir?')) return false;

    dispatch({
      type: 'REMOVE',
      payload: { id },
    });
  };

  return (
    <section className="">
      <header className="text-center py-10">
        <h1 className="text-4xl mb-5">Component 16</h1>
        <p>Lista de Tarefas</p>
      </header>

      <div className="grid place-content-center h-screen">
        <div className="w-full mx-auto flex rounded-md bg-white/10 border border-gray-400 p-3 gap-4 mb-8">
          <input
            className="flex-1 rounded border border-white p-3 bg-transparent text-white outline-none"
            type="text"
            placeholder="Digite uma task"
            value={addField}
            onChange={({ target }) => setAddField(target.value)}
          />

          <button className="p4" onClick={handleAddButton}>
            Addicionar
          </button>
        </div>

        <ul className="w-full mx-auto">
          {list.map((item) => (
            <li
              className="w-full flex items-center p-3 border-b border-gray-700"
              key={item.id}
            >
              <label className="flex items-center cursor-pointer">
                <input
                  className="w-4 h-4 mr-4"
                  type="checkbox"
                  defaultChecked={item.checked}
                  onClick={() => handleCheckedCheckbox(item.id)}
                />
                <p className="flex-1 w-full text-lg">{item.label}</p>
              </label>
              <button
                className="p-2 mx-4 text-white hover:text-gray-500"
                onClick={() => handleEdit(item.id)}
              >
                Editar
              </button>
              <button
                className="p-2 mx-4 text-white hover:text-gray-500"
                onClick={() => handleRemove(item.id)}
              >
                Remover
              </button>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Index;
