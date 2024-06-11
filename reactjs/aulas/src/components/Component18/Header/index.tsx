import { ContextUser } from '@/contexts/ContextUser';
import { useContext } from 'react';

const Index = () => {
  const username = useContext(ContextUser);

  const handleLoggout = () => {
    username?.setUsername('');
  };

  return (
    <header className="">
      {username?.username && (
        <>
          <h2 className="text-4xl text-center font-bold text-white mb-8">
            Welcome: {username?.username}
          </h2>
          <button
            className="bg-white/10 py-2 px-4 rounded"
            onClick={handleLoggout}
          >
            Log out
          </button>
        </>
      )}

      {!username ||
        (username?.username === '' && (
          <h2 className="text-4xl text-center font-bold text-white mb-8">
            Usuário deslogado
          </h2>
        ))}
    </header>
  );
};

export default Index;
