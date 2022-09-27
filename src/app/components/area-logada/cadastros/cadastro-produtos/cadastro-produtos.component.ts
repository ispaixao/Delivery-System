import { CadastroProdutoService } from './../../../../core/services/cadastro-produto/cadastro-produto.service';
import { Produto } from 'src/app/shared/model/Produto';
import { CategoriasService } from './../../../../core/services/categoria/categorias.service';
import { Categorias } from 'src/app/shared/model/Categoria';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { CadastroUsuarioService } from 'src/app/core/services/cadastro-usuario/cadastro-usuario.service';

@Component({
  selector: 'app-cadastro-produtos',
  templateUrl: './cadastro-produtos.component.html',
  styleUrls: ['./cadastro-produtos.component.css'],
})
export class CadastroProdutosComponent implements OnInit {
  formProdutos!: FormGroup;
  categorias!: Categorias;

  constructor(
    private categoriaService: CategoriasService,
    private formBuilder: FormBuilder,
    private produtoService: CadastroProdutoService
  ) {}

  ngOnInit(): void {
    this.getCategorias();

    this.formProdutos = this.formBuilder.group({
      titulo: ['', [Validators.required]],
      valor: ['', [Validators.required]],
      descricao: ['', [Validators.required, Validators.maxLength(50)]],
      categoria: ['', [Validators.required]],
      foto: ['', Validators.required],
    });
  }

  getCategorias(): void {
    this.categoriaService.getCategorias().subscribe((categorias) => {
      this.categorias = categorias;
    });
  }

  validar(){
    console.log(this.formProdutos);
    const produto = this.formProdutos.getRawValue() as Produto;
    this.produtoService.cadastrar(produto).subscribe();

  }
}
