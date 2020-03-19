import { PasswordActions, getPasswordState } from '@frontend/password/passwordModule';
import {useActions} from "typeless";
export const usePasswordModuleWrapper = () => {
  const ret = {
    passwordActions: useActions(PasswordActions),
    getPasswordState
  };
  return ret;
};