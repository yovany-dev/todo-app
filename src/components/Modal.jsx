import { createPortal } from "react-dom";
import '../style/modal.css'

const Modal = ({ children }) => {
  return createPortal(
    <div className="modal-container">
      {children}
    </div>,
    document.getElementById('modal')
  )
}

export { Modal };