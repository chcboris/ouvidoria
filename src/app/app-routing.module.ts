import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'adm',
  },
  {
    path: 'adm',
    loadChildren: () => import('./adm-ocorrencia/adm-ocorrencia.module').then((l) => l.AdmOcorrenciaModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }