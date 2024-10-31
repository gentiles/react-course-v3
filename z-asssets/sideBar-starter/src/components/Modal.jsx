import {FaTimes} from 'react-icons/fa'
import { useGlobalContex } from '../context'

const Modal = () => {
  const {isModal, closeModal} = useGlobalContex()


  return (
    <div className={!isModal ? "modal-overlay show-modal" : "modal-overlay" } >
      <div className="modal-container ">
        <h3>Modal</h3> 
        <button className='close-modal-btn' onClick={closeModal}>
          <FaTimes />
        </button>
      </div>

      </div>
  )
}

export default Modal