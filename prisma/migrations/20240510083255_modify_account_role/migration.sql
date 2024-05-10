/*
  Warnings:

  - You are about to drop the column `role` on the `accounts_info` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "accounts_info" DROP COLUMN "role",
ADD COLUMN     "accountRole" "AccountInfoRole" NOT NULL DEFAULT 'CUSTOMER';
