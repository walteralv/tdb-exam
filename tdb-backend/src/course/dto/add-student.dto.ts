import { IsString, IsDate, IsNumber } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class AddStudentDto {
  @ApiProperty()  
  @IsString()
  studentId: string;

  @ApiProperty()
  @IsString()
  courseId: string;

  @ApiProperty()
  @IsNumber()
  nota1: number;

  @ApiProperty()
  @IsNumber()
  nota2: number;
}
