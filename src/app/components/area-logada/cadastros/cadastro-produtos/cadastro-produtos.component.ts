import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ProdutosService } from 'src/app/core/services/produto/produtos.service';
import { Categorias } from 'src/app/shared/model/Categoria';
import { Produto } from 'src/app/shared/model/Produto';
import { CadastroProdutoService } from './../../../../core/services/cadastro-produto/cadastro-produto.service';
import { CategoriasService } from './../../../../core/services/categoria/categorias.service';
import { AlertService, AlertTypes } from './../../../../shared/services/alert/alert.service';

@Component({
  selector: 'app-cadastro-produtos',
  templateUrl: './cadastro-produtos.component.html',
  styleUrls: ['./cadastro-produtos.component.css'],
})
export class CadastroProdutosComponent implements OnInit {
  editProduto = false;
  categorias!: Categorias;
  produto!: Produto;

  formProdutos = this.formBuilder.group({
    id: { value: 0, disabled: true },
    titulo: ['', [Validators.required]],
    valor: [0, [Validators.required]],
    quantidade: { value: 0, disabled: true },
    descricao: ['', [Validators.required, Validators.maxLength(50)]],
    categoria: ['', [Validators.required]],
    foto: ['', Validators.required],
  });

  constructor(
    private categoriaService: CategoriasService,
    private produtoService: ProdutosService,
    private formBuilder: FormBuilder,
    private cadastroProdutoService: CadastroProdutoService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private alertService: AlertService
  ) {}

  ngOnInit(): void {
    this.getCategorias();
    this.getProdutoPorId();
  }

  getCategorias(): void {
    this.categoriaService.getCategorias().subscribe((categorias) => {
      this.categorias = categorias;
    });
  }

  validar() {
    const produto = this.formProdutos.getRawValue() as Produto;
    this.cadastroProdutoService.cadastrar(produto).subscribe();
  }

  getProdutoPorId(): void {
    const paramId = this.activatedRoute.snapshot.paramMap.get('id');

    if (paramId) {
      this.editProduto = true;

      const id = Number(paramId);
      this.produtoService.getProdutoPorId(id).subscribe((produto) => {
        this.produto = produto;
        this.formProdutos.controls.id.setValue(produto.id);
        this.formProdutos.controls.titulo.setValue(produto.titulo);
        this.formProdutos.controls.valor.setValue(produto.valor);
        this.formProdutos.controls.descricao.setValue(produto.descricao);
        this.formProdutos.controls.categoria.setValue(produto.categoria);
        this.formProdutos.controls.foto.setValue(produto.foto);
      });
    }
  }

  atualizacao(): void {

    const produto = this.formProdutos.getRawValue() as Produto;

    this.produtoService.atualizarProduto(produto).subscribe(() => {
      this.router.navigate['restrito'];
      this.alertService.showAlert(
        'Produto atualizado com sucesso!',
        AlertTypes.SUCCESS
      );
    });
  }



}
