/*
  Warnings:

  - You are about to alter the column `score` on the `ratings_employee` table. The data in that column could be lost. The data in that column will be cast from `DoublePrecision` to `Integer`.

*/
-- AlterTable
ALTER TABLE "ratings_employee" ALTER COLUMN "score" SET DATA TYPE INTEGER;
