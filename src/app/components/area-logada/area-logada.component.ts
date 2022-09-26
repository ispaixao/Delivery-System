import { Router } from '@angular/router';
import { UsuarioService } from 'src/app/core/services/usuario-login/usuario.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-area-logada',
  templateUrl: './area-logada.component.html',
  styleUrls: ['./area-logada.component.css'],
})
export class AreaLogadaComponent implements OnInit {
  constructor(private usuarioService: UsuarioService, private router: Router) {}

  ngOnInit(): void {}

  logout(): void {
    this.usuarioService.logout();
    this.router.navigate(['']);
  }
}
