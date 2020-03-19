import axios from "axios";
import {getConfig} from "@core/config/applicationConfig";
import {ApiDeclaration} from "@core/api/apiDescriptor";

export type ApiClient<REQUEST, RESPONSE, VERSION>
  = (req: REQUEST, ver: VERSION) => Promise<RESPONSE>;

const config = getConfig();

export const createApiClient
  = <REQ, RES, VERSION>(desc: ApiDeclaration<REQ, RES, VERSION>): ApiClient<REQ, RES, VERSION> => {
  return (req, ver) => {
    const apiPath = `http://${config.api.host}:${config.api.port}/${config.api.prefixPath}/v${ver}/${desc.resourceName}`;
    return axios.get<REQ>(apiPath)
      .then((res: any) => {
        return res;
      });
  }
};