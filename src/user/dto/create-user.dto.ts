import { IsEmail, IsNotEmpty, MinLength } from "class-validator";

export class CreateUserDto {
  fullName: string
  @IsEmail()
  email:string
  password?: string
}


// export class CreateUserDto {
//   @IsNotEmpty()
//   @MinLength(3)
//   username: string;
//
//   @IsNotEmpty()
//   @MinLength(8)
//   password: string;
//
//   @IsNotEmpty()
//   @IsEmail()
//   email: string;
// }