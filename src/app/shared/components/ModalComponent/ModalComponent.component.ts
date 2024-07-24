import { Component, Inject, OnInit } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {
  MAT_DIALOG_DATA,
  MatDialog,
  MatDialogActions,
  MatDialogClose,
  MatDialogContent,
  MatDialogTitle,
} from '@angular/material/dialog';
import { ModalesParameros } from '../../interface/modalesParameros.interface.ts';

@Component({
  selector: 'app-ModalComponent',
  templateUrl: './ModalComponent.component.html',
  styleUrls: ['./ModalComponent.component.scss'],
  standalone: true,
  imports: [MatButtonModule, MatDialogActions, MatDialogClose, MatDialogContent, MatDialogTitle],
})
export class ModalComponentComponent implements OnInit {


  constructor(@Inject(MAT_DIALOG_DATA) public data: ModalesParameros) { }

  ngOnInit() {
    // You can access the passed parameters using this.data
    console.log(this.data);

  }
}
