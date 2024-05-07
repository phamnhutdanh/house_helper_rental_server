import { RESOLVER_TYPE } from "..";
import { bookingResolver } from "./bookingResolver";

export default class Booking {
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
        enum BookingStatus {
            PENDING
            ACCEPTED
            CANCELED
            COMPLETED
        }

        enum PaymentMethod {
            COD
            MOMO
        }
        type Booking {    
            id: String
            numsOfEmployee: Int
            bookingTime: String
            totalPrice: Float
            status: BookingStatus
            paymentMethod: PaymentMethod
            createdAt: String
            updatedAt: String
            serviceId: String
            jobId: String
            customerAddressId: String
        }

        type BookingEmployee {    
            id: String
            employeeId: String
            bookingId: String
        }
    `;
  }

  static resolver(type: RESOLVER_TYPE) {
    if (type === RESOLVER_TYPE.Query) return bookingResolver.queries;
    else return bookingResolver.mutations;
  }
}
