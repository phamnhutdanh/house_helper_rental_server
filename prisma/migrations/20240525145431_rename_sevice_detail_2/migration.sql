/*
  Warnings:

  - You are about to drop the column `additionalServiceId` on the `BookingServiceDetail` table. All the data in the column will be lost.
  - Added the required column `serviceDetailId` to the `BookingServiceDetail` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "BookingServiceDetail" DROP CONSTRAINT "BookingServiceDetail_additionalServiceId_fkey";

-- AlterTable
ALTER TABLE "BookingServiceDetail" DROP COLUMN "additionalServiceId",
ADD COLUMN     "serviceDetailId" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "BookingServiceDetail" ADD CONSTRAINT "BookingServiceDetail_serviceDetailId_fkey" FOREIGN KEY ("serviceDetailId") REFERENCES "additional_services"("id") ON DELETE CASCADE ON UPDATE CASCADE;
