import { prismaClient } from "../../lib/db";

type CreateAccountInput = {
  email: string;
  name: string;
  accountId: string;
  isEmployee: boolean;
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
    const accountInfos = await prismaClient.accountInfo.findMany({
      where: {
        accountRole: {
          not: {
            equals: "ADMIN",
          },
        },
      },
      include: {
        employee: true,
        customer: {
          include: {
            customerAddresses: {
              include: {
                address: true,
              },
            },
          },
        },
      },
    });
    return accountInfos;
  },
  getAccountInfoById: async (_: any, { id }: { id: string }) => {
    const accountInfo = await prismaClient.accountInfo.findUnique({
      where: {
        id: id,
      },
      include: {
        employee: true,
        customer: {
          include: {
            customerAddresses: {
              include: {
                address: true,
              },
            },
          },
        },
      },
    });
    return accountInfo;
  },
  getAllEmployeeAccountRequests: async () => {
    const accountRequests =
      await prismaClient.employeeAccountRequest.findMany();
    return accountRequests;
  },
};

const mutations = {
  createAccount: async (
    _: any,
    {
      createAccountInput,
      createSessionInput,
    }: {
      createAccountInput: CreateAccountInput;
      createSessionInput: CreateSessionInput;
    }
  ) => {
    let responseAccountInfo;

    if (createAccountInput.isEmployee) {
      responseAccountInfo = await prismaClient.accountInfo.create({
        data: {
          id: createAccountInput.accountId,
          email: createAccountInput.email,
          accountRole: "EMPLOYEE",
          status: "NONE",
        },
        include: {
          customer: {
            include: {
              customerAddresses: {
                include: {
                  address: true,
                },
              },
            },
          },
        },
      });

      const responseEmployeeInfo = await prismaClient.employee.create({
        data: {
          name: createAccountInput.name,
          accountInfoId: responseAccountInfo.id,
          imageUri:
            "https://ktlpvxvfzxexvghactxx.supabase.co/storage/v1/object/sign/helpu_buckets/default_avatar.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJoZWxwdV9idWNrZXRzL2RlZmF1bHRfYXZhdGFyLnBuZyIsImlhdCI6MTcxNjUxMzgwMiwiZXhwIjoxNzQ4MDQ5ODAyfQ.gcbgZYp4FxUYWClgHSGLrE-KaWXXmHhX4qx-rXfi_Mo&t=2024-05-24T01%3A23%3A25.000Z",
        },
      });
    } else {
      responseAccountInfo = await prismaClient.accountInfo.create({
        data: {
          id: createAccountInput.accountId,
          email: createAccountInput.email,
          accountRole: "CUSTOMER",
          status: "NONE",
        },
        include: {
          customer: {
            include: {
              customerAddresses: {
                include: {
                  address: true,
                },
              },
            },
          },
        },
      });

      const responseCustomerInfo = await prismaClient.customer.create({
        data: {
          name: createAccountInput.name,
          accountInfoId: responseAccountInfo.id,
          imageUri:
            "https://ktlpvxvfzxexvghactxx.supabase.co/storage/v1/object/sign/helpu_buckets/default_avatar.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJoZWxwdV9idWNrZXRzL2RlZmF1bHRfYXZhdGFyLnBuZyIsImlhdCI6MTcxNjUxMzgwMiwiZXhwIjoxNzQ4MDQ5ODAyfQ.gcbgZYp4FxUYWClgHSGLrE-KaWXXmHhX4qx-rXfi_Mo&t=2024-05-24T01%3A23%3A25.000Z",
        },
      });
    }

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
