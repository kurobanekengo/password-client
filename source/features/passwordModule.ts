import { createModule } from 'typeless';
import { PasswordSymbol } from './passwordSymbol';
import { PasswordState, getInitialPasswordState } from './passwordState';

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