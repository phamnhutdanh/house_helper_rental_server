import { RESOLVER_TYPE } from "../resolvers";
import { accountInfoResolver } from "./accountInfoResolver";

export default class AccountInfo {
  static query() {
    return `#graphql
        getAllAccountInfos: [AccountInfo]
        getAccountInfoById(id: String): AccountInfo
    `;
  }

  static mutation() {
    return `#graphql
        createCustomerAccount(email: String): Boolean 
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

        type AccountInfo {    
            id: String
            email: String
            role: AccountInfoRole
            createdAt: String
            updatedAt: String
            status: AccountStatus
        }
    `;
  }

  static resolver(type: RESOLVER_TYPE) {
    if (type === RESOLVER_TYPE.Query) return accountInfoResolver.queries;
    else return accountInfoResolver.mutations;
  }
}
