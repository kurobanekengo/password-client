import * as React from 'react';
import { usePasswordModule } from '../passwordModule';

export const PasswordComponent = () => {
  return (
    <>
      <div>HELLO!</div>
    </>
  );
};

export const Password = () => {
  usePasswordModule();
  return <PasswordComponent/>;
};
