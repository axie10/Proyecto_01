import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
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

  FormularioShared : FormGroup;

  public fb = inject(FormBuilder);

  public typePhones = ['Casa', 'Movil', 'Trabajo'];

  // public FormularioShared : FormGroup = this.fb.group({
  //   name: ['', Validators.required],
  //   email: ['',[Validators.required, Validators.email]],
  //   telefonos: this.fb.array([
  //     this.fb.group({
  //       type: [''],
  //       numero: [''],
  //     })
  //   ]),
  //   direccion: ['', Validators.required],
  // })

  constructor() {
    this.FormularioShared = this.fb.group({
      name: ['', Validators.required],
      email: ['',[Validators.required, Validators.email]],
      telefonos: this.fb.array([
        this.fb.group({
          type: [''],
          numero: [''],
        })
      ]),
      direccion: ['', Validators.required],
    })
  }

  ngOnInit() {
  }

  enviar(){
    console.log(this.FormularioShared.value);
  }

  get email(){
    return this.FormularioShared.get('email') as FormControl;
  }
  get direccion(){
    return this.FormularioShared.get('direccion') as FormControl;
  }

  get telefonos(){
    return this.FormularioShared.get('telefonos') as FormArray;
  }

  masTelefonos(){
    this.telefonos.push(this.fb.group({
      type: [''],
      numero: [''],
    }))
  }

}
