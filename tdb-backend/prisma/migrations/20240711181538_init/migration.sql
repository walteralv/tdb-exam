/*
  Warnings:

  - The primary key for the `Course` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `cursoId` on the `Course` table. All the data in the column will be lost.
  - You are about to drop the column `cursoId` on the `Record` table. All the data in the column will be lost.
  - Added the required column `courseId` to the `Record` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Record" DROP CONSTRAINT "Record_cursoId_fkey";

-- AlterTable
ALTER TABLE "Course" DROP CONSTRAINT "Course_pkey",
DROP COLUMN "cursoId",
ADD COLUMN     "courseId" SERIAL NOT NULL,
ADD CONSTRAINT "Course_pkey" PRIMARY KEY ("courseId");

-- AlterTable
ALTER TABLE "Record" DROP COLUMN "cursoId",
ADD COLUMN     "courseId" INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE "Record" ADD CONSTRAINT "Record_courseId_fkey" FOREIGN KEY ("courseId") REFERENCES "Course"("courseId") ON DELETE RESTRICT ON UPDATE CASCADE;
