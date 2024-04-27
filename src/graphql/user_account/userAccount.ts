import { RESOLVER_TYPE } from "../resolvers";
import { userAccountResolver } from "./userAccountResolver";

export default class UserAccount {
  static query() {
    return `#graphql
      getAllAccounts: [String]
    `;
  }
  static mutation() {
    return `#graphql
      createUserAccount(email: String!, firebaseUID: String!): ID 
    `;
  }

  static typeDef() {
    return `#graphql
      type Account {
        id: String
        email: String
      }

      type UserAccount {
        email: String!
      }
    `;
  }

  static resolver(type: RESOLVER_TYPE) {
    if (type === RESOLVER_TYPE.Query) return userAccountResolver.queries;
    else return userAccountResolver.mutations;
  }
}
