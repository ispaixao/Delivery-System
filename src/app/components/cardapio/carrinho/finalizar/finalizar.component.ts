import { ModalService } from './../../../../shared/services/modal/modal.service';
import { CarrinhoService } from 'src/app/core/services/carrinho/carrinho.service';
import { Router } from '@angular/router';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-finalizar',
  templateUrl: './finalizar.component.html',
  styleUrls: ['./finalizar.component.css'],
})
export class FinalizarComponent implements OnInit {
  formFinalizacao!: FormGroup;
  @ViewChild('modal') modal;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private carrinhoService: CarrinhoService,
    private modalService: ModalService
  ) {}

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

  show(): void{
    this.modalService.openModal(this.modal);
  }

  hide(): void{
    this.modalService.hideModal();
  }


  cancelarPedido(): void {
    this.carrinhoService.esvaziarCarrinho();
    this.modalService.hideModal();
    this.router.navigate(['']);

  }
}
