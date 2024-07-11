import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CourseService } from './course.service';
import { CreateCourseDto } from './dto/create-course.dto';
import { UpdateCourseDto } from './dto/update-course.dto';
import { AddStudentDto } from './dto/add-student.dto';

import {ApiTags} from '@nestjs/swagger'

@Controller('course')
@ApiTags("Course")
export class CourseController {
  constructor(private readonly courseService: CourseService) {}

  @Post()
  create(@Body() createCourseDto: CreateCourseDto) {
    return this.courseService.createCourse(createCourseDto);
  }

  @Post('addStudent')
  addStudent(@Body() addStudentDto: AddStudentDto){
    return this.courseService.addStudent(addStudentDto)
  }

  @Get()
  findAll() {
    return this.courseService.findAll();
  }

  // @Get(':id')
  // findOne(@Param('id') id: string) {
  //   return this.courseService.findOne(+id);
  // }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCourseDto: UpdateCourseDto) {
    return this.courseService.updateCourse(+id, updateCourseDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.courseService.deleteCourse(+id);
  }
}
