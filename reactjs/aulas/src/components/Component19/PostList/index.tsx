import { ContextPost } from '@/contexts/ContextPost';
import { useContext } from 'react';

const Index = () => {
  const postCtx = useContext(ContextPost);

  // const handleRemoveButton = (id: number) => {
  //   postCtx?.removePost(id);
  // };

  const handleRemoveButton = (id: number) => {
    postCtx?.dispatch({
      type: 'remove',
      payload: { id },
    });
  };

  return (
    <div>
      {postCtx?.posts.map((item) => (
        <div className="p-3 border-b border-gray-500" key={item.id}>
          <div className="text-xl font-bold mb-2">{item.title}</div>
          <div className="text-sm">{item.body}</div>
          <button className="" onClick={() => handleRemoveButton(item.id)}>
            [Remove]
          </button>
        </div>
      ))}
    </div>
  );
};

export default Index;
