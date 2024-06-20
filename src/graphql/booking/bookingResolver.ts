import { prismaClient } from "../../lib/db";

type CreateBookingInput = {
  bookingTime: string;
  repeatStatus: string;
  totalPrice: number;
  note: string;
  paymentMethod: string;
  serviceId: string;
  accountId: string;
  customerAddressId: string;
};

type CreateBookingServiceDetailInput = {
  serviceDetailId: string;
};

type ChangeBookingStatusInput = {
  id: string;
  bookingStatus: string;
};

type EmployeeAcceptBookingInput = {
  bookingId: string;
  employeeId: string;
};

const queries = {
  getAllBookingOfCustomer: async (
    _: any,
    {
      customerId,
    }: {
      customerId: string;
    }
  ) => {
    const bookings = await prismaClient.booking.findMany({
      where: {
        customerId: customerId,
      },
      include: {
        customerAddress: {
          include: {
            address: true,
          },
        },
        service: true,
      },
    });
    return bookings;
  },
  getAllBooking: async (
    _: any,
    {
      employeeId,
    }: {
      employeeId: string;
    }
  ) => {
    const bookings = await prismaClient.booking.findMany({
      where: {
        OR: [
          {
            AND: [
              {
                employeeId: null,
              },
              {
                status: "PENDING",
              },
            ],
          },
          {
            employeeId: employeeId,
          },
        ],
      },
      include: {
        customerAddress: {
          include: {
            address: true,
          },
        },
        service: true,
      },
    });
    return bookings;
  },
  getBookingById: async (
    _: any,
    {
      id,
    }: {
      id: string;
    }
  ) => {
    const booking = await prismaClient.booking.findUnique({
      where: {
        id: id,
      },
      include: {
        ratingEmployee: true,
        customerAddress: {
          include: {
            address: true,
          },
        },
        bookingServiceDetails: {
          include: {
            serviceDetails: true,
          },
        },
      },
    });
    return booking;
  },
};

const mutations = {
  createBooking: async (
    _: any,
    {
      createBookingInput,
      createBookingServiceDetailListInput,
    }: {
      createBookingInput: CreateBookingInput;
      createBookingServiceDetailListInput: CreateBookingServiceDetailInput[];
    }
  ) => {
    let repeatStatus = createBookingInput.repeatStatus;
    let paymentMethod = createBookingInput.paymentMethod;

    const customer = await prismaClient.accountInfo.findUnique({
      where: {
        id: createBookingInput.accountId,
      },
      include: {
        customer: true,
      },
    });

    const responseBooking = await prismaClient.booking.create({
      data: {
        bookingTime: new Date(createBookingInput.bookingTime),
        repeatStatus:
          repeatStatus === "EVERY_DAY"
            ? "EVERY_DAY"
            : repeatStatus === "EVERY_WEEK"
            ? "EVERY_WEEK"
            : repeatStatus === "EVERY_MONTH"
            ? "EVERY_MONTH"
            : "NO_REPEAT",
        totalPrice: createBookingInput.totalPrice,
        note: createBookingInput.note,
        paymentMethod: paymentMethod === "COD" ? "COD" : "MOMO",
        serviceId: createBookingInput.serviceId,
        customerId: customer?.customer?.id || "",
        customerAddressId: createBookingInput.customerAddressId,
        status: "PENDING",
      },
      include: {
        customer: true,
      },
    });

    createBookingServiceDetailListInput.forEach(async (detail) => {
      await prismaClient.bookingServiceDetail.create({
        data: {
          bookingId: responseBooking.id,
          serviceDetailId: detail.serviceDetailId,
        },
      });
    });

    const notificationAccount2 = await prismaClient.notificationAccount.create({
      data: {
        accountId: responseBooking.customer.accountInfoId,
        title: "Booking created",
        description: `Thank you for your booking. Your booking will be seen by employee soon`,
      },
    });

    return responseBooking;
  },
  changeBookingStatus: async (
    _: any,
    {
      changeBookingStatusInput,
    }: {
      changeBookingStatusInput: ChangeBookingStatusInput;
    }
  ) => {
    const bookingResponse = await prismaClient.booking.update({
      where: {
        id: changeBookingStatusInput.id,
      },
      data: {
        status:
          changeBookingStatusInput.bookingStatus == "PENDING"
            ? "PENDING"
            : changeBookingStatusInput.bookingStatus == "ACCEPTED"
            ? "ACCEPTED"
            : changeBookingStatusInput.bookingStatus == "CANCELED"
            ? "CANCELED"
            : "COMPLETED",
      },
      include: {
        customer: true,
        employee: true,
      },
    });

    if (bookingResponse.status == "COMPLETED") {
      const notificationAccount2 =
        await prismaClient.notificationAccount.create({
          data: {
            accountId: bookingResponse.customer.accountInfoId,
            title: "Booking completed",
            description: `Thank you for your booking. Please rating ${bookingResponse.employee?.name} in history booking`,
          },
        });
    }

    return bookingResponse;
  },
  employeeAcceptBooking: async (
    _: any,
    {
      employeeAcceptBookingInput,
    }: {
      employeeAcceptBookingInput: EmployeeAcceptBookingInput;
    }
  ) => {
    const bookingResponse = await prismaClient.booking.update({
      where: {
        id: employeeAcceptBookingInput.bookingId,
      },
      data: {
        status: "ACCEPTED",
        employeeId: employeeAcceptBookingInput.employeeId,
      },
      include: {
        customer: true,
        employee: true,
      },
    });

    const notificationAccount2 = await prismaClient.notificationAccount.create({
      data: {
        accountId: bookingResponse.customer.accountInfoId,
        title: "Booking accepted",
        description: `Your booking was accepted by ${bookingResponse.employee?.name}`,
      },
    });

    return bookingResponse;
  },
};

export const bookingResolver = { queries, mutations };
