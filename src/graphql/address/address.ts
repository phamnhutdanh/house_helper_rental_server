import { RESOLVER_TYPE } from "..";
import { addressResolver } from "./addressResolver";

export default class Address {
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
        enum AddressType {
            DEFAULT
            NONE
        }

        type Address {    
            id: String
            address: String
            fullName: String
            phone: String
        }

        type CustomerAddress {    
            id: String
            addressType: AddressType
            customerId: String
            addressId: String
        }

        type EmployeeAddress {    
            id: String
            addressType: AddressType
            employeeId: String
            addressId: String
        }
    `;
  }

  static resolver(type: RESOLVER_TYPE) {
    if (type === RESOLVER_TYPE.Query) return addressResolver.queries;
    else return addressResolver.mutations;
  }
}
