import { RESOLVER_TYPE } from "..";
import { jobResolver } from "./jobResolver";

export default class Job {
  static query() {
    return `#graphql
        
    `;
  }

  static mutation() {
    return `#graphql
       
    `;
  }

  static typeDef() {
    return `#graphql
        type Job {    
            id: String
            name: String
        }

        type EmployeeJob {    
            id: String
            jobId: String
            employeeId: String
        }

        type ScheduleJob {    
            id: String
            jobId: String
            scheduleId: String
        }
    `;
  }

  static resolver(type: RESOLVER_TYPE) {
    if (type === RESOLVER_TYPE.Query) return jobResolver.queries;
    else return jobResolver.mutations;
  }
}
