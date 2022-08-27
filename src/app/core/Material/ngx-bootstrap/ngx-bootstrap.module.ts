import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalModule } from 'ngx-bootstrap/modal';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { BsModalService } from 'ngx-bootstrap/modal';

const MODULES = [TooltipModule, ModalModule];

@NgModule({
  declarations: [],
  imports: [CommonModule, MODULES],
  exports: [MODULES],
  providers: [BsModalService],
})
export class NgxBootstrapModule {}
