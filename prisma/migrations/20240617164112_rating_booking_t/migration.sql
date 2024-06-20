/*
  Warnings:

  - A unique constraint covering the columns `[bookingId]` on the table `ratings_employee` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "ratings_employee_bookingId_key" ON "ratings_employee"("bookingId");
