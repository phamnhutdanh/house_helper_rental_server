/*
  Warnings:

  - Added the required column `updatedAt` to the `notification_customers` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedAt` to the `notification_employees` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "notification_customers" ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL;

-- AlterTable
ALTER TABLE "notification_employees" ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL;
