/*
  Warnings:

  - You are about to drop the `booking_employees` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "booking_employees" DROP CONSTRAINT "booking_employees_bookingId_fkey";

-- DropForeignKey
ALTER TABLE "booking_employees" DROP CONSTRAINT "booking_employees_employeeId_fkey";

-- AlterTable
ALTER TABLE "bookings" ADD COLUMN     "employeeId" TEXT;

-- DropTable
DROP TABLE "booking_employees";

-- AddForeignKey
ALTER TABLE "bookings" ADD CONSTRAINT "bookings_employeeId_fkey" FOREIGN KEY ("employeeId") REFERENCES "employees"("id") ON DELETE CASCADE ON UPDATE CASCADE;
