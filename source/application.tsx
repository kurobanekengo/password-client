import * as React from 'react';
import { usePasswordModule } from '@frontend/password/passwordModule';
import { PasswordListContainer } from '@frontend/password/containers/passwordListContainer';

export const Application = () => {
  usePasswordModule();
  return <PasswordListContainer />;
};