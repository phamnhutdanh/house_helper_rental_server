import AccountInfo from "./account_info/accountInfo";

export const enum RESOLVER_TYPE {
  Query,
  Mutation,
}

export const resolvers = {
  Query: { ...AccountInfo.resolver(RESOLVER_TYPE.Query) },
  Mutation: { ...AccountInfo.resolver(RESOLVER_TYPE.Mutation) },
};
