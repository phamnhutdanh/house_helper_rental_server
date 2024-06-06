import { RESOLVER_TYPE } from "..";
import { employeeResolver } from "./employeeResolver";

export default class Employee {
  static query() {
    return `#graphql
        getAllEmployees: [Employee]
        getTopEmployees: [Employee]
    `;
  }

  static mutation() {
    return `#graphql
       
    `;
  }

  static typeDef() {
    return `#graphql
        type Employee {    
            id: String
            name: String
            phoneNumber: String
            imageUri: String
            description: String
            age: Int
            workingHours: Int
            accountInfoId: String
            averageRating: Float
            employeeAddresses: [EmployeeAddress]
        }

        type FavoriteEmployee {    
            id: String
            customerId: String
            employeeId: String
        }

        type NotificationEmployee {    
            id: String
            description: String
            imageUri: String
            employeeId: String
        }
    `;
  }

  static resolver(type: RESOLVER_TYPE) {
    if (type === RESOLVER_TYPE.Query) return employeeResolver.queries;
    else return employeeResolver.mutations;
  }
}
