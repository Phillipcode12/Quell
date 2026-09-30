-- Optional contact number on an order.
--
-- Nullable and additive: every existing order reads as "not given", which is
-- true, and nothing downstream requires it.

-- AlterTable
ALTER TABLE "Order" ADD COLUMN "phone" TEXT;
