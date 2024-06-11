'use client';

import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

import { usePosts } from '@/hooks/usePosts';
import { useState } from 'react';

const PostsList = () => {
  const limit = 3;
  const [page, setPage] = useState(0);

  const [canLoadPosts, setCanLoadPosts] = useState(false);

  const handleLoadPosts = () => {
    setCanLoadPosts(true);
  };

  const handlePrev = () => {
    setPage(page === 0 ? 0 : page - 1);
  };

  const handleNext = () => {
    setPage(page + 1);
  };

  const posts = usePosts(limit, page * limit, canLoadPosts);

  return (
    <div>
      {!canLoadPosts && (
        <button
          className="bg-white/10 rounded py-3 px-4 text-center text-white"
          onClick={handleLoadPosts}
        >
          Load posts
        </button>
      )}

      {canLoadPosts && (
        <div className="flex items-center gap-4 my-10">
          <button
            className="bg-white/10 rounded py-2 px-3 text-center text-white"
            onClick={handlePrev}
          >
            <FaArrowLeft size={24} />
          </button>

          {page}
          <button
            className="bg-white/10 rounded py-2 px-3 text-center text-white"
            onClick={handleNext}
          >
            <FaArrowRight size={24} />
          </button>
        </div>
      )}

      {posts.isLoading && posts.isFetching && 'Loading...'}

      {posts.data && (
        <ul className="flex gap-4 flex-wrap mt-10">
          {posts.data.map(({ id, title }) => (
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
      )}
    </div>
  );
};

export default PostsList;
