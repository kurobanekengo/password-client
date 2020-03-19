import _ from "lodash";
import {VOID} from "@core/model/void";

export const mock = () => {
  return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
    console.log("f(): called");
    console.log("### target ###");
    console.log(target.constructor.name);
    console.log("### propertyKey ###");
    console.log(propertyKey);
    console.log("### descriptor ###");
    console.log(descriptor);
    descriptor.value = function() {
      const args = arguments;
      return new Promise((resolve, reject) => {
        setTimeout(() => resolve(), 500);
      }).then(() => {
        const params = args[0];
        const ver = args[1];
        const mockJson = require(`./mockData/${target.constructor.name}.${propertyKey}.json`);
        const result = _.find(mockJson, {
          params: params === VOID ? null : params,
          ver
        });
        return result.data;
      });
    };
  };
};