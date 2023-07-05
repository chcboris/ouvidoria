
import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { Constantes } from 'src/app/shared/util/constantes';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  opened: boolean = false;
  ambiente: string = Constantes.ambiente;
  versao: string = Constantes.versaoAtual;
  aplicacao: string = 'Ouvidoria';
  constructor(private router: Router) { }

  ngOnInit(): void {

  }

  toggleSideBar() {
    this.opened = !this.opened;
  }

}
