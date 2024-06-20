import { RESOLVER_TYPE } from "..";
import { addressResolver } from "./addressResolver";

export default class Address {
  static query() {
    return `#graphql
        getAllAddressOfCustomer(customerId: String): [CustomerAddress]
        getAllAddressOfEmployee(employeeId: String): [EmployeeAddress]
        getCustomerAddressById(id: String): CustomerAddress
    `;
  }

  static mutation() {
    return `#graphql
      removeEmployeeAddress(id: String): EmployeeAddress
      createEmployeeAddress(createAddressInput: CreateAddressInput, 
                            createEmployeeAddressInput: CreateEmployeeAddressInput): EmployeeAddress 

      removeCustomerAddress(id: String): CustomerAddress
      createCustomerAddress(createAddressInput: CreateAddressInput, 
                            createCustomerAddressInput: CreateCustomerAddressInput): CustomerAddress  
    `;
  }

  static typeDef() {
    return `#graphql
        enum AddressType {
            DEFAULT
            NONE
        }

        input CreateAddressInput {
            address: String
            fullName: String
            phone: String
        }

        input CreateEmployeeAddressInput {
            employeeId: String
            isDefault: Boolean
        }

        input CreateCustomerAddressInput {
            customerId: String
            isDefault: Boolean
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
            customer: Customer
            addressId: String
            address: Address
        }

        type EmployeeAddress {    
            id: String
            addressType: AddressType
            employeeId: String
            employee: Employee
            addressId: String
            address: Address
        }
    `;
  }

  static resolver(type: RESOLVER_TYPE) {
    if (type === RESOLVER_TYPE.Query) return addressResolver.queries;
    else return addressResolver.mutations;
  }
}
