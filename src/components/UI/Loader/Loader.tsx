import React from 'react';
import classes from './Loader.module.css';

const Loader = () => {
  return (
    <div className={classes.wrapper}>
      <div className={classes.loader}>
        <p className={classes.text}>Loading...</p>
      </div>
    </div>
  );
};

export default Loader;