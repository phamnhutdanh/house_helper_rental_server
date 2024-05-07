import { RESOLVER_TYPE } from "..";
import { scheduleResolver } from "./scheduleResolver";

export default class Schedule {
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
        enum ScheduleType {
            CUSTOM
            REGULAR
            NONE
        }

        enum TimeRange {
            MORNING
            AFTERNOON
            EVENING
        }

        enum WeekDay {
            MON
            TUE
            WED
            THU
            FRI
            SAT
            SUN
        }

        type Schedule {    
            id: String
            scheduleType: ScheduleType
            timeRange: TimeRange
            weekDay: WeekDay
            startedAt: String
            endedAt: String
            createdAt: String
            updatedAt: String
            employeeId: String
        }
    `;
  }

  static resolver(type: RESOLVER_TYPE) {
    if (type === RESOLVER_TYPE.Query) return scheduleResolver.queries;
    else return scheduleResolver.mutations;
  }
}
