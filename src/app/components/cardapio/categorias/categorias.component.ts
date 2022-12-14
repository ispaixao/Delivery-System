import { Component, OnInit } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { CategoriasService } from 'src/app/core/services/categoria/categorias.service';
import { Categorias } from 'src/app/shared/model/Categoria';
import {
  AlertService,
  AlertTypes
} from '../../../shared/services/alert/alert.service';

@Component({
  selector: 'app-categorias',
  templateUrl: './categorias.component.html',
  styleUrls: ['./categorias.component.css'],
})
export class CategoriasComponent implements OnInit {
  categorias!: Categorias
  bsModalRef!: BsModalRef;

  constructor(
    private categoriaService: CategoriasService,
    private alertService: AlertService
  ) {}

  ngOnInit(): void {
    this.getCategorias();
  }

  getCategorias(): void {
    this.categoriaService.getCategorias().pipe().subscribe(
      (categorias) => {
        this.categorias = categorias;
      },
      (error: Error) => {
        this.handleError();
        console.error(error);
      }
    );
  }

  handleError(): void {
    // USAR O ALERT-TYPES DO ALERT SERVICE
    this.alertService.showAlert(
      'Não foi possível carregar as categorias, tente mais tarde.',
      AlertTypes.DANGER
    );
  }
}
