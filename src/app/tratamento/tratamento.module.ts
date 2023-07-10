import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TratamentoRoutingModule } from './tratamento-routing.module';
import { TratamentoComponent } from './tratamento.component';
import { DetalheComponent } from './detalhe/detalhe.component';
import { PedidoInformacaoComponent } from './pedido-informacao/pedido-informacao.component';
import { EncaminhamentoComponent } from './encaminhamento/encaminhamento.component';


@NgModule({
  declarations: [
    TratamentoComponent,
    DetalheComponent,
    PedidoInformacaoComponent,
    EncaminhamentoComponent
  ],
  imports: [
    CommonModule,
    TratamentoRoutingModule
  ]
})
export class TratamentoModule { }
