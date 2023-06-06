import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdmOcorrenciaRoutingModule } from './adm-ocorrencia-routing.module';
import { AdmOcorrenciaComponent } from './adm-ocorrencia.component';
import { VisualizacaoComponent } from './visualizacao/visualizacao.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { EdicaoComponent } from './edicao/edicao.component';

import {MatButtonModule} from '@angular/material/button';

@NgModule({
  declarations: [
    VisualizacaoComponent,
    CadastroComponent,
    EdicaoComponent
  ],
  imports: [
    CommonModule,
    AdmOcorrenciaRoutingModule,
    MatButtonModule    
  ]
})
export class AdmOcorrenciaModule { }
