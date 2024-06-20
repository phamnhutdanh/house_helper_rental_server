import { RESOLVER_TYPE } from "..";
import { employeeResolver } from "./employeeResolver";

export default class Employee {
  static query() {
    return `#graphql
        getAllEmployees: [Employee]
        getTopEmployees: [Employee]
        getEmployeeById(id: String): Employee
        checkFavorite(favoriteInput: FavoriteInput): Boolean
        getFavoriteEmployeesOfCustomer(customerId: String): [FavoriteEmployee]
    `;
  }

  static mutation() {
    return `#graphql
       createRatingEmployee(createRatingEmployeeInput: CreateRatingEmployeeInput): RatingEmployee
       addToFavorite(favoriteInput: FavoriteInput): FavoriteEmployee
       removeFromFavorite(favoriteInput: FavoriteInput): FavoriteEmployee
    `;
  }

  static typeDef() {
    return `#graphql
        input FavoriteInput {
            employeeId: String
            customerId: String
        }

        input CreateRatingEmployeeInput {
            score: Int
            comment: String
            bookingId: String
            employeeId: String
            customerId: String
        }

        type Employee {    
            id: String
            name: String
            phoneNumber: String
            imageUri: String
            description: String
            age: Int
            workingHours: Int
            accountInfoId: String
            accountInfo: AccountInfo
            averageRating: Float
            ratings: [RatingEmployee]
            employeeAddresses: [EmployeeAddress]
        }

        type RatingEmployee {    
            id: String
            score: Int
            comment: String
            createdAt: String
            updatedAt: String

            bookingId: String
            customerId: String
            customer: Customer
            employeeId: String
        }

        type FavoriteEmployee {    
            id: String
            customerId: String
            customer: Customer
            employeeId: String
            employee: Employee
        }
    `;
  }

  static resolver(type: RESOLVER_TYPE) {
    if (type === RESOLVER_TYPE.Query) return employeeResolver.queries;
    else return employeeResolver.mutations;
  }
}
