import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';

export interface Visitantes {
  entrada: string;
  nome: string;
  documento: string;
  numero: number;
  destino: string;
}

const ELEMENT_DATA: Visitantes[] = [
  {  entrada: '10/02/2022 18:40',
    nome: 'A',
    documento: 'RG',
    numero: 111,
    destino: 'AA',
  },
  {  entrada: '20/04/2022 12:40',
    nome: 'B',
    documento: 'RG',
    numero: 222,
    destino: 'BB',
  },
  {  entrada: '30/03/2022 17:00',
    nome: 'C',
    documento: 'CPF',
    numero: 333,
    destino: 'CC',
  },];

@Component({
  selector: 'app-visualizacao',
  templateUrl: './visualizacao.component.html',
  styleUrls: ['./visualizacao.component.css']
})
export class VisualizacaoComponent implements OnInit {
  dataSource = ELEMENT_DATA;
 //displayedColumns: string[] = ['entrada', 'nome', 'documento', 'numero', 'destino', 'update'];
 displayedColumns: string[] = ['entrada', 'nome', 'destino', 'detalhe'];

  constructor(private rota: Router,public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  adicionarVisitante(){
    this.rota.navigate(['adm-ocorrencia/cadastro'])
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(DialogOverviewExampleDialog, {
      width: '250px'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
}

@Component({
  selector: 'dialog-overview-example-dialog',
  templateUrl: 'dialogs.html',
})
export class DialogOverviewExampleDialog {
  constructor(
    public dialogRef: MatDialogRef<DialogOverviewExampleDialog>,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
}