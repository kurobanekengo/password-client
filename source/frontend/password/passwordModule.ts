import { createModule } from 'typeless';
import { PasswordSymbol } from '@frontend/password/passwordSymbol';
import { PasswordState, getInitialPasswordState } from '@frontend/password/passwordState';

const [module, actions, getState] =
  createModule(PasswordSymbol)
  .withActions({

  })
  .withState<PasswordState>()
;

module
  .epic()
  ;

module
  .reducer(getInitialPasswordState)
  ;

export const usePasswordModule = module;
export const PasswordActions = actions;
export const getPasswordState = getState;