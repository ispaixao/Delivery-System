import { AreaLogadaGuard } from './area-logada.guard';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AreaLogadaComponent } from './area-logada.component';

const routes: Routes = [
  {
    path: '',
    component: AreaLogadaComponent,
    canLoad: [AreaLogadaGuard]

  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AreaLogadaRoutingModule {}
