import { Categoria } from 'src/app/shared/model/Categoria';
import { CadastroCategoriaService } from './../../../../core/services/cadastro-categoria/cadastro-categoria.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-cadastro-categorias',
  templateUrl: './cadastro-categorias.component.html',
  styleUrls: ['./cadastro-categorias.component.css'],
})
export class CadastroCategoriasComponent implements OnInit {
  formCategoria!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private categoriaService: CadastroCategoriaService
  ) {}

  ngOnInit(): void {
    this.formCategoria = this.formBuilder.group({
      titulo: ['', [Validators.required]],
      url: ['', [Validators.required]],
    });
  }

  validar() {
    console.log(this.formCategoria);

    const categoria = this.formCategoria.getRawValue() as Categoria;
    this.categoriaService.cadastrar(categoria).subscribe();
  }
}
