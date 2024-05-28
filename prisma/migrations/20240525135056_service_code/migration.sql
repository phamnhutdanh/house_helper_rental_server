/*
  Warnings:

  - Added the required column `serviceCode` to the `services` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "services" ADD COLUMN     "serviceCode" TEXT NOT NULL;
