import { Component, Input, OnInit } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';

@Component({
  selector: 'app-cardPersonaje',
  templateUrl: './cardPersonaje.component.html',
  styleUrls: ['./cardPersonaje.component.scss'],
  standalone: true,
  imports: [MatButtonModule, MatCardModule],
})
export class CardPersonajeComponent implements OnInit {

  @Input()
  name : string = "";
  @Input()
  specie : string = "";
  @Input()
  gender: string = "";
  @Input()
  image: string = "";
  // @Input()
  // id?: number;

  constructor(
  ) { }

  ngOnInit() {
  }

}
