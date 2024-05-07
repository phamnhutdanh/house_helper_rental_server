import AccountInfo from "./account_info/accountInfo";

export const typeDefs = `#graphql     
   ${AccountInfo.typeDef()}
   
   type Query {
      ${AccountInfo.query()}
   }

   type Mutation {
      ${AccountInfo.mutation()}
   }           
`;
