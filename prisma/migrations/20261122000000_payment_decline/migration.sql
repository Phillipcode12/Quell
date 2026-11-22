-- The most recent declined card attempt on an order, recorded from the
-- Authorize.net webhook so the admin can see why a checkout didn't complete.
--
-- Additive: two nullable columns and a counter defaulting to 0. Existing
-- orders read as "no decline recorded", which is true of everything this
-- site has seen (declines were ignored before this).

-- AlterTable
ALTER TABLE "Order" ADD COLUMN "paymentDeclinedAt" TIMESTAMP(3),
ADD COLUMN "paymentDeclineReason" TEXT,
ADD COLUMN "paymentDeclineCount" INTEGER NOT NULL DEFAULT 0;
