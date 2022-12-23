import React from 'react';
import classes from './Input.module.css';

const Input = React.forwardRef<HTMLInputElement, React.InputHTMLAttributes<HTMLInputElement>>((props, ref) => {
  return (
    <input ref={ref} type="text" {...props} className={classes.myInput}/>
  );
});

export default Input;