import { Controller, Get, Param, Post, Body, Patch, Delete } from '@nestjs/common';
import { StudentService } from './student.service';
import { CreateStudentDto } from './dto/create-student.dto';
import { UpdateStudentDto } from './dto/update-student.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('students')
@Controller('students')
export class StudentController {
  constructor(private studentService: StudentService) {}

  @Get()
  getAllStudents() {
    return this.studentService.getAllStudents();
  }

  @Get(':id')
  getStudentById(@Param('id') id: string) {
    return this.studentService.getStudentById(Number(id));
  }

  @Post()
  createStudent(@Body() createStudentDto: CreateStudentDto) {
    return this.studentService.createStudent(createStudentDto);
  }

  @Patch(':id')
  updateStudent(@Param('id') id: string, @Body() updateStudentDto: UpdateStudentDto) {
    return this.studentService.updateStudent(Number(id), updateStudentDto);
  }

  @Delete(':id')
  deleteStudent(@Param('id') id: string) {
    return this.studentService.deleteStudent(Number(id));
  }
}
