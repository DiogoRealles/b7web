import '@/styles/globals.css';
import { Todo } from '@/types/Todo';
import { useEffect, useState } from 'react';

type Props = {
  todo: Todo[];
};

const Index = ({ todo }: Props) => {
  const [todoList, setTodoList] = useState<Todo[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    loadTodo();
  }, []);

  const loadTodo = async () => {
    setLoading(true);
    const res = await fetch('https://jsonplaceholder.typicode.com/todos');
    const list: Todo[] = await res.json();
    setTodoList(list);
    setLoading(false);
  };

  return (
    <div>
      <h1>Todo</h1>

      {loading && <p>loading...</p>}

      {!loading && (
        <ul>
          {todoList.map((todo) => (
            <li key={todo.id}>
              {todo.title} -
              <span className={todo.completed.toString()}>
                [{todo.completed.toString()}]
              </span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Index;
