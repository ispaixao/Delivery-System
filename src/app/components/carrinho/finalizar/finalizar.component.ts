import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-finalizar',
  templateUrl: './finalizar.component.html',
  styleUrls: ['./finalizar.component.css'],
})
export class FinalizarComponent implements OnInit {
  formFinalizacao!: FormGroup;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.formFinalizacao = this.formBuilder.group({
      nome: ['', [Validators.required]],
      telefone: ['', [Validators.required]],
      email: ['', [Validators.email, Validators.required]],
      cpf: ['', Validators.required],
      rua: ['', [Validators.minLength(5), Validators.required]],
      numero: ['', Validators.required],
      bairro: ['', [Validators.minLength(5), Validators.required]],
    });
  }
}
