import { prismaClient } from "../../lib/db";

const queries = {
  getAllServices: async () => {
    const services = await prismaClient.service.findMany();
    return services;
  },
  getServiceById: async (_: any, { id }: { id: string }) => {
    const service = await prismaClient.service.findUnique({
      where: {
        id: id,
      },
    });
    return service;
  },
};

const mutations = {};

export const serviceResolver = { queries, mutations };
