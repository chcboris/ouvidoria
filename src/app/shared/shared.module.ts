
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from './layout/header/header.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import { CpfPipe } from './pipes/cpf.pipe';
import { fonePipe } from './pipes/fone.pipe';

@NgModule({
  declarations: [
    HeaderComponent,
    CpfPipe,
    fonePipe
  ],
  imports: [
    CommonModule,
    FormsModule,
    MatToolbarModule
  ],
  exports:[
    HeaderComponent,
    CpfPipe,
    fonePipe
  ]
})
export class SharedModule { }
