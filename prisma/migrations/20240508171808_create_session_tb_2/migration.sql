/*
  Warnings:

  - You are about to drop the `Session` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Session" DROP CONSTRAINT "Session_accountInfoId_fkey";

-- DropTable
DROP TABLE "Session";

-- CreateTable
CREATE TABLE "SessionInfo" (
    "id" TEXT NOT NULL,
    "sessionToken" TEXT NOT NULL,
    "expires" TIMESTAMP(3) NOT NULL,
    "accessToken" TEXT NOT NULL,
    "expiresAt" INTEGER,
    "expiresIn" INTEGER,
    "isExpired" BOOLEAN,
    "providerRefreshToken" TEXT,
    "providerToken" TEXT,
    "refreshToken" TEXT,
    "tokenType" TEXT,
    "accountInfoId" TEXT NOT NULL,

    CONSTRAINT "SessionInfo_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "SessionInfo_sessionToken_key" ON "SessionInfo"("sessionToken");

-- AddForeignKey
ALTER TABLE "SessionInfo" ADD CONSTRAINT "SessionInfo_accountInfoId_fkey" FOREIGN KEY ("accountInfoId") REFERENCES "accounts_info"("id") ON DELETE CASCADE ON UPDATE CASCADE;
