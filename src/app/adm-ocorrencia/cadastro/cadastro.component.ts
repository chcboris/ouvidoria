import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/internal/Observable';
import { Visitante } from 'src/app/shared/model/visitante';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {

  options: string[] = ['One', 'Two', 'Three'];
  filteredOptions: Observable<string[]> | undefined;
  novoUsuarioForm!: FormGroup;
  visitante:Visitante ={};

  constructor( private fb: FormBuilder, private rota: Router){ }

  ngOnInit(): void {
    this.createForm(this.visitante);
  }

  cadastrar(){
    this.visitante = this.novoUsuarioForm.getRawValue();
    console.log(this.novoUsuarioForm);
    console.table(this.visitante);
    this.rota.navigate(['']);
  }

  get nome() { return this.novoUsuarioForm.get('nome'); }

  cancelar(){
    this.novoUsuarioForm.reset();
    this.rota.navigate(['']);
  }

  createForm(visitante: Visitante) {
    this.novoUsuarioForm = this.fb.group({
      nome: [visitante.nome,[Validators.required]],
      documento: [visitante.documento, Validators.required],
      numeroDoc: [visitante.numeroDoc,[Validators.required]],
      telefone: [visitante.telefone],
      empresa: [visitante.empresa],
      destino: [visitante.destino,[Validators.required]],
      contato: [visitante.contato,[Validators.required]],
      ramal: [visitante.ramal]
    })
  }

}




//https://www.learmoreseekmore.com/2022/06/angular14-reactive-forms-example.html
//https://www.fabricadecodigo.com/criar-formulario-reactive-forms/
