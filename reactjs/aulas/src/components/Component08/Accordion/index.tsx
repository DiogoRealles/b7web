'use client';

import { FaChevronDown, FaChevronUp } from 'react-icons/fa';
import { useState } from 'react';

const Index = () => {
  const [accordion, setAccordion] = useState<boolean>(false);

  const handleClickButton = () => {
    setAccordion(!accordion);
  };

  return (
    <div className="w-[600px] flex flex-col gap-5">
      <button
        className="py-2 px-5 rounded-md bg-white/20 hover:bg-white/10 transition-all ease-linear font-semibold text-lg w-full flex justify-between items-center"
        type="submit"
        onClick={handleClickButton}
      >
        Lorem ipsum dolor sit amet?
        {accordion && <FaChevronUp />}
        {!accordion && <FaChevronDown />}
      </button>
      {accordion && (
        <div className="text-white/60 px-5">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. eveniet animi
          consequuntur id blanditiis atque dolorem veritatis ab tenetur
          repudiandae.
        </div>
      )}
    </div>
  );
};

export default Index;
