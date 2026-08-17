-- Guest checkout: an order no longer requires an account.
--
-- Done now, while the orders table is still empty, because relaxing a NOT NULL
-- foreign key and backfilling a new NOT NULL column are both far more delicate
-- once there are live orders to preserve.

-- The owning account becomes optional.
ALTER TABLE "Order" ALTER COLUMN "userId" DROP NOT NULL;

-- Deleting an account must not delete its order history, which is financial
-- record. The order survives with a null user and keeps its own email.
ALTER TABLE "Order" DROP CONSTRAINT "Order_userId_fkey";
ALTER TABLE "Order" ADD CONSTRAINT "Order_userId_fkey"
  FOREIGN KEY ("userId") REFERENCES "User"("id")
  ON DELETE SET NULL ON UPDATE CASCADE;

-- Contact address, always populated. Added nullable and backfilled from the
-- owning account first, so this stays correct if replayed against a database
-- that already has orders.
ALTER TABLE "Order" ADD COLUMN "email" TEXT;

UPDATE "Order" o
SET "email" = u."email"
FROM "User" u
WHERE o."userId" = u."id" AND o."email" IS NULL;

-- Any order with no account to inherit from (there are none today) would block
-- the NOT NULL, so give it an unmistakable placeholder rather than fail.
UPDATE "Order"
SET "email" = 'unknown+' || "id" || '@invalid'
WHERE "email" IS NULL;

ALTER TABLE "Order" ALTER COLUMN "email" SET NOT NULL;

-- Guest orders are found by order number plus email, so that pair is looked up
-- on every guest order check.
CREATE INDEX "Order_email_idx" ON "Order"("email");
