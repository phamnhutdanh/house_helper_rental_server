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

const queries = {};

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
        bookingTime: createBookingInput.bookingTime,
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
    });

    createBookingServiceDetailListInput.forEach(async (detail) => {
      await prismaClient.bookingServiceDetail.create({
        data: {
          bookingId: responseBooking.id,
          serviceDetailId: detail.serviceDetailId,
        },
      });
    });

    return responseBooking;
  },
};

export const bookingResolver = { queries, mutations };
