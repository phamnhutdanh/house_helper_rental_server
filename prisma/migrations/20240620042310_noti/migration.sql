/*
  Warnings:

  - You are about to drop the `notification_customers` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `notification_employees` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "notification_customers" DROP CONSTRAINT "notification_customers_customerId_fkey";

-- DropForeignKey
ALTER TABLE "notification_employees" DROP CONSTRAINT "notification_employees_employeeId_fkey";

-- DropTable
DROP TABLE "notification_customers";

-- DropTable
DROP TABLE "notification_employees";

-- CreateTable
CREATE TABLE "notification_accounts" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "status" "NotificationStatus" NOT NULL DEFAULT 'UNREAD',
    "imageUri" TEXT DEFAULT '',
    "accountId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "notification_accounts_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "notification_accounts" ADD CONSTRAINT "notification_accounts_accountId_fkey" FOREIGN KEY ("accountId") REFERENCES "accounts_info"("id") ON DELETE CASCADE ON UPDATE CASCADE;
