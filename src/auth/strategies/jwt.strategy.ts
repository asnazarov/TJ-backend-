import {ExtractJwt, Strategy} from 'passport-jwt';
import {PassportStrategy} from '@nestjs/passport';
import {Injectable, UnauthorizedException} from '@nestjs/common';
import {jwtConstants} from "../constants";
import {UserService} from "../../user/user.service";
import {use} from "passport";

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(private readonly userService: UserService) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: jwtConstants.secret,
    });
  }

  async validate(payload: { sub: number, email: string }) {
    const data = {id: payload.sub, email: payload.email}
    const user = await this.userService.findByCond(data)
    if (!user) {
      throw new UnauthorizedException('Нет доступа к этой страние.')
    }
    return {id: payload.sub, email: payload.email};
  }
}