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

        enum RepeatBookingStatus {
            NO_REPEAT
            EVERY_DAY
            EVERY_WEEK
            EVERY_MONTH
        }

        type Booking {    
            id: String
            bookingTime: String
            status: BookingStatus
            repeatStatus: RepeatBookingStatus
            totalPrice: Int
            note: String
            paymentMethod: PaymentMethod

            createdAt: String
            updatedAt: String
            serviceId: String
            customerId: String
            customerAddressId: String
        }

        type BookingEmployee {    
            id: String
            employeeId: String
            bookingId: String
        }

        type BookingServiceDetail {    
            id: String
            serviceDetailId: String
            bookingId: String
        }
    `;
  }

  static resolver(type: RESOLVER_TYPE) {
    if (type === RESOLVER_TYPE.Query) return bookingResolver.queries;
    else return bookingResolver.mutations;
  }
}
