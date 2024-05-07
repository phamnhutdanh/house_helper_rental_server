/*
  Warnings:

  - You are about to drop the column `isDefault` on the `customer_addresses` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "customer_addresses" DROP COLUMN "isDefault",
ADD COLUMN     "addressType" "AddressType" NOT NULL DEFAULT 'NONE';
