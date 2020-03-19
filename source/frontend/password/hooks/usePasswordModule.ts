import { PasswordActions, getPasswordState } from '@frontend/password/passwordModule';
import {useActions} from "typeless";
export const usePasswordModule = () => {
  const ret = {
    passwordActions: useActions(PasswordActions),
    getPasswordState
  };
  return ret;
};