/*
  Warnings:

  - You are about to drop the column `jobId` on the `bookings` table. All the data in the column will be lost.
  - You are about to drop the column `numsOfEmployee` on the `bookings` table. All the data in the column will be lost.
  - You are about to drop the `employee_jobs` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `jobs` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `schedule_jobs` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `customerId` to the `bookings` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "RepeatBookingStatus" AS ENUM ('NO_REPEAT', 'EVERY_DAY', 'EVERY_WEEK', 'EVERY_MONTH');

-- DropForeignKey
ALTER TABLE "bookings" DROP CONSTRAINT "bookings_jobId_fkey";

-- DropForeignKey
ALTER TABLE "employee_jobs" DROP CONSTRAINT "employee_jobs_employeeId_fkey";

-- DropForeignKey
ALTER TABLE "employee_jobs" DROP CONSTRAINT "employee_jobs_jobId_fkey";

-- DropForeignKey
ALTER TABLE "schedule_jobs" DROP CONSTRAINT "schedule_jobs_jobId_fkey";

-- DropForeignKey
ALTER TABLE "schedule_jobs" DROP CONSTRAINT "schedule_jobs_scheduleId_fkey";

-- AlterTable
ALTER TABLE "bookings" DROP COLUMN "jobId",
DROP COLUMN "numsOfEmployee",
ADD COLUMN     "customerId" TEXT NOT NULL,
ADD COLUMN     "repeatStatus" "RepeatBookingStatus" NOT NULL DEFAULT 'NO_REPEAT';

-- DropTable
DROP TABLE "employee_jobs";

-- DropTable
DROP TABLE "jobs";

-- DropTable
DROP TABLE "schedule_jobs";

-- CreateTable
CREATE TABLE "additional_services" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "additionalServiceCode" TEXT NOT NULL,
    "description" TEXT DEFAULT '',
    "imageUri" TEXT DEFAULT '',
    "serviceId" TEXT NOT NULL,

    CONSTRAINT "additional_services_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "BookingAdditionalService" (
    "id" TEXT NOT NULL,
    "additionalServiceId" TEXT NOT NULL,
    "bookingId" TEXT NOT NULL,

    CONSTRAINT "BookingAdditionalService_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "additional_services" ADD CONSTRAINT "additional_services_serviceId_fkey" FOREIGN KEY ("serviceId") REFERENCES "services"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "BookingAdditionalService" ADD CONSTRAINT "BookingAdditionalService_additionalServiceId_fkey" FOREIGN KEY ("additionalServiceId") REFERENCES "additional_services"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "BookingAdditionalService" ADD CONSTRAINT "BookingAdditionalService_bookingId_fkey" FOREIGN KEY ("bookingId") REFERENCES "bookings"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "bookings" ADD CONSTRAINT "bookings_customerId_fkey" FOREIGN KEY ("customerId") REFERENCES "customers"("id") ON DELETE CASCADE ON UPDATE CASCADE;
