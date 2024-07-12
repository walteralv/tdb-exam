-- CreateTable
CREATE TABLE "Student" (
    "studentId" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "dni" TEXT NOT NULL,

    CONSTRAINT "Student_pkey" PRIMARY KEY ("studentId")
);

-- CreateTable
CREATE TABLE "Course" (
    "courseId" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "initDate" TIMESTAMP(3) NOT NULL,
    "endDate" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Course_pkey" PRIMARY KEY ("courseId")
);

-- CreateTable
CREATE TABLE "Record" (
    "recordId" SERIAL NOT NULL,
    "studentId" INTEGER NOT NULL,
    "courseId" INTEGER NOT NULL,
    "note1" DOUBLE PRECISION NOT NULL,
    "note2" DOUBLE PRECISION NOT NULL,
    "finalCourseAverage" DOUBLE PRECISION NOT NULL,
    "condition" TEXT NOT NULL,
    "registerDate" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Record_pkey" PRIMARY KEY ("recordId")
);

-- AddForeignKey
ALTER TABLE "Record" ADD CONSTRAINT "Record_studentId_fkey" FOREIGN KEY ("studentId") REFERENCES "Student"("studentId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Record" ADD CONSTRAINT "Record_courseId_fkey" FOREIGN KEY ("courseId") REFERENCES "Course"("courseId") ON DELETE RESTRICT ON UPDATE CASCADE;
