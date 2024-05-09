import { prismaClient } from "../../lib/db";

type CreateCustomerAccountInput = {
  email: string;
  name: string;
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
        email: createCustomerAccountInput.email,
        role: "CUSTOMER",
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
};

export const accountInfoResolver = { queries, mutations };
