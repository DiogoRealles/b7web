import { ReactNode, createContext, useState } from 'react';

type CountContextType = {
  countOnline: number;
  setCountOnline: (n: number) => void;
};

export const ContextCount = createContext<CountContextType | null>(null);

type Props = {
  children: ReactNode;
};

export const ContextCountProvider = ({ children }: Props) => {
  const [countOnline, setCountOnline] = useState(92);

  return (
    <ContextCount.Provider value={{ countOnline, setCountOnline }}>
      {children}
    </ContextCount.Provider>
  );
};
