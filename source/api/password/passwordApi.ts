import {ApiDeclarations} from "@core/api/apiDefinitions";
import {createApiClient} from "@api/apiClientGenerator";
import {mock} from "@api/mockApi/mockApi";
import {Void} from "@core/model/void";

class PasswordApi {
  private _getPasswordList = createApiClient(ApiDeclarations.getPasswords);

  @mock()
  getPasswordList(req: Void, ver: 1) {
    return this._getPasswordList(req, ver);
  }
}

export const passwordApi = new PasswordApi();