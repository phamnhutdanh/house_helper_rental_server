/*
  Warnings:

  - You are about to drop the column `additionalServiceCode` on the `additional_services` table. All the data in the column will be lost.
  - You are about to drop the `BookingAdditionalService` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `serviceDetailCode` to the `additional_services` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "BookingAdditionalService" DROP CONSTRAINT "BookingAdditionalService_additionalServiceId_fkey";

-- DropForeignKey
ALTER TABLE "BookingAdditionalService" DROP CONSTRAINT "BookingAdditionalService_bookingId_fkey";

-- AlterTable
ALTER TABLE "additional_services" DROP COLUMN "additionalServiceCode",
ADD COLUMN     "serviceDetailCode" TEXT NOT NULL;

-- DropTable
DROP TABLE "BookingAdditionalService";

-- CreateTable
CREATE TABLE "BookingServiceDetail" (
    "id" TEXT NOT NULL,
    "additionalServiceId" TEXT NOT NULL,
    "bookingId" TEXT NOT NULL,

    CONSTRAINT "BookingServiceDetail_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "BookingServiceDetail" ADD CONSTRAINT "BookingServiceDetail_additionalServiceId_fkey" FOREIGN KEY ("additionalServiceId") REFERENCES "additional_services"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "BookingServiceDetail" ADD CONSTRAINT "BookingServiceDetail_bookingId_fkey" FOREIGN KEY ("bookingId") REFERENCES "bookings"("id") ON DELETE CASCADE ON UPDATE CASCADE;
