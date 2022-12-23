import React, { FC } from 'react';
import classes from './Modal.module.css'

interface ModalProps {
  children?: React.ReactNode;
  visible: boolean;
  setVisible: React.Dispatch<React.SetStateAction<boolean>>
}

const Modal: FC<ModalProps> = ({children, visible, setVisible}) => {
  const rootClasses = [classes.modal];
  if (visible) {
    rootClasses.push(classes.active);
  }
  return (
    <div className={rootClasses.join(' ')} onClick={() => setVisible(false)}>
      <div className={classes.modalContent} onClick={(e) => e.stopPropagation()}>
        {children}
      </div>
    </div>
  );
};

export default Modal;