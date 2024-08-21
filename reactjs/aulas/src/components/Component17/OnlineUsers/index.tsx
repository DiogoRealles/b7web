import { ContextCount } from '@/contexts/ContextCount';
import React, { useContext } from 'react';

const Index = () => {
  const contextcounter = useContext(ContextCount);

  const handleBannAll = () => {
    contextcounter?.setCountOnline(0);
  };

  return (
    <div className="flex flex-col gap-4 items-center">
      <h1>Online: {contextcounter?.countOnline}</h1>
      <button
        className="bg-white/10 py-2 px-4 text-center rounded"
        onClick={handleBannAll}
      >
        Bannir todos
      </button>
    </div>
  );
};

export default Index;
