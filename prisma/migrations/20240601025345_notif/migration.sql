/*
  Warnings:

  - Added the required column `title` to the `notification_customers` table without a default value. This is not possible if the table is not empty.
  - Added the required column `title` to the `notification_employees` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "notification_customers" ADD COLUMN     "title" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "notification_employees" ADD COLUMN     "title" TEXT NOT NULL;