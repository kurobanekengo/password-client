import * as React from 'react';
import {PasswordEntity} from "@core/entity/passwordEntity";
import {useState} from "react";

interface InputItemProps {
  password: PasswordEntity;
  target: keyof PasswordEntity;
}

export const InputItem = (props: InputItemProps) => {
  const origValue = props.password[props.target];
  const [isDirty, setDirty] = useState(false);
  const [newValue, setNewValue] = useState(origValue);
  return <td className={`${isDirty ? "dirty" : "clean"} ${props.target}`}>
    <input
      type={"text"}
      value={newValue}
      onChange={e => {
        const newVal = e.target.value;
        setNewValue(newVal);
        setDirty(origValue !== newVal)
       }
      }
    />
  </td>;
};

export interface PasswordListItemComponentProps {
  password: PasswordEntity;
  deletable: boolean;
}

export const PasswordListItemComponent = (props: PasswordListItemComponentProps) => {
  const listItem = props.password;
  return (
    <tr key={listItem.id} className={props.deletable ? "editRow" : "newRow"}>
      <InputItem password={listItem} target={"category"}/>
      <InputItem password={listItem} target={"name"}/>
      <InputItem password={listItem} target={"description"}/>
      <InputItem password={listItem} target={"userId"}/>
      <InputItem password={listItem} target={"password"}/>
      <InputItem password={listItem} target={"memo"}/>
      <td>{props.deletable ? <button>削除</button> : <br/>}</td>
    </tr>
  );
};

export const createNewPasswordListItem = () => {
  const password: PasswordEntity = {
    id: "",
    category: "",
    name: "",
    description: "",
    userId: "",
    password: "",
    memo: ""
  };
  return <PasswordListItemComponent password={password} deletable={false}/>
};
