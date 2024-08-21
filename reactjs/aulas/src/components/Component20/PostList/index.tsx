import { usePosts } from '@/contexts/ContextPost';

const Index = () => {
  const postCtx = usePosts();

  const handleRemoveButton = (id: number) => {
    postCtx?.dispatch({ type: 'remove', payload: { id } });
    // postCtx?.removePost(id);
  };

  return (
    <div>
      {postCtx?.posts.map((item) => (
        <div className="p-3 border-b border-gray-500" key={item.id}>
          <div className="text-xl font-bold mb-2">{item.title}</div>
          <div className="text-sm">{item.body}</div>
          <button
            className="p-2 bg-white/10 rounded"
            onClick={() => handleRemoveButton(item.id)}
          >
            Remove
          </button>
        </div>
      ))}
    </div>
  );
};

export default Index;
