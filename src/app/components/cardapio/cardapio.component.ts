import { Observable } from 'rxjs';
import { ProdutosService } from 'src/app/core/services/produto/produtos.service';
import { Router } from '@angular/router';
import { CategoriasService } from '../../core/services/categoria/categorias.service';
import { Categoria, Categorias } from './../../core/model/Categoria';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Produto, Produtos } from 'src/app/core/model/Produto';

@Component({
  selector: 'app-cardapio',
  templateUrl: './cardapio.component.html',
  styleUrls: ['./cardapio.component.css'],
})
export class CardapioComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
