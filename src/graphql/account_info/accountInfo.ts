import { RESOLVER_TYPE } from "..";
import { accountInfoResolver } from "./accountInfoResolver";

export default class AccountInfo {
  static query() {
    return `#graphql
        getAllAccountInfos: [AccountInfo]
        getAccountInfoById(id: String): AccountInfo
        getAllEmployeeAccountRequests: [EmployeeAccountRequest]
        getNotificationOfAccount(accountId: String): [NotificationAccount]
    `;
  }

  static mutation() {
    return `#graphql
        createAccount(createAccountInput: CreateAccountInput, 
                              createSessionInput: CreateSessionInput): AccountInfo  
        createEmployeeAccountRequest(createEmployeeAccountRequest: CreateEmployeeAccountRequest): EmployeeAccountRequest
        updateCustomerInfo(updateCustomerInput: UpdateCustomerInput): AccountInfo    
        updateEmployeeInfo(updateEmployeeInput: UpdateEmployeeInput): AccountInfo           
        updateAccountStatus(accountStatusInput: AccountStatusInput): AccountInfo           
        changeNotiStatus(changeNotiInput: ChangeNotiInput): NotificationAccount
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

        enum NotificationStatus {
            READ
            UNREAD
        }

        input AccountStatusInput {
            accountId: String
            status: String
        }

        input ChangeNotiInput {
            id: String
            status: String
        }

        input UpdateCustomerInput {
            customerId: String
            name: String
            phone: String
            imageUri: String
        }

         input UpdateEmployeeInput {
            employeeId: String
            name: String
            phone: String
            imageUri: String
            description: String
        }

        input CreateAccountInput {
            email: String
            name: String
            accountId: String
            isEmployee: Boolean
        }

        input CreateEmployeeAccountRequest {
            name: String
            email: String
            hashPassword: String
            keyPassword: String
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
            customer: Customer
            employee: Employee
        }
        
        type NotificationAccount {
            id: String
            title: String
            description: String
            status: NotificationStatus
            imageUri: String
            accountId: String
            account: AccountInfo
            createdAt: String
            updatedAt: String
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
