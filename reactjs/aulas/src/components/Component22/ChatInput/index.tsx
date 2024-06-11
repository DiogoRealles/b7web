import { useChat } from '@/contexts/ChatContext';
import { KeyboardEvent, useState } from 'react';

type Props = {
  name: string;
};

const Index = ({ name }: Props) => {
  const chatCtx = useChat();
  const [textInput, setTextInput] = useState('');

  const handleKeyUpAction = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.code.toLowerCase() == 'enter') {
      if (textInput.trim() !== '') {
        chatCtx?.addMessage(name, textInput.trim());
        setTextInput('');
      }
    }
  };

  return (
    <input
      className="w-full bg-transparent text-white text-md outline-none"
      type="text"
      placeholder={`${name}, digite uma mensagem (e aperte enter)`}
      value={textInput}
      onChange={({ target }) => setTextInput(target.value)}
      onKeyUp={handleKeyUpAction}
    />
  );
};

export default Index;
