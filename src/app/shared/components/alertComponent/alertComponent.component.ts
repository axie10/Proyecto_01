import { Component, Input, OnInit } from '@angular/core';
import {MatSnackBar} from '@angular/material/snack-bar';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-alertComponent',
  templateUrl: './alertComponent.component.html',
  styleUrls: ['./alertComponent.component.scss'],
  standalone: true,
  imports: [MatButtonModule, MatInputModule,MatFormFieldModule, CommonModule]
})
export class AlertComponent {

  @Input() message: string = '';
  @Input() color: string = '';
  @Input() fontSize: number = "16";

  constructor(private _snackBar: MatSnackBar) {}


}
