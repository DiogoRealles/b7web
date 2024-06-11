'use client';

import { ChatProvider } from '@/contexts/ChatContext';
import { UserProvider } from '@/contexts/UserContext';
import Chat from './Chat';

const Index = () => {
  return (
    <section className="">
      <header className="text-center py-10">
        <h1 className="text-4xl mb-5">Component 22</h1>
        <p>Chat simples</p>
      </header>

      <div className="grid place-content-center h-screen">
        <UserProvider>
          <ChatProvider>
            <Chat />
          </ChatProvider>
        </UserProvider>
      </div>
    </section>
  );
};

export default Index;
