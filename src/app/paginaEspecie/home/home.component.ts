import { Component, inject, OnInit } from '@angular/core';
import { ServicioFilterNameService } from '../../shared/service/serviceFilter/servicio-filter-name.service';
import { ActivatedRoute, Router } from '@angular/router';
import { map, switchMap } from 'rxjs';
import { Result } from '../../shared/interface/filterByName.interface';
import { MatCardComponentComponent } from '../../shared/components/card-pequeña-personaje/MatCardComponent.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  standalone: true,
  imports: [MatCardComponentComponent]
})
export class HomeComponent implements OnInit {

  private servicioFilterEspecie = inject(ServicioFilterNameService);
  private route = inject(ActivatedRoute);

  public especiesByName : Result [] = [];
  public nameEspecies: string = '';
  public widthVariable: string = "250px";
  public heightVariable: string = "230px";

  constructor() { }

  ngOnInit() {
    //OBTENEMOS EL ID DEL EPISODIO QUE SE PASA POR PARAMETRO
    this.route.params.pipe(
      map(params => params['id']),
      // tap(id => console.log(id)),
      //NOS SUSCRIBIMOS AL SERVICIO PARA OBTENER LOS DATOS DEL EPISODIO
      switchMap(id => this.servicioFilterEspecie.getFilterByName(id))
    ).subscribe((data) => {
      this.especiesByName = data.results;
      this.nameEspecies = data.results[0].species;
    });

  }

}
