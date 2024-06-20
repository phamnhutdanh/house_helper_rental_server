import { prismaClient } from "../../lib/db";

type CreateAccountInput = {
  email: string;
  name: string;
  accountId: string;
  isEmployee: boolean;
};

type UpdateCustomerInput = {
  customerId: string;
  name: string;
  phone: string;
  imageUri: string;
};

type UpdateEmployeeInput = {
  employeeId: string;
  name: string;
  phone: string;
  imageUri: string;
  description: string;
};
type CreateEmployeeAccountRequest = {
  name: string;
  email: string;
  hashPassword: string;
  keyPassword: string;
};

type ChangeNotiInput = {
  id: string;
  status: string;
};

type AccountStatusInput = {
  accountId: string;
  status: string;
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
        employee: {
          include: {
            employeeAddresses: {
              include: {
                address: true,
              },
            },
          },
        },
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
  getNotificationOfAccount: async (
    _: any,
    { accountId }: { accountId: string }
  ) => {
    const noti = await prismaClient.notificationAccount.findMany({
      where: {
        accountId: accountId,
      },
      include: {
        account: {
          include: {
            customer: true,
            employee: true,
          },
        },
      },
    });
    return noti;
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
          employee: {
            include: {
              employeeAddresses: {
                include: {
                  address: true,
                },
              },
            },
          },
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

      const notificationAccount1 =
        await prismaClient.notificationAccount.create({
          data: {
            accountId: "9f7fdb0b-dca2-4833-ac9c-073a783a0849",
            title: "An account was created",
            description: `An employee account ${responseAccountInfo.email} was created. Check on accounts list to view more details`,
          },
        });

      const notificationAccount2 =
        await prismaClient.notificationAccount.create({
          data: {
            accountId: responseEmployeeInfo.id,
            title: "Your account created successful",
            description: `Your account ${responseAccountInfo.email} was created. You can change another info in the settings`,
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
          employee: {
            include: {
              employeeAddresses: {
                include: {
                  address: true,
                },
              },
            },
          },
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

      const notificationAccount1 =
        await prismaClient.notificationAccount.create({
          data: {
            accountId: "9f7fdb0b-dca2-4833-ac9c-073a783a0849",
            title: "An account was created",
            description: `An customer account ${responseAccountInfo.email} was created. Check on accounts list to view more details`,
          },
        });

      const notificationAccount2 =
        await prismaClient.notificationAccount.create({
          data: {
            accountId: responseCustomerInfo.id,
            title: "Your account created successful",
            description: `Your account ${responseAccountInfo.email} was created. You can change another info in the settings`,
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
  updateCustomerInfo: async (
    _: any,
    {
      updateCustomerInput,
    }: {
      updateCustomerInput: UpdateCustomerInput;
    }
  ) => {
    let customerResponse;

    if (updateCustomerInput.imageUri == "") {
      customerResponse = await prismaClient.customer.update({
        where: {
          id: updateCustomerInput.customerId,
        },
        data: {
          name: updateCustomerInput.name,
          phoneNumber: updateCustomerInput.phone,
        },
      });
    } else {
      customerResponse = await prismaClient.customer.update({
        where: {
          id: updateCustomerInput.customerId,
        },
        data: {
          name: updateCustomerInput.name,
          phoneNumber: updateCustomerInput.phone,
          imageUri: updateCustomerInput.imageUri,
        },
      });
    }

    const responseAccountInfo = await prismaClient.accountInfo.findFirst({
      where: {
        customer: {
          id: customerResponse.id,
        },
      },
      include: {
        employee: {
          include: {
            employeeAddresses: {
              include: {
                address: true,
              },
            },
          },
        },
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

    return responseAccountInfo;
  },
  updateEmployeeInfo: async (
    _: any,
    {
      updateEmployeeInput,
    }: {
      updateEmployeeInput: UpdateEmployeeInput;
    }
  ) => {
    let employeeResponse;

    if (updateEmployeeInput.imageUri == "") {
      employeeResponse = await prismaClient.employee.update({
        where: {
          id: updateEmployeeInput.employeeId,
        },
        data: {
          name: updateEmployeeInput.name,
          phoneNumber: updateEmployeeInput.phone,
          description: updateEmployeeInput.description,
        },
      });
    } else {
      employeeResponse = await prismaClient.employee.update({
        where: {
          id: updateEmployeeInput.employeeId,
        },
        data: {
          name: updateEmployeeInput.name,
          phoneNumber: updateEmployeeInput.phone,
          imageUri: updateEmployeeInput.imageUri,
          description: updateEmployeeInput.description,
        },
      });
    }

    const responseAccountInfo = await prismaClient.accountInfo.findFirst({
      where: {
        employee: {
          id: employeeResponse.id,
        },
      },
      include: {
        employee: {
          include: {
            employeeAddresses: {
              include: {
                address: true,
              },
            },
          },
        },
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

    return responseAccountInfo;
  },
  changeNotiStatus: async (
    _: any,
    {
      changeNotiInput,
    }: {
      changeNotiInput: ChangeNotiInput;
    }
  ) => {
    const responseNoti = await prismaClient.notificationAccount.update({
      where: {
        id: changeNotiInput.id,
      },
      data: {
        status: changeNotiInput.status == "READ" ? "READ" : "UNREAD",
      },
    });

    return responseNoti;
  },
  updateAccountStatus: async (
    _: any,
    {
      accountStatusInput,
    }: {
      accountStatusInput: AccountStatusInput;
    }
  ) => {
    const res = await prismaClient.accountInfo.update({
      where: {
        id: accountStatusInput.accountId,
      },
      data: {
        status:
          accountStatusInput.status == "NONE"
            ? "NONE"
            : accountStatusInput.status == "BANNED"
            ? "BANNED"
            : "WARNING",
      },
    });

    return res;
  },
};

export const accountInfoResolver = { queries, mutations };
