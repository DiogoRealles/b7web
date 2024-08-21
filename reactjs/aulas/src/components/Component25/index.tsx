'use client';

import { useEffect, useState } from 'react';

type Post = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

const Index = () => {
  const [posts, setPosts] = useState<Post[]>([]);

  const fetchPosts = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts');
    const json = await res.json();

    setPosts(json);
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  const handleAddNewPost = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        title: 'Title example',
        body: 'Body example',
        userId: 99,
      }),
    });
    const json = await res.json();

    console.log(json);
  };

  return (
    <section className="">
      <header className="text-center py-10">
        <h1 className="text-4xl mb-5">Component 25</h1>
        <p>HTTP GET & POST: (ASYNC / AWAIT)</p>
      </header>

      <button
        className="bg-white/10 py-3 px-4 text-center rounded text-white mb-10"
        onClick={handleAddNewPost}
      >
        Add new post
      </button>
      <div className="flex place-content-center h-screen">
        <ul className="flex gap-4 flex-wrap">
          {posts.map(({ userId, id, title, body }) => (
            <li
              className="group w-full max-w-60 rounded-md bg-white/10 p-4 border border-white/10 hover:border-white/20 cursor-pointer hover:border"
              key={id}
            >
              <a
                href={`posts/${id}`}
                className="text-white text-xl font-bold md-4 transition-all ease-linear "
              >
                {title}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Index;
