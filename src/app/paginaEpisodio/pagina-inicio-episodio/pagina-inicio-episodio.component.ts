import { Component, inject, OnInit } from '@angular/core';
import { TableEpisodeComponent } from '../components/tableEpisode/tableEpisode.component';
import { ActivatedRoute } from '@angular/router';
import { FilterbyEpisodeService } from '../../shared/service/Episodios/filterbyEpisode.service';
import { forkJoin, map, switchMap, takeWhile, tap } from 'rxjs';
import { PersonajeIndividualRickMortyService } from '../../shared/service/servicioPersonajes/personajeIndividualRickMorty.service';
import { Personaje } from '../../shared/interface/personaje.interface';
import { MatCardComponentComponent } from '../../shared/components/card-pequeña-personaje/MatCardComponent.component';

@Component({
  selector: 'app-pagina-inicio-episodio',
  templateUrl: './pagina-inicio-episodio.component.html',
  styleUrls: ['./pagina-inicio-episodio.component.scss'],
  standalone: true,
  imports: [TableEpisodeComponent, MatCardComponentComponent],
})
export class PaginaInicioEpisodioComponent implements OnInit {

  //iINJECTAMOS LOS SERVICIOS
  filtarByEpisode = inject(FilterbyEpisodeService);
  route = inject(ActivatedRoute);
  personajeIndividualService = inject(PersonajeIndividualRickMortyService);

  //DECLARAMOS LAS VARIABLES
  id?: number;
  name: string = '';
  date: string = '';
  episode: string = '';
  personajes: string[] = [];
  //ESTA VARIABLE ES PARA GUARDAR LOS DATOS DE LOS PERSONAJES QUE OBTENEMOS DEL EPISODIO
  datosPersonjanes: Personaje [] = [];
  public widthVariable: string = "250px";
  public heightVariable: string = "240px";

  constructor() { }

  ngOnInit() {

    //OBTENEMOS EL ID DEL EPISODIO QUE SE PASA POR PARAMETRO
    this.route.params.pipe(
      map(params => params['id']),
      // tap(id => console.log(id)),
      //NOS SUSCRIBIMOS AL SERVICIO PARA OBTENER LOS DATOS DEL EPISODIO
      switchMap(id => this.filtarByEpisode.getfilterByepisode(id))
    ).subscribe((data) => {
      this.id = data.id;
      this.name = data.name;
      this.date = data.air_date;
      this.episode = data.episode;
      this.personajes = data.characters;

      /*CON LOS DATOS QUE NOS DEVUELVE EL EPISODIO DE LOS PERSONAJES QUE
      APARECEN EN EL EPISODIO, NOS SUSCRIBIMOS AL SERVICIO DE PERSONAJES
      PARA OBTENER LOS DATOS DE CADA PERSONAJE*/
      this.personajes.forEach(element => {
        this.personajeIndividualService.getPersonajes(element).subscribe((data) => {
          this.datosPersonjanes.push(data);
        })
        
      });
    });



    
  }

}


