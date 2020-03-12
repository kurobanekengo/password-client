import * as React from 'react';
import { usePasswordModule } from '@frontend/password/passwordModule';
import { Password } from '@frontend/password/containers/password';

export const Application = () => {
  usePasswordModule();
  return <Password />;
};