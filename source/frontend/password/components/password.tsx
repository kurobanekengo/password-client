import * as React from 'react';

export interface PasswordComponentProps {
  passwords: PasswordRow[];
}

export interface PasswordRow {
  name: string;
  userId: string;
  password: string;
}

export const PasswordComponent = (props: PasswordComponentProps) => {
  return (
    <table>
      <thead>
        <tr><td></td></tr>
        <tr><td></td></tr>
        <tr><td></td></tr>
      </thead>
      <tbody>
        {props.passwords.map(password => {
          return (
            <tr>
              <td>{password.name}</td>
              <td>{password.userId}</td>
              <td>{password.password}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};
