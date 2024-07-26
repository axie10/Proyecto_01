import { PersonajeIndividualRickMortyService } from './../../shared/service/servicioPersonajes/personajeIndividualRickMorty.service';
import { Component, inject, OnInit } from '@angular/core';
import { map, switchMap } from 'rxjs';
import { Personaje } from '../../shared/interface/personaje.interface';
import { ActivatedRoute } from '@angular/router';
import { MatCardComponentComponent } from '../../shared/components/card-pequeña-personaje/MatCardComponent.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  standalone: true,
  imports:[MatCardComponentComponent]
})
export class HomeComponent implements OnInit {

  public widthVariable: string = "420px";
  public heightVariable: string = "450px";

  private serviciopersonajes = inject(PersonajeIndividualRickMortyService);

  public personaje?: Personaje;

  constructor(
    private route: ActivatedRoute,
  ) {}

  ngOnInit() {
      this.route.params.pipe(
        map(params => params['id']),
        switchMap(id => this.serviciopersonajes.getPersonaje(id))
      ).subscribe((data) => {
        this.personaje = data;
        console.log(this.personaje);
      });
    }

}
