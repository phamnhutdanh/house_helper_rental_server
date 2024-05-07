/*
  Warnings:

  - You are about to drop the `BookingEmployee` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "BookingEmployee" DROP CONSTRAINT "BookingEmployee_bookingId_fkey";

-- DropForeignKey
ALTER TABLE "BookingEmployee" DROP CONSTRAINT "BookingEmployee_employeeId_fkey";

-- DropTable
DROP TABLE "BookingEmployee";

-- CreateTable
CREATE TABLE "booking_employees" (
    "id" TEXT NOT NULL,
    "employeeId" TEXT NOT NULL,
    "bookingId" TEXT NOT NULL,

    CONSTRAINT "booking_employees_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "booking_employees" ADD CONSTRAINT "booking_employees_employeeId_fkey" FOREIGN KEY ("employeeId") REFERENCES "employees"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "booking_employees" ADD CONSTRAINT "booking_employees_bookingId_fkey" FOREIGN KEY ("bookingId") REFERENCES "bookings"("id") ON DELETE CASCADE ON UPDATE CASCADE;
