import * as Rx from 'typeless/rx';
import {VOID} from "@core/model/void";
import { passwordApi} from '@api/password/passwordApi';
import { passwordActions } from '@frontend/modules/password/passwordModule';

export const loadPasswordList = () => {
  return Rx
  .fromPromise(
    passwordApi
      .getPasswordList(VOID, 1)
      .then(res => {
        return res
      }))
  .pipe(Rx.mergeMap(res => {
    return [passwordActions.setPasswordList(res)];
  }));
};