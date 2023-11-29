import React from 'react';
import { TodoContext } from './TodoContext/TodoContext';
import '../style/form.css';

const TodoForm = () => {
  const {addTodo, setOpenModal} = React.useContext(TodoContext);
  const [newTodoValue, setNewTodoValue] = React.useState('');

  const onSubmit = e => {
    e.preventDefault();
    addTodo(newTodoValue);
    setOpenModal(false);
  }

  const onCancel = () => {
    const btn = document.querySelector('.btn-add');
    btn.classList.remove('close');
    setOpenModal(false);
  }

  const onChange = e => {
    setNewTodoValue(e.target.value);
  }

  return (
    <form className='form' onSubmit={onSubmit}>
      <h2>Escribe tu <br /> nuevo TODO</h2>
        <textarea value={newTodoValue} onChange={onChange} placeholder="Desarrollar componentes de React"></textarea>
        <div className="btn-container">
          <button type='button' onClick={onCancel} className="btn close">Cancelar</button>
          <button type='submit' className="btn add">Añadir</button>
        </div>
    </form>
  )
}

export { TodoForm };