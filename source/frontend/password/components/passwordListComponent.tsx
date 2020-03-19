import * as React from 'react';
import {PasswordEntity} from "@core/entity/passwordEntity";
import {
  createNewPasswordListItem,
  PasswordListItemComponent
} from "@frontend/password/components/passwordListItemComponent";

export interface PasswordListComponentProps {
  passwordList: PasswordEntity[]
}

export const PasswordListComponent = (props: PasswordListComponentProps) => {
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
          <td>削除</td>
        </tr>
      </thead>
      <tbody>
        {createNewPasswordListItem()}
        {props.passwordList.map(
          password =>
            <PasswordListItemComponent
              key={password.id}
              password={password}
              deletable={true}
            />
          )
        }
      </tbody>
    </table>
  );
};
