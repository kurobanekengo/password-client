import {PasswordEntity} from "@core/entity/passwordEntity";

export interface PasswordState {
  passwordList: PasswordEntity[];
}
export const getInitialPasswordState = (): PasswordState => {
  return {
    passwordList: []
  };
};