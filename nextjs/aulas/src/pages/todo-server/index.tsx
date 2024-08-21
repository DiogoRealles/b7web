import '@/styles/globals.css';
import { Todo } from '@/types/Todo';

type Props = {
  todo: Todo[];
};

const Index = ({ todo }: Props) => {
  return (
    <div>
      <h1>Todo</h1>

      <ul>
        {todo.map((todo) => (
          <li key={todo.id}>
            {todo.title} -
            <span className={todo.completed.toString()}>
              [{todo.completed.toString()}]
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Index;

export const getServerSideProps = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/todos');
  const todoList: Todo[] = await res.json();

  return {
    props: {
      todo: todoList,
    },
  };
};
