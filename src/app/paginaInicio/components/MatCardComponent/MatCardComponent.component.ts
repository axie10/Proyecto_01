import { routes } from './../../../app.routes';
import { Component, Input, OnInit } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import { Router, RouterEvent } from '@angular/router';

@Component({
  selector: 'app-MatCardComponent',
  templateUrl: './MatCardComponent.component.html',
  styleUrls: ['./MatCardComponent.component.scss'],
  standalone: true,
  imports: [MatCardModule, MatButtonModule],
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


  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }

  personajeIndividual(id: number | undefined){
    this.router.navigate(['./personaje/'+id]);
  }

}
