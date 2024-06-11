'use client';

import { useState } from 'react';

const Index = () => {
  const [count, setCount] = useState<number>(0);

  const handleClickPlus = () => {
    setCount((count) => count + 1);
  };

  const handleClickMinus = () => {
    setCount((count) => count - 1);
  };

  return (
    <div className="flex bg-white/20 rounded-full border border-white/20 overflow-hidden">
      <button
        className="px-8 text-center hover:bg-white transition-all ease-linear hover:text-black text-3xl"
        onClick={handleClickMinus}
      >
        &minus;
      </button>

      <span className="p-2 bg-white text-black border border-black w-20 h-20 flex justify-center items-center text-center rounded-full text-4xl">
        {count}
      </span>

      <button
        className="px-8 text-center hover:bg-white transition-all ease-linear hover:text-black text-3xl"
        onClick={handleClickPlus}
      >
        &#x2b;
      </button>
    </div>
  );
};

export default Index;
