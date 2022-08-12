import { ProdutosService } from 'src/app/core/services/produtos.service';
import { Router } from '@angular/router';
import { CategoriasService } from './../../core/services/categorias.service';
import { Categoria, Categorias } from './../../core/model/Categoria';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-cardapio',
  templateUrl: './cardapio.component.html',
  styleUrls: ['./cardapio.component.css'],
})
export class CardapioComponent implements OnInit {
  card!: Categorias;

  constructor(
    private categoriaService: CategoriasService,
  ) {}

  ngOnInit(): void {
    this.getCategorias();
  }

  getCategorias(): void {
    this.categoriaService.getCategorias().subscribe((categorias) => {
      this.card = categorias;
    });
  }
}
