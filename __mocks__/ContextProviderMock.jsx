import React from 'react';
import Context from 'src/context';

const ContextProviderMock = ({ children, isIntroDone }) => {
  const setState = jest.fn();
  const state = {
    isIntroDone: isIntroDone,
  };

  return (
    <Context.Provider value={{ state, setState }}>{children}</Context.Provider>
  );
};

export default ContextProviderMock;
