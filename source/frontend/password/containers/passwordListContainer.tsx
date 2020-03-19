import * as React from 'react';
import { getPasswordState } from '@frontend/password/passwordModule';
import { PasswordListComponent } from '@frontend/password/components/passwordListComponent';
import {usePasswordModuleWrapper} from "@frontend/password/hooks/usePasswordModuleWrapper";

export const PasswordListContainer = () => {
  const { passwordActions } = usePasswordModuleWrapper();
  React.useEffect(() => {
    passwordActions.loadPasswordList();
  }, []);
  const state = getPasswordState.useState();
  return <PasswordListComponent passwordList={state.passwordList} />;
};