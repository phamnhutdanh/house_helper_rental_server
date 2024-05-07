import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  //init();
}

async function init() {}

main()
  .then(async () => {
    console.log("Seed");
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
