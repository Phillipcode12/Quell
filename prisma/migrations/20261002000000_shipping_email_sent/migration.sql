-- When the shipping notice was handed to the email provider.
--
-- Nullable and additive. Existing orders read as "not recorded", which is
-- honest: the column did not exist when they shipped, so nothing was written.
-- That is deliberately NOT the same as "failed" for them, and the admin page
-- only warns about orders shipped after this column existed.

-- AlterTable
ALTER TABLE "Order" ADD COLUMN "shippingEmailSentAt" TIMESTAMP(3);
