-- When the order confirmation was handed to the email provider.
--
-- Nullable and additive, matching shippingEmailSentAt. Existing paid orders
-- are backfilled separately rather than left null, because a null here is
-- read as "the receipt did not go" and inventing that about a customer who
-- did get one would be worse than recording nothing at all.

-- AlterTable
ALTER TABLE "Order" ADD COLUMN "confirmationEmailSentAt" TIMESTAMP(3);
