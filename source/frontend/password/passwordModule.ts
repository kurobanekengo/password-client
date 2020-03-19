import { createModule } from 'typeless';
import * as Rx from 'typeless/rx';
import {PasswordEntity} from "@core/entity/passwordEntity";
import {VOID} from "@core/model/void";
import { passwordApi} from '@api/password/passwordApi';
import { PasswordSymbol } from '@frontend/password/passwordSymbol';
import { PasswordState, getInitialPasswordState } from '@frontend/password/passwordState';

const [module, actions, getState] =
  createModule(PasswordSymbol)
  .withActions({
    loadPasswordList: null,
    setPasswordList: (passwordList: PasswordEntity[]) => {
      return { payload: {passwordList}};
    }
  })
  .withState<PasswordState>()
;

module
  .epic()
  .on(actions.loadPasswordList, () => {
    return Rx
    .fromPromise(
      passwordApi
        .getPasswordList(VOID, 1)
        .then(res => {
          return res
        }))
    .pipe(Rx.mergeMap(res => {
      return [actions.setPasswordList(res)];
    }));
  })
  ;

module
  .reducer(getInitialPasswordState())
  .on(actions.setPasswordList, (state, { passwordList }) => {
    state.passwordList = passwordList;
  })
  ;

export const usePasswordModule = module;
export const PasswordActions = actions;
export const getPasswordState = getState;