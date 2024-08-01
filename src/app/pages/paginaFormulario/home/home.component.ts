import { Component, OnInit } from '@angular/core';
import { FormularioSharedComponent } from '../../../shared/components/formulario-shared/formulario-shared.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  standalone: true,
  imports: [FormularioSharedComponent]
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
