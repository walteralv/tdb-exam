/*
  Warnings:

  - You are about to drop the column `documentNumber` on the `Student` table. All the data in the column will be lost.
  - You are about to drop the column `documentType` on the `Student` table. All the data in the column will be lost.
  - You are about to drop the column `lastname` on the `Student` table. All the data in the column will be lost.
  - You are about to drop the column `name` on the `Student` table. All the data in the column will be lost.
  - Added the required column `dni` to the `Student` table without a default value. This is not possible if the table is not empty.
  - Added the required column `names` to the `Student` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Student" DROP COLUMN "documentNumber",
DROP COLUMN "documentType",
DROP COLUMN "lastname",
DROP COLUMN "name",
ADD COLUMN     "dni" TEXT NOT NULL,
ADD COLUMN     "names" TEXT NOT NULL;
