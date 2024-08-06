import { Component, inject, Input, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { PersonajesRickyMortyService } from '../../service/servicioPersonajes/personajesRickyMorty.service';
import { Result } from '../../interface/personajes.interface';


@Component({
  selector: 'app-tabla-1',
  templateUrl: './tabla-1.component.html',
  styleUrls: ['./tabla-1.component.scss'],
  imports: [MatTableModule, MatPaginatorModule, MatButtonModule, MatIconModule],
  standalone: true
})
export class Tabla1Component implements OnInit {

  @Input()
  id?: number;
  @Input()
  nombre : string = '';
  @Input()
  especie : string = '';
  @Input()
  genero : string = '';

  displayedColumns: string[] = ['id', 'nombre', 'especie', 'genero'];
  dataSource = [
    {id: this.id, name: this.nombre, date: this.especie, episode: this.genero},
  ];

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngOnInit() {
  }

}
