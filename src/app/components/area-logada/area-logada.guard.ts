import { UsuarioService } from './../../core/services/usuario-login/usuario.service';
import { Injectable } from '@angular/core';
import { CanLoad, Route, Router, UrlSegment, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AreaLogadaGuard implements CanLoad {
  constructor(private router: Router, private usuarioService: UsuarioService) {}

  canLoad(
    route: Route,
    segments: UrlSegment[]
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    if (!this.usuarioService.logado()) {
      this.router.navigate(['']);
      return false;
    }
    return true;
  }
}
