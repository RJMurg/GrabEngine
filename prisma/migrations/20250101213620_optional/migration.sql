/*
  Warnings:

  - You are about to drop the column `code` on the `Trains` table. All the data in the column will be lost.
  - Added the required column `trainCode` to the `Trains` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Trains" DROP COLUMN "code",
ADD COLUMN     "trainCode" TEXT NOT NULL,
ALTER COLUMN "destinationTime" DROP NOT NULL,
ALTER COLUMN "late" DROP NOT NULL,
ALTER COLUMN "currentMessage" DROP NOT NULL;
