import { prismaClient } from "../../lib/db";

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
      email,
    }: {
      email: string;
    }
  ) => {
    const response = await prismaClient.accountInfo
      .create({
        data: {
          email: email,
          role: "CUSTOMER",
        },
      })
      .then(async (account) => {
        // create user
        return true;
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log("createCustomerAccount errorCode: ", errorCode);
        console.log("createCustomerAccount errorMessage: ", errorMessage);
        return false;
      });

    return response;
  },
};

export const accountInfoResolver = { queries, mutations };
