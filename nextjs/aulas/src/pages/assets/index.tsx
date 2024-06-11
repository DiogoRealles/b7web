import Image from 'next/image';
import React from 'react';

const Index = () => {
  const img01 = '/img-01.jpg';

  return (
    <div>
      <h1>Assets</h1>

      <div className="">
        <Image src={img01} alt="" width={200} height={200} />
      </div>
    </div>
  );
};

export default Index;
