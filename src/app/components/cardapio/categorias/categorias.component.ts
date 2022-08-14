import { ProdutosService } from 'src/app/core/services/produtos.service';
import { Component, OnInit } from '@angular/core';
import { Categorias } from 'src/app/core/model/Categoria';
import { CategoriasService } from 'src/app/core/services/categorias.service';
import { Produtos } from 'src/app/core/model/Produto';

@Component({
  selector: 'app-categorias',
  templateUrl: './categorias.component.html',
  styleUrls: ['./categorias.component.css'],
})
export class CategoriasComponent implements OnInit {
  categoria!: Categorias;
  produtos!: Produtos;

  constructor(
    private categoriaService: CategoriasService,
    private produtoService: ProdutosService
  ) {}

  ngOnInit(): void {
    this.getCategorias();
  }

  getCategorias(): void {
    this.categoriaService.getCategorias().subscribe((categorias) => {
      this.categoria = categorias;
    });
  }
}
