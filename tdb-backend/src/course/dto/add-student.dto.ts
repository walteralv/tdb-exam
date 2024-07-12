import { IsString, IsDate, IsNumber } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class AddStudentDto {
  @ApiProperty()  
  @IsNumber()
  studentId: number;

  @ApiProperty()
  @IsNumber()
  courseId: number;

  @ApiProperty()
  @IsNumber()
  note1: number;

  @ApiProperty()
  @IsNumber()
  note2: number;
}
