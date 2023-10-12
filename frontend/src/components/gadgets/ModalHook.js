import React, {
  useState,
  useImperativeHandle,
  forwardRef,
  useEffect,
  useCallback,
} from 'react';
import { createPortal } from 'react-dom';

// Bootstrap Components
import Row from 'react-bootstrap/Row';

// Components
import Icon from '../gadgets/Icon';

const modalElement = document.getElementById('modal-root');

export function ModalHook({ children, defaultOpened = false }, ref) {
  const [isOpen, setIsOpen] = useState(defaultOpened);

  const close = useCallback(() => setIsOpen(false), []);

  // Función que se ejecuta en el elemento padre para abrir el modal.
  useImperativeHandle(
    ref,
    () => ({
      open: () => setIsOpen(true),
      close,
    }),
    [close]
  );

  // Función para cerrar el modal al clickar ESC.
  const handleEscape = useCallback(
    (event) => {
      if (event.keyCode === 27) close();
    },
    [close]
  );

  useEffect(() => {
    if (isOpen) document.addEventListener('keydown', handleEscape, false);
    return () => {
      document.removeEventListener('keydown', handleEscape, false);
    };
  }, [handleEscape, isOpen]);

  return createPortal(
    isOpen ? (
      <div className={`modalhook modalhook-fade`}>
        <div className="modalhook-body">
          <Row className="modalhook-header m-0 p-0" onClick={close}>
            <Icon icon="bi bi-x modalhook-close p-0" />
          </Row>
          <Row className="m-0">{children}</Row>
        </div>
      </div>
    ) : null,
    modalElement
  );
}

export default forwardRef(ModalHook);
