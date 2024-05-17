/*
  Warnings:

  - You are about to drop the `SessionInfo` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "SessionInfo" DROP CONSTRAINT "SessionInfo_accountInfoId_fkey";

-- DropTable
DROP TABLE "SessionInfo";

-- CreateTable
CREATE TABLE "sessions_info" (
    "id" TEXT NOT NULL,
    "sessionToken" TEXT NOT NULL,
    "expires" TIMESTAMP(3) NOT NULL,
    "accessToken" TEXT NOT NULL,
    "expiresAt" INTEGER DEFAULT 0,
    "expiresIn" INTEGER DEFAULT 0,
    "isExpired" BOOLEAN DEFAULT false,
    "providerRefreshToken" TEXT DEFAULT '',
    "providerToken" TEXT DEFAULT '',
    "refreshToken" TEXT DEFAULT '',
    "tokenType" TEXT DEFAULT '',
    "accountInfoId" TEXT NOT NULL,

    CONSTRAINT "sessions_info_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "sessions_info_sessionToken_key" ON "sessions_info"("sessionToken");

-- CreateIndex
CREATE UNIQUE INDEX "sessions_info_accountInfoId_key" ON "sessions_info"("accountInfoId");

-- AddForeignKey
ALTER TABLE "sessions_info" ADD CONSTRAINT "sessions_info_accountInfoId_fkey" FOREIGN KEY ("accountInfoId") REFERENCES "accounts_info"("id") ON DELETE CASCADE ON UPDATE CASCADE;
