import { ModalData } from './../../model/Modal-Data';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { Component, Input, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css'],
})
export class ModalComponent implements OnInit {
  @Input() titulo!: string;
  @Input() conteudo!: string;
  @Input() botao1!: string;
  @Input() botao2!: string;

  modalRef?: BsModalRef;
  message?: string;
  @ViewChild('template') template;

  constructor(private modalService: BsModalService) {}

  ngOnInit(): void {}

  openModal(): void {
    this.modalRef = this.modalService.show(this.template);
  }

  confirmar(): void {
    this.modalRef?.hide();
  }

  fechar(): void {
    this.modalRef?.hide();
  }
}
