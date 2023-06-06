import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastroComponent } from './cadastro/cadastro.component';
import { VisualizacaoComponent } from './visualizacao/visualizacao.component';
import { AdmOcorrenciaComponent } from './adm-ocorrencia.component';


const routes: Routes = [
  {
    path: '',
    component: AdmOcorrenciaComponent,
    children: [
      {
        path: '',
        component: VisualizacaoComponent,
      },
      {
        path: 'cadastro',
        component: CadastroComponent,
      }
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdmOcorrenciaRoutingModule { }



