-- When the abandoned-cart email was sent.
--
-- Nullable and additive: every existing order reads as "not yet emailed",
-- which is true. The cron only looks at orders newer than its window, so
-- adding this does not cause a backlog of mail to nine-day-old carts.
--
-- The flag is what makes the job idempotent. Vercel cron delivery is best
-- effort and can invoke the same scheduled run more than once, so the query
-- has to be able to tell what it has already done rather than trusting that it
-- ran exactly once.

-- AlterTable
ALTER TABLE "Order" ADD COLUMN "abandonedEmailSentAt" TIMESTAMP(3);

-- The cron filters on status and age every day; this keeps that cheap as the
-- order table grows.
CREATE INDEX "Order_status_createdAt_idx" ON "Order"("status", "createdAt");
