import * as React from 'react';
import {PasswordEntity} from "@core/entity/passwordEntity";

export interface PasswordComponentProps {
  passwordList: PasswordEntity[]
}

export const PasswordListComponent = (props: PasswordComponentProps) => {
  return (
    <table>
      <thead>
        <tr>
          <td>カテゴリ</td>
          <td>名称</td>
          <td>概要</td>
          <td>ユーザID</td>
          <td>パスワード</td>
          <td>備考</td>
        </tr>
      </thead>
      <tbody>
        {props.passwordList.map(password => {
          return (
            <tr key={password.id}>
              <td>{password.category}</td>
              <td>{password.name}</td>
              <td>{password.description}</td>
              <td>{password.userId}</td>
              <td>{password.password}</td>
              <td>{password.memo}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};
