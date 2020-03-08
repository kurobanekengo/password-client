import * as React from 'react';
import { usePasswordModule } from '../passwordModule';
import { PasswordComponent } from '../components/password';

export const Password = () => {
  usePasswordModule();
  return <PasswordComponent />;
};