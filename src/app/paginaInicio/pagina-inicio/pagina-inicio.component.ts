
import { Component, OnInit,inject } from '@angular/core';
import { PersonajesRickyMortyService } from '../../shared/service/servicioPersonajes/personajesRickyMorty.service';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Personajes} from '../../shared/interface/personajes.interface';
import { Personaje } from '../../shared/interface/personaje.interface';
import { EpisodiosListComponent } from '../components/EpisodiosList/EpisodiosList.component';
import { AllEpisodiosService } from '../../shared/service/Episodios/allEpisodios.service';
import { Allepisodios,Result  } from '../../shared/interface/allEpisodios.interface';
import { MatCardComponentComponent } from '../../shared/components/card-pequeña-personaje/MatCardComponent.component';

@Component({
  selector: 'app-pagina-inicio',
  standalone: true,
  imports: [CommonModule, MatCardComponentComponent, RouterModule, EpisodiosListComponent],
  templateUrl: './pagina-inicio.component.html',
  styleUrl: './pagina-inicio.component.scss',
  providers: [RouterModule]
})
export class PaginaInicioComponent implements OnInit {

  private serviciopersonajes = inject(PersonajesRickyMortyService);
  private servicioepisodiios = inject(AllEpisodiosService);

  public episodios?: Result [];
  public personaje?: Personaje [];
  public widthVariable: string = "250px";
  public heightVariable: string = "230px";

  constructor(
  ) { }

  ngOnInit() {
    this.getPersonajes();
    this.getEpisodios();
  }

  getPersonajes(){
    this.serviciopersonajes.getPersonajes().subscribe((data) => {
      this.personaje = data.results;
    });
  }

  getEpisodios(){
    this.servicioepisodiios.getEpisodios().subscribe((data) => {
      this.episodios = data.results;
    });
  }

}
