import * as React from 'react';
import { PasswordListComponent } from '@frontend/components/passwordList/passwordListComponent';
import { usePasswordActions, usePasswordState } from '../../modules/password/passwordModule';

export const PasswordListContainer = () => {
  const passwordActions = usePasswordActions();
  const passwordState = usePasswordState();
  React.useEffect(() => {
    passwordActions.loadPasswordList();
    passwordActions.loadResources();
  }, []);
  return <PasswordListComponent passwordList={passwordState.passwordList} />;
};