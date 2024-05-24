-- AlterTable
ALTER TABLE "customers" ALTER COLUMN "phoneNumber" SET DEFAULT '';

-- AlterTable
ALTER TABLE "employees" ALTER COLUMN "phoneNumber" SET DEFAULT '';

-- AlterTable
ALTER TABLE "notification_customers" ALTER COLUMN "imageUri" SET DEFAULT '';

-- AlterTable
ALTER TABLE "notification_employees" ALTER COLUMN "imageUri" SET DEFAULT '';

-- AlterTable
ALTER TABLE "services" ALTER COLUMN "description" SET DEFAULT '',
ALTER COLUMN "imageUri" SET DEFAULT '';
