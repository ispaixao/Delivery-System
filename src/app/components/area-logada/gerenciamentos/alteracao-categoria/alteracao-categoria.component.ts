import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CategoriasService } from 'src/app/core/services/categoria/categorias.service';
import { Categoria, Categorias } from 'src/app/shared/model/Categoria';
import { AlertService, AlertTypes } from 'src/app/shared/services/alert/alert.service';

@Component({
  selector: 'app-alteracao-categoria',
  templateUrl: './alteracao-categoria.component.html',
  styleUrls: ['./alteracao-categoria.component.css'],
})
export class AlteracaoCategoriaComponent implements OnInit {
  categorias!: Categorias;

  colunas: string[] = ['titulo', 'url', 'acao'];

  constructor(
    private categoriaService: CategoriasService,
    private router: Router,
    private alertService: AlertService
  ) {}

  ngOnInit(): void {
    this.getCategorias();
  }

  getCategorias(): void {
    this.categoriaService.getCategorias().subscribe(
      (categorias) => {
        this.categorias = categorias;
      },
      (error: Error) => {
        this.handleError();
        console.error(error);
      }
    );
  }

  irParaCadastro(): void {
    this.router.navigate(['restrito/categorias']);
  }

  handleError(): void {
    // USAR O ALERT-TYPES DO ALERT SERVICE
    this.alertService.showAlert(
      'Não foi possível carregar as informações, tente mais tarde.',
      AlertTypes.DANGER
    );
  }

  deletar(categoria: Categoria): void {
    this.categoriaService.deletarCategoria(categoria).subscribe(() => {
      this.alertService.showAlert(
        'Categoria excluída com sucesso.',
        AlertTypes.SUCCESS
      );
      this.router.navigate(['restrito']);
    });
  }
}
