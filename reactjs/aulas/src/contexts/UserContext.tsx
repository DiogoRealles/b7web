import { ReactNode, createContext, useContext, useState } from 'react';

type UserContext = {
  user: string;
  setUser: (newUser: string) => void;
};

export const UserContext = createContext<UserContext | null>(null);

type Props = {
  children: ReactNode;
};

export const UserProvider = ({ children }: Props) => {
  const [user, setUser] = useState('');

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => useContext(UserContext);
