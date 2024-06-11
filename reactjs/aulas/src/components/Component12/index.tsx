'use client';

import { photoList } from '@/data/photoList';
import PhotoItem from './PhotoItem';
import { useState } from 'react';
import Modal from './Modal';

const Index = () => {
  const [showModal, setShowModal] = useState(false);
  const [imageOfModal, setImageOfModal] = useState('');

  const openModal = (id: number) => {
    const photo = photoList.find((item) => item.id === id);

    if (photo) {
      setImageOfModal(photo.img_url);
      setShowModal(true);
    }
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <div className="container mx-auto">
      <h1>Component 14</h1>
      <p className="mb-10">
        Exercicio pratico de state, componentes, renderização, props,
        condicional e mais
      </p>

      <div className="w-full max-w-5xl mx-auto h-screen flex-col justify-center items-center text-white grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {photoList.map((item) => (
          <PhotoItem
            key={item.id}
            photo={item}
            onClick={() => openModal(item.id)}
          />
        ))}
      </div>

      {showModal && <Modal image={imageOfModal} closeModal={closeModal} />}
    </div>
  );
};

export default Index;
