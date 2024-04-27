import UserAccount from "./user_account/userAccount";

export const enum RESOLVER_TYPE {
  Query,
  Mutation,
}

export const resolvers = {
  Query: { ...UserAccount.resolver(RESOLVER_TYPE.Query) },
  Mutation: { ...UserAccount.resolver(RESOLVER_TYPE.Mutation) },
};
