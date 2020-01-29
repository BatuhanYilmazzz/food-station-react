import React from 'react';
import './Main.scss';
import Form from './Form';

const Main = () => {
  return (
    <div className='App'>
      <div className='App__header'>
        <h1 className='App__title'>Cook World</h1>
      </div>
      <Form />
    </div>
  );
};

export default Main;
