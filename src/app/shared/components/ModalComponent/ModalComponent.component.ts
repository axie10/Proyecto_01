import { Component, Inject, OnInit, inject } from '@angular/core';
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
import {MatFormFieldModule} from '@angular/material/form-field';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import { Route, Router } from '@angular/router';
import { SnackBarComponetsService } from '../../service/serviceWebcomponets/snackBarComponets.service.js';

@Component({
  selector: 'app-ModalComponent',
  templateUrl: './ModalComponent.component.html',
  styleUrls: ['./ModalComponent.component.scss'],
  standalone: true,
  imports: [MatInputModule,MatSelectModule,ReactiveFormsModule, MatFormFieldModule,MatButtonModule, MatDialogActions, MatDialogClose, MatDialogContent, MatDialogTitle],
})
export class ModalComponentComponent implements OnInit {

  public myForm: FormGroup = this.fb.group({
    numeroEpisodio: ['', Validators.required],
  });

  SnackBarComponetsService = inject(SnackBarComponetsService);


  constructor(
    private fb: FormBuilder,
    private route: Router
  ) { }

  ngOnInit() {
  }

  BuscarEpisodio(){
    if(this.myForm.value.numeroEpisodio > 0 && this.myForm.value.numeroEpisodio < 52){
      this.route.navigate(['/episodios', this.myForm.value.numeroEpisodio]);
    } else {
      this.SnackBarComponetsService.show('El numero del episodio no es correcto', 2000, 'custom-snackbar-rojo');
    }
  }
}
