import { createModule } from 'typeless';
import * as Rx from 'typeless/rx';
import { PasswordSymbol } from '@frontend/password/passwordSymbol';
import { PasswordState, getInitialPasswordState } from '@frontend/password/passwordState';
import { passwordApi} from '@api/password/passwordApi';
import {VOID} from "@core/model/void";

const [module, actions, getState] =
  createModule(PasswordSymbol)
  .withActions({
    getPasswordList: null
  })
  .withState<PasswordState>()
;

module
  .epic()
  .on(actions.getPasswordList, () => {
    return Rx
    .fromPromise(
      passwordApi
        .getPasswordList(VOID, 1)
        .then(res => {
          return res
        }))
    .pipe(Rx.mergeMap(res => {
      return [];
    }));
  })
  ;

module
  .reducer(getInitialPasswordState)
  ;

export const usePasswordModule = module;
export const PasswordActions = actions;
export const getPasswordState = getState;