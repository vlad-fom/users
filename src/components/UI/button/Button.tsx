import React, { FC } from 'react';
import classes from './Button.module.css';

interface MyButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  title?: string;
  styles?: string[];
  children: React.ReactNode;
  // [x: string]: React.ReactNode | ((e: MouseEvent) => void) | React.RefObject<HTMLInputElement> | void;
}

const Button: FC<MyButtonProps> = ({ children, styles, ...props }) => {
  let style: string[] = [];
  style.push(classes.myBtn);
  switch (true) {
    case styles?.includes('page__button'):
      style.push(classes.page__button);
      break;  
    case styles?.includes('page__button_current'):
      style.push(classes.page__button_current);
      break;  
    default:
      break;
  }
  return (
    <button {...props} className={style.join(' ')}>
      {children}
    </button>
  );
};

export default Button;