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

const queries = {};

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
      });
    } else {
      customerAddressResponse = await prismaClient.customerAddress.create({
        data: {
          addressType: "NONE",
          addressId: addressResponse.id,
          customerId: createCustomerAddressInput.customerId,
        },
      });
    }

    return customerAddressResponse;
  },
};

export const addressResolver = { queries, mutations };
