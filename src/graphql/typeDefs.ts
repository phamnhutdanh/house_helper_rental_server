import UserAccount from "./user_account/userAccount";

export const typeDefs = `#graphql            
   type Query {
      ${UserAccount.query()}
   }

   type Mutation {
      ${UserAccount.mutation()}
   }           
`;
