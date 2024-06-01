-- CreateEnum
CREATE TYPE "NotificationStatus" AS ENUM ('READ', 'UNREAD');

-- AlterTable
ALTER TABLE "notification_customers" ADD COLUMN     "status" "NotificationStatus" NOT NULL DEFAULT 'UNREAD';

-- AlterTable
ALTER TABLE "notification_employees" ADD COLUMN     "status" "NotificationStatus" NOT NULL DEFAULT 'UNREAD';
