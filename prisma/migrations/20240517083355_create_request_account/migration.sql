/*
  Warnings:

  - You are about to drop the column `accountId` on the `customers` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[accountInfoId]` on the table `customers` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `accountInfoId` to the `customers` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "EmployeeAccountStatus" AS ENUM ('PENDING', 'ACCEPTED', 'CANCELED');

-- DropForeignKey
ALTER TABLE "customers" DROP CONSTRAINT "customers_accountId_fkey";

-- DropIndex
DROP INDEX "customers_accountId_key";

-- AlterTable
ALTER TABLE "customers" DROP COLUMN "accountId",
ADD COLUMN     "accountInfoId" TEXT NOT NULL;

-- CreateTable
CREATE TABLE "employee_account_requests" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "hashPassword" TEXT NOT NULL,
    "keyPassword" TEXT NOT NULL,
    "status" "EmployeeAccountStatus" NOT NULL DEFAULT 'PENDING',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "employee_account_requests_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "customers_accountInfoId_key" ON "customers"("accountInfoId");

-- AddForeignKey
ALTER TABLE "customers" ADD CONSTRAINT "customers_accountInfoId_fkey" FOREIGN KEY ("accountInfoId") REFERENCES "accounts_info"("id") ON DELETE CASCADE ON UPDATE CASCADE;
