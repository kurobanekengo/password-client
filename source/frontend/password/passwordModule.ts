import { createModule } from 'typeless';
import * as Rx from 'typeless/rx';
import { PasswordSymbol } from '@frontend/password/passwordSymbol';
import { PasswordState, getInitialPasswordState } from '@frontend/password/passwordState';
import { passwordApi, empty } from '@api/password/passwordApi';

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
    console.log("AAAAA");
    return Rx
    .fromPromise(
      passwordApi
        .getPasswordList(empty)
        .then(res => {
          console.log(res);
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