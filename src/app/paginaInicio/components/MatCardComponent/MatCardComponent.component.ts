import { routes } from './../../../app.routes';
import { Component, inject, Input, OnInit } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import { MatDialog } from '@angular/material/dialog';
import { Router, RouterEvent } from '@angular/router';
import { ModalComponentComponent } from '../../../shared/components/ModalComponent/ModalComponent.component';

@Component({
  selector: 'app-MatCardComponent',
  templateUrl: './MatCardComponent.component.html',
  styleUrls: ['./MatCardComponent.component.scss'],
  standalone: true,
  imports: [MatCardModule, MatButtonModule],
})
export class MatCardComponentComponent implements OnInit {

  private dialog = inject(MatDialog);

  @Input()
  name : string = "";
  @Input()
  specie : string = "";
  @Input()
  gender: string = "";
  @Input()
  image: string = "";
  @Input()
  id?: number;


  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }


  personajeIndividual(id: number | undefined){

    this.dialog.open(ModalComponentComponent, {
      data: {
        titulo: 'Modal1 de prueba',
        mensaje: 'Aqui es dodne va a air el cuerpo de mensaje',
        boton : 'Cerrar'
      }
    });

    
    
    // this.router.navigate(['./personaje/'+id]);
  }


}
