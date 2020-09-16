import {ApiDeclarations} from "@core/api/apiDefinitions";
import {createApiClient} from "@api/apiClientGenerator";
//import {mock} from "@api/mockApi/mockApi";
import {Void} from "@core/model/void";

class PasswordApi {
  private _getCategoryList = createApiClient(ApiDeclarations.getCategories);
  private _getPasswordList = createApiClient(ApiDeclarations.getPasswords);
  private _getResources = createApiClient(ApiDeclarations.getResources);

  //@mock()
  getPasswordList(req: Void, ver: 1) {
    return this._getPasswordList(req, ver);
  }

  getResources(req: Void, ver: 1) {
    return this._getResources(req, ver);
  }
}

export const passwordApi = new PasswordApi();