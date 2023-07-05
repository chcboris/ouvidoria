import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdmOcorrenciaRoutingModule } from './adm-ocorrencia-routing.module';
import { AdmOcorrenciaComponent } from './adm-ocorrencia.component';
import { VisualizacaoComponent } from './visualizacao/visualizacao.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { EdicaoComponent } from './edicao/edicao.component';

import {ReactiveFormsModule } from '@angular/forms';

import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatTableModule} from '@angular/material/table';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import {MatCardModule} from '@angular/material/card';
import {MatDialogModule} from '@angular/material/dialog';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    VisualizacaoComponent,
    CadastroComponent,
    EdicaoComponent
  ],
  imports: [
    CommonModule,
    AdmOcorrenciaRoutingModule,
    ReactiveFormsModule,
    SharedModule,
    MatButtonModule,
    MatIconModule,
    MatInputModule,
    MatAutocompleteModule,
    MatTableModule,
    MatFormFieldModule,
    MatSelectModule,
    MatCardModule,
    MatDialogModule  
  ],
  exports:[
    CadastroComponent
  ],
})
export class AdmOcorrenciaModule { }
