import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sobre-nos',
  templateUrl: './sobre-nos.component.html',
  styleUrls: ['./sobre-nos.component.css'],
})
export class SobreNosComponent implements OnInit {
  valor!: string;

  valores: string[] = [
    'Trabalho em equipe',
    'Agilidade e qualidade',
    'Responsabilidade ambiental',
  ];
  constructor() {}

  ngOnInit(): void {}
}
