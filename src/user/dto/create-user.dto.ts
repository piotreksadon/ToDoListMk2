import { IsDateString, IsString, MaxLength, MinLength } from 'class-validator';
const minDate = new Date()
minDate.setFullYear(1900, 0, 1)

export class CreateUserDto {
  @IsString()
  @MinLength(2)
  @MaxLength(255)
  name: string;

  @IsString()
  @MinLength(2)
  @MaxLength(255)
  surname: string;

  @IsDateString()
  birthDate: string;

  @IsString()
  @MinLength(2)
  @MaxLength(255)
  nationality: string;
}
