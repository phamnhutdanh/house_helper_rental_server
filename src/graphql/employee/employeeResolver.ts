import { prismaClient } from "../../lib/db";

type CreateRatingEmployeeInput = {
  score: number;
  comment: string;
  bookingId: string;
  employeeId: string;
  customerId: string;
};

type FavoriteInput = {
  employeeId: string;
  customerId: string;
};

const queries = {
  getAllEmployees: async () => {
    const employees = await prismaClient.employee.findMany();
    return employees;
  },
  getTopEmployees: async () => {
    const topEmployees = await prismaClient.employee.findMany({
      orderBy: {
        averageRating: "desc",
      },
    });
    return topEmployees;
  },
  getFavoriteEmployeesOfCustomer: async (
    _: any,
    {
      customerId,
    }: {
      customerId: string;
    }
  ) => {
    const employees = await prismaClient.favoriteEmployee.findMany({
      where: {
        customerId: customerId,
      },
      include: {
        employee: {
          include: {
            accountInfo: true,
          },
        },
      },
    });
    return employees;
  },
  getEmployeeById: async (
    _: any,
    {
      id,
    }: {
      id: string;
    }
  ) => {
    const employee = await prismaClient.employee.findUnique({
      where: {
        id: id,
      },
      include: {
        employeeAddresses: {
          include: {
            address: true,
          },
        },
        ratings: {
          include: {
            customer: true,
          },
        },
        accountInfo: true,
      },
    });
    return employee;
  },
  checkFavorite: async (
    _: any,
    { favoriteInput }: { favoriteInput: FavoriteInput }
  ) => {
    const favorite = await prismaClient.favoriteEmployee.findFirst({
      where: {
        customerId: favoriteInput.customerId,
        employeeId: favoriteInput.employeeId,
      },
    });
    return favorite !== null;
  },
};

const mutations = {
  createRatingEmployee: async (
    _: any,
    {
      createRatingEmployeeInput,
    }: {
      createRatingEmployeeInput: CreateRatingEmployeeInput;
    }
  ) => {
    const response = await prismaClient.ratingEmployee.create({
      data: {
        score: createRatingEmployeeInput.score,
        comment: createRatingEmployeeInput.comment,
        customerId: createRatingEmployeeInput.customerId,
        bookingId: createRatingEmployeeInput.bookingId,
        employeeId: createRatingEmployeeInput.employeeId,
      },
    });

    const averageRating = await prismaClient.ratingEmployee.aggregate({
      where: {
        employeeId: createRatingEmployeeInput.employeeId,
      },
      _avg: {
        score: true,
      },
    });

    const updateEmployee = await prismaClient.employee.update({
      where: {
        id: createRatingEmployeeInput.employeeId,
      },
      data: {
        averageRating: averageRating._avg.score,
      },
    });
    return response;
  },
  addToFavorite: async (
    _: any,
    { favoriteInput }: { favoriteInput: FavoriteInput }
  ) => {
    const response = await prismaClient.favoriteEmployee.create({
      data: {
        customerId: favoriteInput.customerId,
        employeeId: favoriteInput.employeeId,
      },
    });
    return response;
  },
  removeFromFavorite: async (
    _: any,
    { favoriteInput }: { favoriteInput: FavoriteInput }
  ) => {
    const response = await prismaClient.favoriteEmployee.deleteMany({
      where: {
        customerId: favoriteInput.customerId,
        employeeId: favoriteInput.employeeId,
      },
    });
    return response;
  },
};

export const employeeResolver = { queries, mutations };
