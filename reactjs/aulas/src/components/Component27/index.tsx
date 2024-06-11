'use client';

import { api } from '@/utils/api';
import { useRef } from 'react';
import { MdOutlineDriveFolderUpload } from 'react-icons/md';

const Index = () => {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const controller = new AbortController();

  const handleGetComments = async () => {
    const requestParams = {
      postId: 1,
      sort: 'desc',
    };

    const response = await api.get('/comments', {
      params: requestParams,
    });

    console.log(response.data);
  };

  const handleAddPost = async () => {
    const res = await api.post('/posts', {
      userId: 98,
      title: 'Title Example',
      body: 'Text example...',
    });

    console.log(res);
  };

  const handleFileSend = async () => {
    if (fileInputRef.current?.files && fileInputRef.current.files.length > 0) {
      const file = fileInputRef.current.files[0];

      const data = new FormData();
      data.append('name', 'Arquivo qualquer');
      data.append('file', file);

      const res = await api.post('/posts', data);
      console.log(res.data);
    }
  };

  const handleStartReq = async () => {
    try {
      const res = await api.get('/posts', {
        signal: controller.signal,
      });
    } catch (error) {
      alert('[ERROR] Try later');
    }
  };

  const handleCancerReq = async () => {
    controller.abort();
  };

  return (
    <section className="">
      <header className="text-center py-10">
        <h1 className="text-4xl mb-5">Component 27</h1>
        <p>
          Axios: É uma lib JS para requisições. <br />
        </p>
      </header>

      <div className="grid place-content-center h-screen">
        <div className="flex gap-8">
          <button
            className="bg-white/10 rounded py-3 px-4 text-center text-white"
            onClick={handleGetComments}
          >
            Get Comments
          </button>

          <button
            className="bg-white/10 rounded py-3 px-4 text-center text-white"
            onClick={handleAddPost}
          >
            Add Posts
          </button>

          <button
            className="bg-white/10 py-2 px-4 rounded text-white border-2 border-white/0"
            onClick={handleStartReq}
          >
            Start request
          </button>

          <button
            className="bg-white/10 py-2 px-4 rounded text-white border-2 border-white/0"
            onClick={handleCancerReq}
          >
            Cancel request
          </button>
        </div>

        <div className="flex justify-center items-center gap-4 bg-white/10 py-3 px-4 rounded-lg text-white">
          <MdOutlineDriveFolderUpload size={40} color="#fff" fill="#fff" />
          <input
            className="bg-transparent"
            type="file"
            name=""
            id=""
            ref={fileInputRef}
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
