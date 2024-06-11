import React, { useContext } from 'react';
import OnlineUsers from '../OnlineUsers';
import { ContextCount } from '@/contexts/ContextCount';

const Index = () => {
  const contextCounter = useContext(ContextCount);
  return (
    <header>
      <div className="">
        <h1 className="text-center text-4xl font-bold mb-20">
          Title page ({contextCounter?.countOnline})
        </h1>
        <OnlineUsers />
      </div>
    </header>
  );
};

export default Index;
