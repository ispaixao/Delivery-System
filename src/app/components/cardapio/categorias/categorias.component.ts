import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Observable } from 'rxjs';
import { Categoria, Categorias } from 'src/app/core/model/Categoria';
import { CategoriasService } from 'src/app/core/services/categoria/categorias.service';

@Component({
  selector: 'app-categorias',
  templateUrl: './categorias.component.html',
  styleUrls: ['./categorias.component.css'],
})
export class CategoriasComponent implements OnInit {
  categorias!: Categorias;
  constructor(private categoriaService: CategoriasService) {}

  ngOnInit(): void {
    this.getCategorias();
  }

  getCategorias(): void {
    this.categoriaService.getCategorias().subscribe((categorias) => {
      this.categorias = categorias;
    });
  }
}
