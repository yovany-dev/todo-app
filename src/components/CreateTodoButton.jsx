import React from 'react';
import { TodoContext } from './TodoContext/TodoContext';
import iconAdd from '../svg/icon-add.svg';

const CreateTodoButton = () => {
  const {setOpenModal} = React.useContext(TodoContext);
  return (
    <button onClick={() => setOpenModal(state => !state)} className='btn-add'><img src={iconAdd} alt="icon add" /></button>
  )
}

export { CreateTodoButton };