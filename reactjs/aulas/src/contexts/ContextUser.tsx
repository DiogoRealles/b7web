import { ReactNode, createContext, useState } from 'react';

type UsernameType = {
  username: string;
  setUsername: (name: string) => void;
};

export const ContextUser = createContext<UsernameType | null>(null);

type Props = {
  children: ReactNode;
};

export const UserProvider = ({ children }: Props) => {
  const [username, setUsername] = useState('Amanda');

  return (
    <ContextUser.Provider value={{ username, setUsername }}>
      {children}
    </ContextUser.Provider>
  );
};
