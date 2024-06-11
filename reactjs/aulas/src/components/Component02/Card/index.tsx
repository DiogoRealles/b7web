import { ReactNode } from 'react';

type Props = {
  children: ReactNode;
};

const Index = ({ children }: Props) => {
  return (
    <div className="card flex items-center justify-center py-2 px-4 border border-green-950 rounded-lg w-full bg-green-100">
      {children}
    </div>
  );
};

export default Index;
