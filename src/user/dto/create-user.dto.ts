import {IsEmail, IsNotEmpty, Length, Min, MinLength} from "class-validator";

export class CreateUserDto {
  @Length(2,)
  fullName: string
  @IsEmail(undefined, {message: 'Неверная почта'})
  email:string
  @Length(6, 32, {message: 'Пароль должен быть минимум 6 символов'}  )
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