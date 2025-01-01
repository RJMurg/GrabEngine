-- CreateTable
CREATE TABLE "Trains" (
    "id" SERIAL NOT NULL,
    "code" TEXT NOT NULL,
    "direction" TEXT NOT NULL,
    "currentStatus" TEXT NOT NULL,
    "origin" TEXT NOT NULL,
    "destination" TEXT NOT NULL,
    "originTime" TIMESTAMP(3) NOT NULL,
    "destinationTime" TIMESTAMP(3) NOT NULL,
    "late" TEXT NOT NULL,
    "currentMessage" TEXT NOT NULL,
    "latitude" TEXT NOT NULL,
    "longitude" TEXT NOT NULL,
    "publicMessage" TEXT NOT NULL,
    "timestamp" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Trains_pkey" PRIMARY KEY ("id")
);
