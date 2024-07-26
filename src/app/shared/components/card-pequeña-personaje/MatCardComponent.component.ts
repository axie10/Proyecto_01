import { routes } from './../../../app.routes';
import { Component, inject, Input, OnInit } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import { MatDialog } from '@angular/material/dialog';
import { Router, RouterEvent } from '@angular/router';
import { ModalComponentComponent } from '../../../shared/components/ModalComponent/ModalComponent.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-MatCardComponent',
  templateUrl: './MatCardComponent.component.html',
  styleUrls: ['./MatCardComponent.component.scss'],
  standalone: true,
  imports: [MatCardModule, MatButtonModule, CommonModule],
})
export class MatCardComponentComponent implements OnInit {

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
  @Input()
  width: string = "";
  @Input()
  heigth: string = "";
  @Input()
  class: string = "";
  @Input()
  widthVariable: string = "";
  @Input()
  heightVariable: string = "";

  pepe = "0.3rem"

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }


  personajeIndividual(id: number | undefined){
    this.router.navigate(['./personaje/'+id]);
  }


}
