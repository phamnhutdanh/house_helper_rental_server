import { RESOLVER_TYPE } from "..";
import { bookingResolver } from "./bookingResolver";

export default class Booking {
  static query() {
    return `#graphql
        getAllBookingOfCustomer(customerId: String): [Booking]
        getAllBooking(employeeId: String): [Booking]
        getBookingById(id: String): Booking
    `;
  }

  static mutation() {
    return `#graphql
       createBooking(createBookingInput: CreateBookingInput,
                      createBookingServiceDetailListInput: [CreateBookingServiceDetailInput]): Booking
       changeBookingStatus(changeBookingStatusInput: ChangeBookingStatusInput): Booking
       employeeAcceptBooking(employeeAcceptBookingInput: EmployeeAcceptBookingInput): Booking
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

        input ChangeBookingStatusInput {
            id: String
            bookingStatus: String
        }

        input EmployeeAcceptBookingInput {
            bookingId: String
            employeeId: String
        }

        input CreateBookingInput {
            bookingTime: String
            repeatStatus: String
            totalPrice: Int
            note: String
            paymentMethod: String
            serviceId: String
            accountId: String
            customerAddressId: String
        }

        input CreateBookingServiceDetailInput {
            serviceDetailId: String
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
            service: Service
            customerId: String
            customerAddressId: String
            customerAddress: CustomerAddress
            employeeId: String
            bookingServiceDetails: [BookingServiceDetail]
            ratingEmployee: RatingEmployee
        }

        type BookingServiceDetail {    
            id: String
            serviceDetailId: String
            serviceDetails: ServiceDetails
            bookingId: String
        }
    `;
  }

  static resolver(type: RESOLVER_TYPE) {
    if (type === RESOLVER_TYPE.Query) return bookingResolver.queries;
    else return bookingResolver.mutations;
  }
}
