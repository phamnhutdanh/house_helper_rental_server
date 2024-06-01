import { RESOLVER_TYPE } from "..";
import { customerResolver } from "./customerResolver";

export default class Customer {
  static query() {
    return `#graphql
        
    `;
  }

  static mutation() {
    return `#graphql
       
    `;
  }

  static typeDef() {
    return `#graphql
        type Customer {    
            id: String
            name: String
            phoneNumber: String
            imageUri: String
            accountInfoId: String
            customerAddresses: [CustomerAddress]
        }

        type NotificationCustomer {    
            id: String
            description: String
            imageUri: String
            customerId: String
        }
    `;
  }

  static resolver(type: RESOLVER_TYPE) {
    if (type === RESOLVER_TYPE.Query) return customerResolver.queries;
    else return customerResolver.mutations;
  }
}
