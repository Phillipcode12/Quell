/*
  Warnings:

  - You are about to drop the column `prescriptionRef` on the `Order` table. All the data in the column will be lost.
  - You are about to drop the column `prescriptionStatus` on the `Order` table. All the data in the column will be lost.
  - You are about to drop the column `requiresRx` on the `Product` table. All the data in the column will be lost.
  - You are about to drop the column `strength` on the `Product` table. All the data in the column will be lost.
  - You are about to drop the column `volumeMl` on the `Product` table. All the data in the column will be lost.
  - Added the required column `sizeLabel` to the `Product` table without a default value. This is not possible if the table is not empty.
  - Added the required column `tagline` to the `Product` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Order" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "userId" TEXT NOT NULL,
    "status" TEXT NOT NULL DEFAULT 'pending',
    "totalCents" INTEGER NOT NULL,
    "stripeSessionId" TEXT,
    "stripePaymentIntentId" TEXT,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    CONSTRAINT "Order_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);
INSERT INTO "new_Order" ("createdAt", "id", "status", "stripePaymentIntentId", "stripeSessionId", "totalCents", "updatedAt", "userId") SELECT "createdAt", "id", "status", "stripePaymentIntentId", "stripeSessionId", "totalCents", "updatedAt", "userId" FROM "Order";
DROP TABLE "Order";
ALTER TABLE "new_Order" RENAME TO "Order";
CREATE UNIQUE INDEX "Order_stripeSessionId_key" ON "Order"("stripeSessionId");
CREATE TABLE "new_Product" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "slug" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "tagline" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "sizeLabel" TEXT NOT NULL,
    "priceCents" INTEGER NOT NULL,
    "imageUrl" TEXT,
    "active" BOOLEAN NOT NULL DEFAULT true
);
INSERT INTO "new_Product" ("active", "description", "id", "name", "priceCents", "slug") SELECT "active", "description", "id", "name", "priceCents", "slug" FROM "Product";
DROP TABLE "Product";
ALTER TABLE "new_Product" RENAME TO "Product";
CREATE UNIQUE INDEX "Product_slug_key" ON "Product"("slug");
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
