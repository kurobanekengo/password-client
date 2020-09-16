import { PasswordState } from '@frontend/modules/password/passwordState';
import { PasswordEntity } from 'password-core/dist/entity/passwordEntity';

export const setPasswordList = (
  state: PasswordState,
  payload: {
    passwordList: PasswordEntity[]
  }
) => {
  state.passwordList = payload.passwordList;
}