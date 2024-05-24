import { prismaClient } from "../../lib/db";

const queries = {
  getAllEmployees: async () => {
    const employees = await prismaClient.employee.findMany();
    return employees;
  },
  getTopEmployees: async () => {
    const topEmployees = await prismaClient.employee.findMany({
      take: 10,
      orderBy: {
        averageRating: "desc",
      },
    });
    return topEmployees;
  },
};

const mutations = {};

export const employeeResolver = { queries, mutations };
