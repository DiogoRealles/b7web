'use client';

import { useState } from 'react';
import Button from '../Button';

const Index = () => {
  const [counter, setCounter] = useState<number>(0);

  const handleClickMinus = () => {
    setCounter((counter) => counter - 1);
  };

  const handleClickPlus = () => {
    setCounter((counter) => counter + 1);
  };

  return (
    <div className="card w-full max-w-72  rounded-md p-4 bg-white/20 shadow-md flex flex-col gap-5">
      <div className="card-header h-60 bg-gradient-to-r from-sky-500 to-indigo-500 flex justify-center items-center rounded text-8xl">
        {counter}
      </div>
      <div className="conters flex items-center justify-center gap-8">
        <Button label="&minus;" onClick={handleClickMinus} />
        <Button label="&#x2b;" onClick={handleClickPlus} />
      </div>
    </div>
  );
};

export default Index;
