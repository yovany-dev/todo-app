import React from 'react';
import '../style/form.css';

const TodoForm = () => {
  return (
    <form className='form' onSubmit={e => e.preventDefault()}>
      <h2>Escribe tu <br /> nuevo TODO</h2>
        <textarea placeholder="Desarrollar componentes de React"></textarea>
        <div className="btn-container">
          <button className="btn close">Cancelar</button>
          <button className="btn add">Añadir</button>
        </div>
    </form>
  )
}

export { TodoForm };