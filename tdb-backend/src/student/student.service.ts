import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateStudentDto } from './dto/create-student.dto';
import { UpdateStudentDto } from './dto/update-student.dto';

@Injectable()
export class StudentService {
  constructor(private prisma: PrismaService) {}

  async getAllStudents() {
    return this.prisma.student.findMany();
  }

  async getStudentById(id: number) {
    return this.prisma.student.findUnique({
      where: { studentId: id },
      include: {
        records: {
          include: {
            course: true,
          },
        },
      },
    });
  }

  async createStudent(data: CreateStudentDto) {
    return this.prisma.student.create({
      data,
    });
  }

  async updateStudent(id: number, data: UpdateStudentDto) {
    return this.prisma.student.update({
      where: { studentId: id },
      data,
    });
  }

  async deleteStudent(id: number) {
    return this.prisma.student.delete({
      where: { studentId: id },
    });
  }
}
