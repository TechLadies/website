import { useEffect } from 'react';
import clsx from 'clsx';

const ID = 'modal-react-component';

let $modalBackDrop = null;

// Only one modal should be shown on the page at any one time.
function Modal({ children, isShown, onClose }) {
  useEffect(() => {
    if (isShown) {
      document.body.classList.add('modal-open');
      $modalBackDrop = document.createElement('div');
      $modalBackDrop.className = 'modal-backdrop fade show';
      document.body.appendChild($modalBackDrop);
    } else {
      document.body.classList.remove('modal-open');
      $modalBackDrop && $modalBackDrop.parentNode.removeChild($modalBackDrop);
    }
  }, [isShown]);

  return (
    <div
      className={clsx('modal', {
        show: isShown,
      })}
      tabIndex="-1"
      style={{
        display: isShown ? 'block' : 'none',
      }}
    >
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-header">
            <button
              aria-label="Close"
              className="close"
              onClick={onClose}
              type="button"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body">{children}</div>
        </div>
      </div>
    </div>
  );
}

export default Modal;
