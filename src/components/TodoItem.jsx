import { CompleteIcon } from './CompleteIcon';
import { DeleteIcon } from './DeleteIcon';

const TodoItem = ({ text, completed, onComplete, onDelete }) => {
  return (
    <li className={`${completed && "completed"}`}>
      <CompleteIcon onComplete={onComplete} completed={completed} />
      <p className={`${completed && 'completed'}`}>{text}</p>
      <DeleteIcon onDelete={onDelete} />
    </li>
  )
}

export { TodoItem };