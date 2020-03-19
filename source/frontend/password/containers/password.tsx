import * as React from 'react';
import { getPasswordState } from '@frontend/password/passwordModule';
import { PasswordComponent } from '@frontend/password/components/password';
import {usePasswordModule} from "@frontend/password/hooks/usePasswordModule";

export const Password = () => {
  const { passwordActions } = usePasswordModule();
  React.useEffect(() => {
    passwordActions.loadPasswordList();
  }, []);
  const state = getPasswordState.useState();
  return <PasswordComponent passwordList={state.passwordList} />;
};