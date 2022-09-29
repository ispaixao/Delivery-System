import { UsuarioLoginService } from './../../core/services/usuario-login/usuario-login.service';
import { Injectable } from '@angular/core';
import { CanLoad, Route, Router, UrlSegment, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LoginGuard implements CanLoad {
  constructor(
    private router: Router,
    private usuarioLoginService: UsuarioLoginService,
  ) {}

  canLoad(
    route: Route,
    segments: UrlSegment[]
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    if (this.usuarioLoginService.logado() != null) {
      this.router.navigate(['restrito']);
      return false;
    }
    return true;
  }
}
