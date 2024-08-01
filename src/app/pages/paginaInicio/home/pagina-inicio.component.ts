
import { Component, OnInit,inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { EpisodiosListComponent } from '../components/EpisodiosList/EpisodiosList.component';
import { MatCardComponentComponent } from '../../../shared/components/card-pequeña-personaje/MatCardComponent.component';
import { PersonajesRickyMortyService } from '../../../shared/service/servicioPersonajes/personajesRickyMorty.service';
import { AllEpisodiosService } from '../../../shared/service/serviceEpisodios/allEpisodios.service';
import { Result } from '../../../shared/interface/allEpisodios.interface';
import { Personaje } from '../../../shared/interface/personaje.interface';

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
