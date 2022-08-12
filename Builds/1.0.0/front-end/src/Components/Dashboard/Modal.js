import './Modal.css';
import './FeedbackProduct'
import FeedbackProduct from './FeedbackProduct';

const Modal = props => {
  if (!props.show) {
    return null;
  }

  return (
    <div className="modal" onClick={props.onClose}>
      <div className="modal-content" onClick={e => e.stopPropagation()}>
        <FeedbackProduct/>
        <div onClick={props.onClose} class="h-14 pt-4 flex items-center justify-center">
          <a class="text-gray-600 hover:text-primary">Close</a>
        </div>
      </div>
    </div>
  );
};

export default Modal;