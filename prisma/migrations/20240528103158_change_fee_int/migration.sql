/*
  Warnings:

  - You are about to alter the column `totalPrice` on the `bookings` table. The data in that column could be lost. The data in that column will be cast from `DoublePrecision` to `Integer`.
  - You are about to alter the column `fee` on the `service_details` table. The data in that column could be lost. The data in that column will be cast from `DoublePrecision` to `Integer`.
  - You are about to drop the `BookingServiceDetail` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "BookingServiceDetail" DROP CONSTRAINT "BookingServiceDetail_bookingId_fkey";

-- DropForeignKey
ALTER TABLE "BookingServiceDetail" DROP CONSTRAINT "BookingServiceDetail_serviceDetailId_fkey";

-- AlterTable
ALTER TABLE "bookings" ALTER COLUMN "totalPrice" SET DATA TYPE INTEGER;

-- AlterTable
ALTER TABLE "service_details" ALTER COLUMN "fee" SET DEFAULT 0,
ALTER COLUMN "fee" SET DATA TYPE INTEGER;

-- DropTable
DROP TABLE "BookingServiceDetail";

-- CreateTable
CREATE TABLE "booking_service_details" (
    "id" TEXT NOT NULL,
    "serviceDetailId" TEXT NOT NULL,
    "bookingId" TEXT NOT NULL,

    CONSTRAINT "booking_service_details_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "booking_service_details" ADD CONSTRAINT "booking_service_details_serviceDetailId_fkey" FOREIGN KEY ("serviceDetailId") REFERENCES "service_details"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "booking_service_details" ADD CONSTRAINT "booking_service_details_bookingId_fkey" FOREIGN KEY ("bookingId") REFERENCES "bookings"("id") ON DELETE CASCADE ON UPDATE CASCADE;
