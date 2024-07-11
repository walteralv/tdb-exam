import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class CreateStudentDto {
  @ApiProperty()
  @IsString()
  name: string;

  @ApiProperty()
  @IsString()
  dni: string;
}
