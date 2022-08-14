import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Observable } from 'rxjs';
import { Categoria, Categorias } from 'src/app/core/model/Categoria';

@Component({
  selector: 'app-card-categoria',
  templateUrl: './card-categoria.component.html',
  styleUrls: ['./card-categoria.component.css']
})
export class CardCategoriaComponent implements OnInit {

  @Input() cards!: Categorias;
  constructor() { }

  ngOnInit(): void {

  }

}
