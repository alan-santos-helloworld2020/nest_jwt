import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { UsuarioService } from './usuario.service';
import { Usuario } from './usuario/usuario';

@Controller('usuario')
export class UsuarioController {
  constructor(private readonly usuarioService: UsuarioService) {}

  @Get()
  findAll() {
    return this.usuarioService.findAll();
  }
  @Get(':id')
  findById(@Param('id') id: string) {
    return this.usuarioService.findById(id);
  }

  @Post('login')
  login(@Body() body: Usuario) {
    return this.usuarioService.login(body);
  }
}
