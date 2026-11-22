-- When the second (and last) abandoned-cart reminder was sent.
--
-- Additive and nullable: every existing order reads as "no second reminder
-- sent", and the cron only considers orders whose FIRST reminder went out
-- 3 to 5 days earlier, so old orders are never swept up by this.

-- AlterTable
ALTER TABLE "Order" ADD COLUMN "abandonedFollowUpSentAt" TIMESTAMP(3);
