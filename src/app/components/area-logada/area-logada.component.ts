import { UsuarioLoginService } from './../../core/services/usuario-login/usuario-login.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-area-logada',
  templateUrl: './area-logada.component.html',
  styleUrls: ['./area-logada.component.css'],
})
export class AreaLogadaComponent implements OnInit {
  constructor(private usuarioLoginService: UsuarioLoginService, private router: Router) {}

  ngOnInit(): void {}

  logout(): void {
    this.usuarioLoginService.logout();
    this.router.navigate(['']);
  }
}
