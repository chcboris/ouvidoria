import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-adm-ocorrencia',
  templateUrl: './adm-ocorrencia.component.html',
  styleUrls: ['./adm-ocorrencia.component.css']
})
export class AdmOcorrenciaComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

}
