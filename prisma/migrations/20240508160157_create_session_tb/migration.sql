-- CreateTable
CREATE TABLE "Session" (
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

    CONSTRAINT "Session_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Session_sessionToken_key" ON "Session"("sessionToken");

-- AddForeignKey
ALTER TABLE "Session" ADD CONSTRAINT "Session_accountInfoId_fkey" FOREIGN KEY ("accountInfoId") REFERENCES "accounts_info"("id") ON DELETE CASCADE ON UPDATE CASCADE;
