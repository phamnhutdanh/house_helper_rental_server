import { RESOLVER_TYPE } from "..";
import { serviceResolver } from "./serviceResolver";

export default class Service {
  static query() {
    return `#graphql
        getAllServices: [Service]
        getServiceById(id: String): Service
    `;
  }

  static mutation() {
    return `#graphql
       
    `;
  }

  static typeDef() {
    return `#graphql
        type Service {    
            id: String
            name: String
            description: String
            imageUri: String
            serviceCode: String
            serviceDetails: [ServiceDetails]
        }

        type ServiceDetails {
            id: String
            name: String
            description: String
            imageUri: String
            fee: Int
            serviceDetailCode: String
            serviceId: String
        }
    `;
  }

  static resolver(type: RESOLVER_TYPE) {
    if (type === RESOLVER_TYPE.Query) return serviceResolver.queries;
    else return serviceResolver.mutations;
  }
}
