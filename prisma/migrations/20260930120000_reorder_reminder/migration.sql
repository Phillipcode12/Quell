-- When the reorder reminder was sent.
--
-- Nullable and additive, so every existing order reads as "not yet reminded",
-- which is true. The 45-day grace window in lib/reorder.ts is what stops this
-- mailing every customer who has ever ordered on the first run.

-- AlterTable
ALTER TABLE "Order" ADD COLUMN "reorderEmailSentAt" TIMESTAMP(3);
