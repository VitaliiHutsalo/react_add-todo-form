import { UserInfo } from '../UserInfo';

interface User {
  name: string;
  email: string;
}

interface Props {
  todo: {
    id: number;
    title: string;
    completed: boolean;
    user: User | null | undefined;
  };
}

export const TodoInfo: React.FC<Props> = ({ todo }) => {
  return (
    <article
      data-id={todo.id}
      className={`TodoInfo ${todo.completed ? 'TodoInfo--completed' : ''}`}
    >
      <h2 className="TodoInfo__title">{todo.title}</h2>
      {todo.user ? <UserInfo user={todo.user} /> : <p>No user available</p>}
    </article>
  );
};
