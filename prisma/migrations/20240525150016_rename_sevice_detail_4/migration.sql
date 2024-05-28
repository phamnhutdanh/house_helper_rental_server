/*
  Warnings:

  - You are about to drop the `additional_services` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "BookingServiceDetail" DROP CONSTRAINT "BookingServiceDetail_serviceDetailId_fkey";

-- DropForeignKey
ALTER TABLE "additional_services" DROP CONSTRAINT "additional_services_serviceId_fkey";

-- DropTable
DROP TABLE "additional_services";

-- CreateTable
CREATE TABLE "service_details" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "serviceDetailCode" TEXT NOT NULL,
    "description" TEXT DEFAULT '',
    "imageUri" TEXT DEFAULT '',
    "fee" DOUBLE PRECISION NOT NULL DEFAULT 0,
    "serviceId" TEXT NOT NULL,

    CONSTRAINT "service_details_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "service_details" ADD CONSTRAINT "service_details_serviceId_fkey" FOREIGN KEY ("serviceId") REFERENCES "services"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "BookingServiceDetail" ADD CONSTRAINT "BookingServiceDetail_serviceDetailId_fkey" FOREIGN KEY ("serviceDetailId") REFERENCES "service_details"("id") ON DELETE CASCADE ON UPDATE CASCADE;
