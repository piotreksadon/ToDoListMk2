import { IsDateString, IsString, MaxLength, MinLength } from 'class-validator';

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
