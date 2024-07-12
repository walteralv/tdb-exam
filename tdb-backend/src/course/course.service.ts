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
    const { note1, note2 } =  data
    const finalCourseAverage = (note1 + note2)/2
    const condition = finalCourseAverage>=10.5?"Aprobado":"Desaprobado"
    const registerDate = new Date() 
    return this.prisma.record.create({
      data:{
        ...data,
        finalCourseAverage,
        condition,
        registerDate,
      }
    
    })
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
