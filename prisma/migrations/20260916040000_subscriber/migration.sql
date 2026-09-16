-- Subscribers, currently only from the dry eye self-check.
--
-- Separate from "User" deliberately: a subscriber has no password and cannot
-- sign in. Giving an email must never create something that behaves like an
-- account nobody asked for.

-- CreateTable
CREATE TABLE "Subscriber" (
    "id" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "source" TEXT NOT NULL,
    "score" INTEGER,
    "band" TEXT,
    "evaporative" BOOLEAN,
    "answers" JSONB,
    "safetyFlag" BOOLEAN NOT NULL DEFAULT false,
    "utmSource" TEXT,
    "utmMedium" TEXT,
    "utmCampaign" TEXT,
    "utmContent" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Subscriber_pkey" PRIMARY KEY ("id")
);

-- Retaking the quiz updates the row rather than creating a duplicate.
CREATE UNIQUE INDEX "Subscriber_email_key" ON "Subscriber"("email");

CREATE INDEX "Subscriber_createdAt_idx" ON "Subscriber"("createdAt");
