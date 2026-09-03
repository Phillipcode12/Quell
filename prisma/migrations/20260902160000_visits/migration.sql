-- CreateTable
CREATE TABLE "Visit" (
    "id" TEXT NOT NULL,
    "source" TEXT NOT NULL,
    "referrerHost" TEXT,
    "startedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "lastSeenAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Visit_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "Visit_startedAt_idx" ON "Visit"("startedAt");

-- CreateIndex
CREATE INDEX "Visit_lastSeenAt_idx" ON "Visit"("lastSeenAt");
