import * as React from 'react';
import { usePasswordModule } from '@frontend/modules/password/passwordModule';
import { PasswordListContainer } from '@frontend/components/passwordList/passwordListContainer';

export const Application = () => {
  usePasswordModule();
  return (
    <div>
      <PasswordListContainer />
    </div>
  );
};