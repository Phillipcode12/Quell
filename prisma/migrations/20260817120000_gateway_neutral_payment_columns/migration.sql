-- Move the payment columns off Stripe-specific names.
--
-- Written by hand rather than taken from `prisma migrate diff`, which renders
-- renames as DROP + ADD and would discard the column contents. RENAME COLUMN
-- preserves data, so this is safe to run against a database with live orders.
--
-- Indexes are renamed alongside their columns: Postgres keeps the old index
-- name after a column rename, and leaving them mismatched makes every future
-- `migrate diff` try to "fix" them.

-- User: gateway customer profile
ALTER TABLE "User" RENAME COLUMN "stripeCustomerId" TO "paymentProfileId";
ALTER INDEX "User_stripeCustomerId_key" RENAME TO "User_paymentProfileId_key";

-- Order: reserved recurring-billing columns (unused until the ARB phase)
ALTER TABLE "Order" RENAME COLUMN "stripeSubscriptionId" TO "paymentSubscriptionId";
ALTER TABLE "Order" RENAME COLUMN "stripeInvoiceId" TO "paymentInvoiceId";
ALTER INDEX "Order_stripeInvoiceId_key" RENAME TO "Order_paymentInvoiceId_key";

-- Order: the gateway transaction id, written when the payment webhook lands.
ALTER TABLE "Order" RENAME COLUMN "stripePaymentIntentId" TO "paymentTransactionId";

-- Accept Hosted has no equivalent of a Checkout Session, so this reference has
-- nothing to hold. Correlation moves to "orderNumber" below.
ALTER TABLE "Order" DROP COLUMN "stripeSessionId";

-- Short, human-readable reference used as the gateway's invoiceNumber, which
-- is capped at 20 characters and so cannot hold the 25-character cuid id.
-- Added nullable and backfilled before the NOT NULL, so this migration stays
-- correct if it is ever replayed against a database that already has orders.
ALTER TABLE "Order" ADD COLUMN "orderNumber" TEXT;

UPDATE "Order"
SET "orderNumber" = 'Q-' || upper(substr(md5(random()::text || "id"), 1, 8))
WHERE "orderNumber" IS NULL;

ALTER TABLE "Order" ALTER COLUMN "orderNumber" SET NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Order_orderNumber_key" ON "Order"("orderNumber");

-- CreateIndex
CREATE UNIQUE INDEX "Order_paymentTransactionId_key" ON "Order"("paymentTransactionId");
