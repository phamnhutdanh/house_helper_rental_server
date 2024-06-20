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
type CreateEmployeeAddressInput = {
  employeeId: string;
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
  getAllAddressOfEmployee: async (
    _: any,
    {
      employeeId,
    }: {
      employeeId: string;
    }
  ) => {
    const addresses = await prismaClient.employeeAddress.findMany({
      where: {
        employeeId: employeeId,
      },
      include: {
        address: true,
        employee: true,
      },
    });
    return addresses;
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
  removeCustomerAddress: async (
    _: any,
    {
      id,
    }: {
      id: string;
    }
  ) => {
    const customerAddress = await prismaClient.customerAddress.delete({
      where: {
        id: id,
      },
    });
    return customerAddress;
  },
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

  removeEmployeeAddress: async (
    _: any,
    {
      id,
    }: {
      id: string;
    }
  ) => {
    const address = await prismaClient.employeeAddress.delete({
      where: {
        id: id,
      },
    });
    return address;
  },
  createEmployeeAddress: async (
    _: any,
    {
      createAddressInput,
      createEmployeeAddressInput,
    }: {
      createAddressInput: CreateAddressInput;
      createEmployeeAddressInput: CreateEmployeeAddressInput;
    }
  ) => {
    const addressResponse = await prismaClient.address.create({
      data: {
        address: createAddressInput.address,
        fullName: createAddressInput.fullName,
        phone: createAddressInput.phone,
      },
    });

    let empAddressResponse;
    if (createEmployeeAddressInput.isDefault) {
      empAddressResponse = await prismaClient.employeeAddress.create({
        data: {
          addressType: "DEFAULT",
          addressId: addressResponse.id,
          employeeId: createEmployeeAddressInput.employeeId,
        },
        include: {
          address: true,
          employee: true,
        },
      });
    } else {
      empAddressResponse = await prismaClient.employeeAddress.create({
        data: {
          addressType: "NONE",
          addressId: addressResponse.id,
          employeeId: createEmployeeAddressInput.employeeId,
        },
        include: {
          employee: true,
          address: true,
        },
      });
    }

    return empAddressResponse;
  },
};

export const addressResolver = { queries, mutations };
