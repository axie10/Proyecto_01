import { ChangeDetectionStrategy, Component, inject, OnInit, viewChild, ElementRef, ViewChild } from '@angular/core';
import { FormularioSharedComponent } from '../../../shared/components/formulario-shared/formulario-shared.component';
import {MatTabsModule} from '@angular/material/tabs';
import { MatDialog } from '@angular/material/dialog';
import { FormDialogComponent } from '../../../shared/components/form-dialog/form-dialog.component';
import {MatAccordion, MatExpansionModule} from '@angular/material/expansion';
import {MatIconModule} from '@angular/material/icon';
import {MatFormFieldControl, MatFormFieldModule} from '@angular/material/form-field';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {provideNativeDateAdapter} from '@angular/material/core';
import { MatInputModule } from '@angular/material/input';
import { Result } from '../../../shared/interface/personajes.interface';
import { PersonajesRickyMortyService } from '../../../shared/service/servicioPersonajes/personajesRickyMorty.service';
import { CommonModule } from '@angular/common';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { Tabla1Component } from '../../../shared/components/tabla-1/tabla-1.component';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';

interface PeriodicElement {
  id: number;
  nombre: string;
  especie: string;
  genero: string;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  standalone: true,
  imports: [
    MatDatepickerModule,
    MatFormFieldModule,
    MatIconModule,
    FormularioSharedComponent,
    MatTabsModule,
    FormDialogComponent,
    MatExpansionModule,
    MatInputModule,
    Tabla1Component,
    CommonModule,
    MatTableModule,
    MatPaginatorModule
],
  providers: [provideNativeDateAdapter()],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeComponent implements OnInit {

  private servicioPersonajes = inject(PersonajesRickyMortyService);

  displayedColumns = ['id', 'nombre', 'especie', 'genero', 'acciones'];
  ELEMENT_DATA : PeriodicElement [] = [];
  dataSource = new MatTableDataSource<PeriodicElement>(this.ELEMENT_DATA);
  @ViewChild(MatPaginator) paginator!: MatPaginator;


  accordion = viewChild.required(MatAccordion);
  constructor(public dialog: MatDialog) { }

  ngOnInit() {
    this.servicioPersonajes.getPersonajes().subscribe((data) => {
  
      this.ELEMENT_DATA = data.results.map((result) => {
        return {
          id: result.id,
          nombre: result.name,
          especie: result.species,
          genero: result.gender
        };
      });
      this.dataSource = new MatTableDataSource<PeriodicElement>(this.ELEMENT_DATA);
    });
    
  }

  openDialog(showAllInputs: boolean): void {
    this.dialog.open(FormDialogComponent, {
      width: '600px',
      data: { showAllInputs }
    });
  }

  openEdit(){
    this.dialog.open(FormDialogComponent, {
      width: '600px',
      data: { showAllInputs: true }
    });
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  onPageChange(event: any) {
    this.dataSource.paginator = this.paginator;
  }
  
}
