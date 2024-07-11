import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateCourseDto } from './dto/create-course.dto';
import { UpdateCourseDto } from './dto/update-course.dto';
import { AddStudentDto } from './dto/add-student.dto';

@Injectable()
export class CourseService {
  constructor(private prisma: PrismaService) {}

  async createCourse(data: CreateCourseDto) {
    return this.prisma.course.create({
      data,
    });
  }

  async addStudent(data: AddStudentDto){

  }

  async findAll(){
    return this.prisma.course.findMany({});
  }

  async updateCourse(id: number, data: UpdateCourseDto) {
    return this.prisma.course.update({
      where: { courseId: id },
      data,
    });
  }

  async deleteCourse(id: number) {
    return this.prisma.course.delete({
      where: { courseId: id },
    });
  }
}
