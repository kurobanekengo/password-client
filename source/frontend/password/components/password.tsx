import * as React from 'react';
import {PasswordEntity} from "@core/entity/passwordEntity";

export interface PasswordComponentProps {
  passwordList: PasswordEntity[]
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
        {props.passwordList.map(password => {
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
