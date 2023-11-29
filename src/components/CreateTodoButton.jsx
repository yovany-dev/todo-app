import React from 'react';
import { TodoContext } from './TodoContext/TodoContext';
import iconAdd from '../svg/icon-add.svg';

const CreateTodoButton = () => {
  const {setOpenModal} = React.useContext(TodoContext);

  function btnHandler() {
    const btn = document.querySelector('.btn-add');
    btn.classList.toggle('close');

    setOpenModal(state => !state);
  }

  return (
    <button onClick={btnHandler} className='btn-add'><img src={iconAdd} alt="icon add" /></button>
  )
}

export { CreateTodoButton };