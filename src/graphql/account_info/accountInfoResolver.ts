import { prismaClient } from "../../lib/db";

type CreateCustomerAccountInput = {
  email: string;
  name: string;
  accountId: string;
};

type CreateEmployeeAccountInput = {
  email: string;
  name: string;
  accountId: string;
};

type CreateEmployeeAccountRequest = {
  name: string;
  email: string;
  hashPassword: string;
  keyPassword: string;
};

type CreateSessionInput = {
  sessionToken: string;
  expires: string;
  accessToken: string;

  expiresAt: number;
  expiresIn: number;
  isExpired: boolean;
  providerRefreshToken: string;
  providerToken: string;
  refreshToken: string;
  tokenType: string;
};

const queries = {
  getAllAccountInfos: async () => {
    const accountInfos = await prismaClient.accountInfo.findMany();
    return accountInfos;
  },
  getAccountInfoById: async (_: any, { id }: { id: string }) => {
    const accountInfo = await prismaClient.accountInfo.findUnique({
      where: {
        id: id,
      },
    });
    return accountInfo;
  },
  getAllEmployeeAccountRequests: async () => {
    const accountRequests = await prismaClient.employeeAccountRequest.findMany();
    return accountRequests;
  },
};

const mutations = {
  createCustomerAccount: async (
    _: any,
    {
      createCustomerAccountInput,
      createSessionInput,
    }: {
      createCustomerAccountInput: CreateCustomerAccountInput;
      createSessionInput: CreateSessionInput;
    }
  ) => {
    const responseAccountInfo = await prismaClient.accountInfo.create({
      data: {
        id: createCustomerAccountInput.accountId,
        email: createCustomerAccountInput.email,
        accountRole: "CUSTOMER",
        status: "NONE",
      },
    });

    const responseSessionInfo = await prismaClient.sessionInfo.create({
      data: {
        sessionToken: createSessionInput.sessionToken,
        expires: createSessionInput.expires,
        accessToken: createSessionInput.accessToken,

        expiresAt: createSessionInput.expiresAt,
        expiresIn: createSessionInput.expiresIn,
        isExpired: createSessionInput.isExpired,
        providerRefreshToken: createSessionInput.providerRefreshToken,
        providerToken: createSessionInput.providerToken,
        refreshToken: createSessionInput.refreshToken,
        tokenType: createSessionInput.tokenType,
        accountInfoId: responseAccountInfo.id,
      },
    });

    const responseCustomerInfo = await prismaClient.customer.create({
      data: {
        name: createCustomerAccountInput.name,
        accountInfoId: responseAccountInfo.id,
      },
    });

    return responseAccountInfo;
  },
  createEmployeeAccount: async (
    _: any,
    {
      createEmployeeAccountInput,
      createSessionInput,
    }: {
      createEmployeeAccountInput: CreateEmployeeAccountInput;
      createSessionInput: CreateSessionInput;
    }
  ) => {
    const responseAccountInfo = await prismaClient.accountInfo.create({
      data: {
        id: createEmployeeAccountInput.accountId,
        email: createEmployeeAccountInput.email,
        accountRole: "EMPLOYEE",
        status: "NONE",
      },
    });

    const responseSessionInfo = await prismaClient.sessionInfo.create({
      data: {
        sessionToken: createSessionInput.sessionToken,
        expires: createSessionInput.expires,
        accessToken: createSessionInput.accessToken,

        expiresAt: createSessionInput.expiresAt,
        expiresIn: createSessionInput.expiresIn,
        isExpired: createSessionInput.isExpired,
        providerRefreshToken: createSessionInput.providerRefreshToken,
        providerToken: createSessionInput.providerToken,
        refreshToken: createSessionInput.refreshToken,
        tokenType: createSessionInput.tokenType,
        accountInfoId: responseAccountInfo.id,
      },
    });

    const responseEmployeeInfo = await prismaClient.employee.create({
      data: {
        name: createEmployeeAccountInput.name,
        accountInfoId: responseAccountInfo.id,
      },
    });

    return responseAccountInfo;
  },
  createEmployeeAccountRequest: async (
    _: any,
    {
      createEmployeeAccountRequest,
    }: {
      createEmployeeAccountRequest: CreateEmployeeAccountRequest;
    }
  ) => {
    const responseRequest = await prismaClient.employeeAccountRequest.create({
      data: {
        name: createEmployeeAccountRequest.name,
        email: createEmployeeAccountRequest.email,
        hashPassword: createEmployeeAccountRequest.hashPassword,
        keyPassword: createEmployeeAccountRequest.keyPassword,
      },
    });

    return responseRequest;
  },
};

export const accountInfoResolver = { queries, mutations };
