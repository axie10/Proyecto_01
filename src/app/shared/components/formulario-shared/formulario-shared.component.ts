import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';


@Component({
  selector: 'app-formulario-shared',
  templateUrl: './formulario-shared.component.html',
  styleUrls: ['./formulario-shared.component.scss'],
  standalone: true,
  imports: [MatFormFieldModule, MatInputModule, MatIconModule, ReactiveFormsModule, CommonModule]
})
export class FormularioSharedComponent implements OnInit {

  public fb = inject(FormBuilder);

  public type = ['human', 'Alien', 'Humanoid', 'Cronenberg', 'unknown'];

  public FormularioShared : FormGroup = this.fb.group({
    name: ['', Validators.required],
    email: ['',[Validators.required, Validators.email]],
    personajes: this.fb.group({
      type: [''],
      nombre: [''],
    }),
  })

  constructor() { }

  ngOnInit() {
  }

  enviar(){
  }

  get personajes(){
    return this.FormularioShared.get('personajes') as FormGroup;
  }

  get email(){
    return this.FormularioShared.get('email') as FormGroup;
  }

}
