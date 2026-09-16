-- Campaign attribution.
--
-- Nullable on both tables and with no default, so this is additive: every
-- existing row keeps working and reads as "no campaign", which is the truth
-- for traffic that arrived before any advertising existed.
--
-- The columns are duplicated on Order rather than joined from Visit on
-- purpose. Revenue per campaign is answerable this way without any link
-- between a visit and a buyer, which keeps the visit table unlinked to a
-- customer as designed.

-- AlterTable
ALTER TABLE "Visit" ADD COLUMN "utmSource" TEXT,
                    ADD COLUMN "utmMedium" TEXT,
                    ADD COLUMN "utmCampaign" TEXT,
                    ADD COLUMN "utmContent" TEXT;

-- AlterTable
ALTER TABLE "Order" ADD COLUMN "utmSource" TEXT,
                    ADD COLUMN "utmMedium" TEXT,
                    ADD COLUMN "utmCampaign" TEXT,
                    ADD COLUMN "utmContent" TEXT;

-- Campaign reporting groups by campaign over a date range, on both tables.
CREATE INDEX "Visit_utmCampaign_idx" ON "Visit"("utmCampaign");
CREATE INDEX "Order_utmCampaign_idx" ON "Order"("utmCampaign");
