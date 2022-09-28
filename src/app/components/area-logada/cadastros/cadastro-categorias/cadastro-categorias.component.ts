import {
  AlertService,
  AlertTypes,
} from './../../../../shared/services/alert/alert.service';
import { CategoriasService } from 'src/app/core/services/categoria/categorias.service';
import { Categoria } from 'src/app/shared/model/Categoria';
import { CadastroCategoriaService } from './../../../../core/services/cadastro-categoria/cadastro-categoria.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-cadastro-categorias',
  templateUrl: './cadastro-categorias.component.html',
  styleUrls: ['./cadastro-categorias.component.css'],
})
export class CadastroCategoriasComponent implements OnInit {
  editCategoria = false;
  categoria!: Categoria;

  formCategoria = this.formBuilder.group({
    id: { value: 0, disabled: true },
    titulo: ['', [Validators.required]],
    url: ['', [Validators.required]],
  });

  constructor(
    private formBuilder: FormBuilder,
    private cadastroCategoriaService: CadastroCategoriaService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private categoriaService: CategoriasService,
    private alertService: AlertService
  ) {}

  ngOnInit(): void {
    this.getCategoriaPorId();
  }

  validar() {
    console.log(this.formCategoria);

    const categoria = this.formCategoria.getRawValue() as Categoria;
    this.cadastroCategoriaService.cadastrar(categoria).subscribe();
  }

  getCategoriaPorId(): void {
    const paramId = this.activatedRoute.snapshot.paramMap.get('id');

    if (paramId) {
      this.editCategoria = true;

      const id = Number(paramId);
      this.categoriaService.getCategoriaPorId(id).subscribe((categoria) => {
        this.categoria = categoria;
        this.formCategoria.controls.id.setValue(categoria.id);
        this.formCategoria.controls.titulo.setValue(categoria.titulo);
        this.formCategoria.controls.url.setValue(categoria.url);
      });
    }
  }

  atualizacao(): boolean {
    const paramId = this.activatedRoute.snapshot.paramMap.get('id');

    if (paramId !== null) {
      const id = Number(paramId);

      this.categoriaService
        .atualizarCategoria(id, this.categoria)
        .subscribe(() => {
          this.router.navigate['restrito'];
          this.alertService.showAlert(
            'Categoria atualizada com sucesso!',
            AlertTypes.SUCCESS
          );
        });
      return true;
    }
    return false;
  }
}
