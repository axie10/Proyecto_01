import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';

@Component({
  selector: 'app-dynamic-form',
  templateUrl: './dynamic-form.component.html',
  styleUrls: ['./dynamic-form.component.scss'],
  standalone: true,
  imports: [MatFormFieldModule, CommonModule,ReactiveFormsModule]
})
export class DynamicFormComponent implements OnInit {

  @Input() showAllInputs: boolean = true;
  form: FormGroup;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      Nombre: ['', Validators.required],
      Apellido1: ['', Validators.required],
      Apellido2: ['', Validators.required],
      Fecha: ['', Validators.required],
      Sexo: ['', Validators.required],
      EstadoCivil: ['', Validators.required],
      Hijos: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    if (!this.showAllInputs) {
      this.form.removeControl('input5');
      this.form.removeControl('input6');
      this.form.removeControl('input7');
    }
  }

  onSubmit(): void {
    console.log(this.form.value);
  }

}
