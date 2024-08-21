'use client';

import { useRef, useState } from 'react';
import { MdOutlineDriveFolderUpload } from 'react-icons/md';

const Index = () => {
  const [legendInput, setLegendInput] = useState('');
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileSend = async () => {
    if (fileInputRef.current?.files && fileInputRef.current.files.length > 0) {
      const fileItem = fileInputRef.current.files[0];
      const allowed = ['image/jpg', 'image/jpeg', 'image/png'];

      if (allowed.includes(fileItem.type)) {
        const data = new FormData();
        data.append('image', fileItem);
        data.append('legend', legendInput);

        const res = await fetch('https://jsonplaceholder.typicode.com/posts', {
          method: 'POST',
          headers: {
            'Content-Type': 'multipart/form',
          },
          body: data,
        });

        const json = await res.json();
        console.log(json);
      } else {
        alert('File type incompatible!');
      }
    } else {
      alert('Select a file!');
    }
  };

  return (
    <section className="">
      <header className="text-center py-10">
        <h1 className="text-4xl mb-5">Component 26</h1>
        <p>States</p>
      </header>

      <div className="grid place-content-center h-screen">
        <div className="flex justify-center items-center gap-4 bg-white/10 py-3 px-4 rounded-lg text-white">
          <MdOutlineDriveFolderUpload size={40} color="#fff" fill="#fff" />
          <input
            className="bg-transparent"
            type="file"
            name=""
            id=""
            ref={fileInputRef}
          />
          <input
            className="py-2 px-3 rounded text-black placeholder:text-sm"
            type="text"
            name=""
            id=""
            placeholder="Digite uma legenda para imagem"
            value={legendInput}
            onChange={({ target }) => setLegendInput(target.value)}
          />
          <button
            className="bg-white/10 py-2 px-4 rounded text-white border-2 border-white/0"
            onClick={handleFileSend}
          >
            Submit
          </button>
        </div>
      </div>
    </section>
  );
};

export default Index;
