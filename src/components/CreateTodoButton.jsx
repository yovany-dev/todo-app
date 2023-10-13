import iconAdd from '../icon-add.svg';

const CreateTodoButton = () => {
  let count = 1;
  return (
    <button onClick={(e) => console.log(count++)} className='btn-add'><img src={iconAdd} alt="icon add" /></button>
  )
}

export { CreateTodoButton };