-- Which page a visit arrived on.
--
-- Nullable and additive: every existing row predates the column and there is
-- nothing to backfill it from, so null means "not recorded" rather than
-- "arrived on the home page". The admin reports read it that way.
--
-- No index. The Traffic tab groups the whole table, which at this shop's size
-- is tens of rows; an index on a column that is only ever aggregated would be
-- write cost for nothing.

-- AlterTable
ALTER TABLE "Visit" ADD COLUMN "landingPath" TEXT;
