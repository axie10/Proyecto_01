import { Component, inject, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';
import { map, switchMap } from 'rxjs';
import { AlllocationService } from '../../shared/service/Location/alllocation.service';
import { Result } from '../../shared/interface/allLocation.interface';
import { JsonPipe } from '@angular/common';
import { TreeSingleLocationComponent } from '../components/treeSingleLocation/treeSingleLocation.component';
import { MatCardComponentComponent } from '../../shared/components/card-pequeña-personaje/MatCardComponent.component';
import { PersonajeIndividualRickMortyService } from '../../shared/service/servicioPersonajes/personajeIndividualRickMorty.service';
import { Personaje } from '../../shared/interface/personaje.interface';


@Component({
  selector: 'app-pagina-inicio-location',
  templateUrl: './pagina-inicio-location.component.html',
  styleUrls: ['./pagina-inicio-location.component.scss'],
  standalone: true,
  imports: [JsonPipe, TreeSingleLocationComponent, MatCardComponentComponent]
})
export class PaginaInicioLocationComponent implements OnInit {

  route = inject(ActivatedRoute);
  servicioPersonaje = inject(PersonajeIndividualRickMortyService)
  servicioSingleLocation = inject(AlllocationService);
  public location?: Result;
  public urlpersonaje : string [] = [];
  public personajes : Personaje [] = [];
  public id : string = '';
  public date : string = '';

  public widthVariable: string = "250px";
  public heightVariable: string = "230px";


  constructor(private router: Router) {}

  ngOnInit() {

    this.route.params.pipe(
      map(params => params['id']),
      // tap(id => console.log(id)),
      //NOS SUSCRIBIMOS AL SERVICIO PARA OBTENER LOS DATOS DEL EPISODIO
      switchMap(id => this.servicioSingleLocation.getSingleLocation(id))
    ).subscribe((data) => {
      this.location = data;
      // console.log(data);
      this.id = data.id + '';
      this.date = data.created + '';
      this.urlpersonaje = data.residents;

      this.urlpersonaje.forEach((element) => {
        this.servicioPersonaje.getPersonajes(element).subscribe((data) => {
          this.personajes.push(data);
        });
      });
    });

    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.route.params.pipe(
          map(params => params['id']),
          // tap(id => console.log(id)),
          //NOS SUSCRIBIMOS AL SERVICIO PARA OBTENER LOS DATOS DEL EPISODIO
          switchMap(id => this.servicioSingleLocation.getSingleLocation(id))
        ).subscribe((data) => {
          this.location = data;
          console.log(data);
          this.id = data.id + '';
          this.date = data.created + '';
          this.urlpersonaje = data.residents;
    
          this.urlpersonaje.forEach((element) => {
            this.servicioPersonaje.getPersonajes(element).subscribe((data) => {
              this.personajes.push(data);
            });
          });
        });

        window.location.reload();
      }
    });

  }

}
