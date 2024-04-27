
enum UserRole {
  USER,
  ADMIN,
  SHOP_OWNER,
}

const queries = {
  getAllAccounts: async () => {
  },
};

const mutations = {
  createUserAccount: async (
    _: any,
    {
      email,
      firebaseUID,
    }: {
      email: string;
      firebaseUID: string;
    }
  ) => {

  },
};

export const userAccountResolver = { queries, mutations };
