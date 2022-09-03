import { Router } from '@angular/router';
import { ModalService } from './../../shared/services/modal/modal.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-contato',
  templateUrl: './contato.component.html',
  styleUrls: ['./contato.component.css'],
})
export class ContatoComponent implements OnInit {
  formContato!: FormGroup;
  @ViewChild('template') template;

  constructor(
    private formBuilder: FormBuilder,
    private modalService: ModalService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.formContato = this.formBuilder.group({
      nome: ['', [Validators.min(4), Validators.required]],
      telefone: ['', [Validators.required]],
      email: ['', [Validators.email, Validators.required]],
      mensagem: ['', [Validators.minLength(10), Validators.maxLength(300)]],
    });
  }

  enviar(): void {
    this.modalService.openModal(this.template);
  }

  hideModal(): void {
    this.modalService.hideModal();
  }
}
