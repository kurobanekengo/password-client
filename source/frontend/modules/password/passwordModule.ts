import { createModule, useActions } from 'typeless';
import {PasswordEntity} from "@core/entity/passwordEntity";
import { PasswordSymbol } from '@frontend/modules/password/passwordSymbol';
import { PasswordState, getInitialPasswordState } from '@frontend/modules/password/passwordState';
import { setPasswordList } from './reducers/setPasswordList';
import { loadPasswordList } from './epics/loadPasswordList';
import { loadResources } from './epics/loadResources';

const [module, actions, state] =
  createModule(PasswordSymbol)
  .withActions({
    loadResources: null,
    loadPasswordList: null,
    setPasswordList: (passwordList: PasswordEntity[]) => {
      return { payload: {passwordList}};
    }
  })
  .withState<PasswordState>()
;

module
  .epic()
  .on(actions.loadPasswordList, loadPasswordList)
  .on(actions.loadResources, loadResources)
  ;

module
  .reducer(getInitialPasswordState())
  .on(actions.setPasswordList, setPasswordList)
  ;

export type PasswordActions = typeof actions;
export const passwordActions = actions;
export const usePasswordActions = () => {
  return useActions(actions);
};
export const usePasswordState = () => {
  return state.useState();
};
export const getPasswordState = () => {
  return state();
};
export const usePasswordModule = module;