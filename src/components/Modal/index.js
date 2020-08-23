import { useEffect } from 'react';
import clsx from 'clsx';

const ID = 'modal-react-component';

function Modal({ children, isShown, onClose }) {
  useEffect(() => {
    if (isShown) {
      document.body.classList.add('modal-open');
      const $divEl = document.createElement('div');
      $divEl.className = 'modal-backdrop fade show';
      $divEl.id = ID;
      document.body.appendChild($divEl);
    } else {
      document.body.classList.remove('modal-open');
      const $el = document.getElementById(ID);
      $el && $el.parentNode.removeChild($el);
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
