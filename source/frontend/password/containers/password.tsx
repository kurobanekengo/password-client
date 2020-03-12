import * as React from 'react';
import { useActions } from 'typeless';
import { PasswordActions } from '@frontend/password/passwordModule';
import { PasswordComponent, PasswordComponentProps } from '@frontend/password/components/password';

export const Password = () => {
  const passwordActions = useActions(PasswordActions);
  React.useEffect(() => {
    passwordActions.getPasswordList();
  }, []);
  const passwordProp: PasswordComponentProps = {
    passwords: [
      {
        name: 'XXX',
        userId: 'Yamada',
        password: '19810333'
      },
      {
        name: 'YYY',
        userId: 'Tanaka',
        password: '643923'
      }
    ]
  };
  return <PasswordComponent {...passwordProp} />;
};