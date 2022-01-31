import { Injectable } from '@nestjs/common';
import { AuthService } from './auth/auth.service';
import { Usuario } from './usuario/usuario/usuario';

@Injectable()
export class AppService {
  constructor(private authService: AuthService) {}
  login(body: any) {
    return this.authService.login(body);
  }
}
