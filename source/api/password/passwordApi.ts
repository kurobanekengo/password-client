import axios from 'axios';

function get(apiPath: string, mock: boolean = false) {
  return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
    console.log("f(): called");
    console.log("### target ###");
    console.log(target);
    console.log("### propertyKey ###");
    console.log(propertyKey);
    console.log("### descriptor ###");
    console.log(descriptor);
    if (mock) {
    } else {
      descriptor.value = (req: Empty) => {
        return axios
          .get<any>("http://192.168.33.12:3000/api/v1/passwords")
          .then((res: any) => {
            return res;
          })
          ;
        return new Promise((resolve, reject) => {
          setTimeout(() => resolve(), 500);
        })
        .then(() => {
          return 5;
        });
      };
    }
  }
}

function callApi<REQUEST, RESPONSE>(request: REQUEST): Promise<RESPONSE> {
  return undefined as any as Promise<RESPONSE>;
}

export const empty = Symbol("EMPTY PARAMETER");
export type Empty = typeof empty;

class PasswordApi {
  @get("passwords", false)
  async getPasswordList(req: Empty) {
    return callApi<Empty, string>(req);
  }
}

export const passwordApi = new PasswordApi();