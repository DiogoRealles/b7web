import { useChat } from '@/contexts/ChatContext';
import { useUser } from '@/contexts/UserContext';

const Index = () => {
  const chatCtx = useChat();
  const userCtx = useUser();

  return (
    <div className="flex flex-col">
      {chatCtx?.chat.map((item) => (
        <div
          className={`border border-white/30 rounded-md p-2 text-sm my-2 ${
            item.user === userCtx?.user
              ? 'self-end bg-white/10 text-right'
              : 'self-start bg-white/5 text-left'
          }`}
          key={item.id}
        >
          <div className="font-bold">{item.user}</div>
          <p className="">{item.text}</p>
        </div>
      ))}
    </div>
  );
};

export default Index;
