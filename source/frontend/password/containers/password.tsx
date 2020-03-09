import * as React from 'react';
import { usePasswordModule } from '@frontend/password/passwordModule';
import { PasswordComponent, PasswordComponentProps } from '@frontend/password/components/password';

export const Password = () => {
  usePasswordModule();
  const passwordProp: PasswordComponentProps = {
    passwords: [
      {
        name: 'XXX',
        userId: 'Yamada',
        password: '198103'
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