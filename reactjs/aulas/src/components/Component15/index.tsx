'use client';

import { useState } from 'react';
import VideoPlayer from './VideoPlayer';

const Index = () => {
  const [playing, setPlaying] = useState(false);

  return (
    <section className="">
      <header className="text-center py-10">
        <h1 className="text-4xl mb-5">Component 15</h1>
        <p>Eventos Click</p>
      </header>

      <div className="grid place-content-center h-screen">
        <div className="w-full h-screen flex flex-col justify-center items-center text-white">
          <p className="text-2xl text-blue-400 mb-3">
            {playing ? 'RODANDO' : 'PAUSADO'}
          </p>
          <button
            className="mb-10 bg-white/10 text-white rounded-md p-3"
            onClick={() => setPlaying(!playing)}
          >
            Play / Pause
          </button>
          <VideoPlayer
            src="https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4"
            isPlaying={playing}
          />
        </div>
      </div>
    </section>
  );
};

export default Index;
