import { RESOLVER_TYPE } from "..";
import { accountInfoResolver } from "./accountInfoResolver";

export default class AccountInfo {
  static query() {
    return `#graphql
        getAllAccountInfos: [AccountInfo]
        getAccountInfoById(id: String): AccountInfo
        getAllEmployeeAccountRequests: [EmployeeAccountRequest]
    `;
  }

  static mutation() {
    return `#graphql
        createCustomerAccount(createCustomerAccountInput: CreateCustomerAccountInput, 
                              createSessionInput: CreateSessionInput): AccountInfo 
        createEmployeeAccount(createEmployeeAccountInput: CreateEmployeeAccountInput, 
                              createSessionInput: CreateSessionInput): AccountInfo    
        createEmployeeAccountRequest(createEmployeeAccountRequest: CreateEmployeeAccountRequest): EmployeeAccountRequest                         
    `;
  }

  static typeDef() {
    return `#graphql
        enum AccountInfoRole {
            ADMIN
            CUSTOMER
            EMPLOYEE
        }

        enum AccountStatus {
            BANNED
            NONE
            WARNING
        }

        enum EmployeeAccountStatus {
            PENDING
            ACCEPTED
            CANCELED
        }

        input CreateCustomerAccountInput {
            email: String
            name: String
            accountId: String
        }

        input CreateEmployeeAccountRequest {
            name: String
            email: String
            hashPassword: String
            keyPassword: String
        }

        input CreateEmployeeAccountInput {
            email: String
            name: String
            accountId: String
        }

        input CreateSessionInput {
            sessionToken: String
            expires: String
            accessToken: String
            expiresAt: Int
            expiresIn: Int
            isExpired: Boolean
            providerRefreshToken: String
            providerToken: String
            refreshToken: String
            tokenType: String
        }

        type AccountInfo {    
            id: String
            email: String
            accountRole: AccountInfoRole
            createdAt: String
            updatedAt: String
            status: AccountStatus
        }

        type EmployeeAccountRequest {    
            id: String
            name: String
            email: String
            hashPassword: String
            keyPassword: String
            createdAt: String
            updatedAt: String
            status: EmployeeAccountStatus
        }
        
        type SessionInfo {
            id: String
            sessionToken: String
            expires: String
            accessToken: String
            expiresAt: Int
            expiresIn: Int
            isExpired: Boolean
            providerRefreshToken: String
            providerToken: String
            refreshToken: String
            tokenType: String
            accountInfoId: String
        }
    `;
  }

  static resolver(type: RESOLVER_TYPE) {
    if (type === RESOLVER_TYPE.Query) return accountInfoResolver.queries;
    else return accountInfoResolver.mutations;
  }
}
