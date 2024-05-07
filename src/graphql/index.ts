import AccountInfo from "./account_info/accountInfo";
import Address from "./address/address";
import Booking from "./booking/booking";
import Customer from "./customer/customer";
import Employee from "./employee/employee";
import Job from "./job/job";
import Schedule from "./schedule/schedule";
import Service from "./service/service";

enum RESOLVER_TYPE {
  Query,
  Mutation,
}

const typeDefs = `#graphql     
   ${AccountInfo.typeDef()}
   ${Address.typeDef()}
   ${Customer.typeDef()}
   ${Employee.typeDef()}
   ${Booking.typeDef()}   
   ${Job.typeDef()}   
   ${Service.typeDef()}   
   ${Schedule.typeDef()}
   
   type Query {
      ${AccountInfo.query()}
      ${Address.query()}
      ${Customer.query()}
      ${Employee.query()}
      ${Booking.query()}   
      ${Job.query()}   
      ${Service.query()}   
      ${Schedule.query()}
   }

   type Mutation {
      ${AccountInfo.mutation()}
      ${Address.mutation()}
      ${Customer.mutation()}
      ${Employee.mutation()}
      ${Booking.mutation()}   
      ${Job.mutation()}   
      ${Service.mutation()}   
      ${Schedule.mutation()}
   }           
`;

const resolvers = {
  Query: {
    ...AccountInfo.resolver(RESOLVER_TYPE.Query),
    ...Address.resolver(RESOLVER_TYPE.Query),
    ...Customer.resolver(RESOLVER_TYPE.Query),
    ...Employee.resolver(RESOLVER_TYPE.Query),
    ...Booking.resolver(RESOLVER_TYPE.Query),
    ...Job.resolver(RESOLVER_TYPE.Query),
    ...Schedule.resolver(RESOLVER_TYPE.Query),
    ...Service.resolver(RESOLVER_TYPE.Query),
  },
  Mutation: {
    ...AccountInfo.resolver(RESOLVER_TYPE.Mutation),
    ...Address.resolver(RESOLVER_TYPE.Mutation),
    ...Customer.resolver(RESOLVER_TYPE.Mutation),
    ...Employee.resolver(RESOLVER_TYPE.Mutation),
    ...Booking.resolver(RESOLVER_TYPE.Mutation),
    ...Job.resolver(RESOLVER_TYPE.Mutation),
    ...Schedule.resolver(RESOLVER_TYPE.Mutation),
    ...Service.resolver(RESOLVER_TYPE.Mutation),
  },
};

export { typeDefs, resolvers, RESOLVER_TYPE };
