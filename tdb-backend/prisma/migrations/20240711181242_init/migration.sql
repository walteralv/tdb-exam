/*
  Warnings:

  - You are about to drop the `Curse` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Record" DROP CONSTRAINT "Record_cursoId_fkey";

-- DropTable
DROP TABLE "Curse";

-- CreateTable
CREATE TABLE "Course" (
    "cursoId" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "initDate" TIMESTAMP(3) NOT NULL,
    "endDate" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Course_pkey" PRIMARY KEY ("cursoId")
);

-- AddForeignKey
ALTER TABLE "Record" ADD CONSTRAINT "Record_cursoId_fkey" FOREIGN KEY ("cursoId") REFERENCES "Course"("cursoId") ON DELETE RESTRICT ON UPDATE CASCADE;
