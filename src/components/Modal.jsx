const Modal = () => {
  return (
    <div className="modal-container">
      <div className="modal">
        <h2>Escribe tu <br /> nuevo TODO</h2>
        <textarea placeholder="Desarrollar componentes de React"></textarea>
        <div className="btn-container">
          <button className="btn close">Cancelar</button>
          <button className="btn add">Añadir</button>
        </div>
      </div>
    </div>
  )
}

export { Modal };