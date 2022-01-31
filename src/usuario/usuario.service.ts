import { Injectable } from '@nestjs/common';
import { Usuario } from './usuario/usuario';

@Injectable()
export class UsuarioService {
  private usuario: Usuario[] = [
    {
      id: 1,
      data: '31/01/2022',
      username: 'admin',
      password: '123',
    },
    {
      id: 2,
      data: '31/01/2022',
      username: 'employer',
      password: '123',
    },
  ];
  private dataHoje = new Date();

  findAll() {
    return this.usuario;
  }
  findById(id: string) {
    return this.usuario.find((u) => u.id === Number(id));
  }
  findUsername(username: string) {
    return this.usuario.find((u) => u.username === username);
  }
  login(body: any) {
    const userlogin: Usuario = new Usuario();
    userlogin.id = this.usuario.length + 1;
    userlogin.data = this.dataHoje.toLocaleDateString('pt-br');
    userlogin.username = body.username;
    userlogin.password = body.password;
    this.usuario.push(userlogin);
    return userlogin;
  }
}
