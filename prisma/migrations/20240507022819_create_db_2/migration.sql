/*
  Warnings:

  - You are about to drop the `FavoriteEmployee` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `NotificationCustomer` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `NotificationEmployee` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "FavoriteEmployee" DROP CONSTRAINT "FavoriteEmployee_customerId_fkey";

-- DropForeignKey
ALTER TABLE "FavoriteEmployee" DROP CONSTRAINT "FavoriteEmployee_employeeId_fkey";

-- DropForeignKey
ALTER TABLE "NotificationCustomer" DROP CONSTRAINT "NotificationCustomer_customerId_fkey";

-- DropForeignKey
ALTER TABLE "NotificationEmployee" DROP CONSTRAINT "NotificationEmployee_employeeId_fkey";

-- DropTable
DROP TABLE "FavoriteEmployee";

-- DropTable
DROP TABLE "NotificationCustomer";

-- DropTable
DROP TABLE "NotificationEmployee";

-- CreateTable
CREATE TABLE "favorite_employees" (
    "id" TEXT NOT NULL,
    "customerId" TEXT NOT NULL,
    "employeeId" TEXT NOT NULL,

    CONSTRAINT "favorite_employees_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "notification_employees" (
    "id" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "imageUri" TEXT,
    "employeeId" TEXT NOT NULL,

    CONSTRAINT "notification_employees_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "notification_customers" (
    "id" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "imageUri" TEXT,
    "customerId" TEXT NOT NULL,

    CONSTRAINT "notification_customers_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "favorite_employees" ADD CONSTRAINT "favorite_employees_customerId_fkey" FOREIGN KEY ("customerId") REFERENCES "customers"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "favorite_employees" ADD CONSTRAINT "favorite_employees_employeeId_fkey" FOREIGN KEY ("employeeId") REFERENCES "employees"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "notification_employees" ADD CONSTRAINT "notification_employees_employeeId_fkey" FOREIGN KEY ("employeeId") REFERENCES "employees"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "notification_customers" ADD CONSTRAINT "notification_customers_customerId_fkey" FOREIGN KEY ("customerId") REFERENCES "customers"("id") ON DELETE CASCADE ON UPDATE CASCADE;
