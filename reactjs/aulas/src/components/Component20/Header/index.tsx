import { usePosts } from '@/contexts/ContextPost';
import { useState } from 'react';

const Index = () => {
  const postCtx = usePosts();

  const [titleInput, setTitleInput] = useState('');
  const [bodyInput, setBodyInput] = useState('');

  const handleAddButton = () => {
    if (titleInput && bodyInput) {
      postCtx?.dispatch({
        type: 'add',
        payload: {
          title: titleInput,
          body: bodyInput,
        },
      });
      // postCtx?.addPosts(titleInput, bodyInput);

      setTitleInput('');
      setBodyInput('');
    }
  };

  return (
    <header className="">
      <h1 className="text-3xl">Titulo da página</h1>

      <div className="max-w-xl flex flex-col gap-3 border border-dotted border-gray-400 my-4">
        <input
          type="text"
          className="border-border-gray-300 py-2 text-black text-xl"
          placeholder="Digite um título"
          value={titleInput}
          onChange={({ target }) => setTitleInput(target.value)}
        />
        <textarea
          className="h-24 border border-r-gray-300 p-2 text-black text-xl"
          placeholder="Digite um texto"
          value={bodyInput}
          onChange={({ target }) => setBodyInput(target.value)}
        ></textarea>
        <button
          className="bg-blue-500 p-3 text-white rounded-e-md"
          onClick={handleAddButton}
        >
          Adicionar
        </button>
      </div>
    </header>
  );
};

export default Index;
