import { prismaClient } from "../../lib/db";

type CreateAddressInput = {
  address: string;
  fullName: string;
  phone: string;
};

type CreateCustomerAddressInput = {
  customerId: string;
  isDefault: boolean;
};

const queries = {
  getAllAddressOfCustomer: async (
    _: any,
    {
      customerId,
    }: {
      customerId: string;
    }
  ) => {
    const customerAddress = await prismaClient.customerAddress.findMany({
      where: {
        customerId: customerId,
      },
      include: {
        address: true,
        customer: true,
      },
    });
    return customerAddress;
  },
  getCustomerAddressById: async (
    _: any,
    {
      id,
    }: {
      id: string;
    }
  ) => {
    const customerAddress = await prismaClient.customerAddress.findUnique({
      where: {
        id: id,
      },
      include: {
        address: true,
        customer: true,
      },
    });
    return customerAddress;
  },
};

const mutations = {
  createCustomerAddress: async (
    _: any,
    {
      createAddressInput,
      createCustomerAddressInput,
    }: {
      createAddressInput: CreateAddressInput;
      createCustomerAddressInput: CreateCustomerAddressInput;
    }
  ) => {
    const addressResponse = await prismaClient.address.create({
      data: {
        address: createAddressInput.address,
        fullName: createAddressInput.fullName,
        phone: createAddressInput.phone,
      },
    });

    let customerAddressResponse;
    if (createCustomerAddressInput.isDefault) {
      customerAddressResponse = await prismaClient.customerAddress.create({
        data: {
          addressType: "DEFAULT",
          addressId: addressResponse.id,
          customerId: createCustomerAddressInput.customerId,
        },
        include: {
          address: true,
          customer: true,
        },
      });
    } else {
      customerAddressResponse = await prismaClient.customerAddress.create({
        data: {
          addressType: "NONE",
          addressId: addressResponse.id,
          customerId: createCustomerAddressInput.customerId,
        },
        include: {
          customer: true,
          address: true,
        },
      });
    }

    return customerAddressResponse;
  },
};

export const addressResolver = { queries, mutations };
