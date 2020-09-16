import * as Rx from 'typeless/rx';
import {VOID} from "@core/model/void";
import { passwordApi} from '@api/password/passwordApi';

export const loadResources = () => {
  return Rx
    .fromPromise(
      passwordApi.getResources(VOID, 1)
        .then(res => {
          return res
        }))
    .pipe(Rx.mergeMap(res => {
      console.log(res);
      return [];
    }))
};