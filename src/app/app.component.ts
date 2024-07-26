import { FilterbyEpisodeService } from './shared/service/Episodios/filterbyEpisode.service';
import { SnackBarComponetsService } from './shared/service/webcomponets/snackBarComponets.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, inject, OnInit } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import { MatDialog } from '@angular/material/dialog';
import { ModalComponentComponent } from './shared/components/ModalComponent/ModalComponent.component';
import {MatMenuModule} from '@angular/material/menu';
import { AlllocationService } from './shared/service/Location/alllocation.service';
import { Result } from './shared/interface/allLocation.interface';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MatToolbarModule, MatButtonModule,MatIconModule, MatMenuModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  providers: [HttpClientModule]
})
export class AppComponent implements OnInit{

  public locations : Result [] = [];

  title = 'Proyecto_01';
  private dialog = inject(MatDialog);
  private serviceLocation = inject(AlllocationService)

  constructor(
    private SnackBarComponetsService: SnackBarComponetsService,
    private router: Router,
  ){}
  ngOnInit(): void {
    this.serviceLocation.getAllLocation().subscribe((data) => {
      this.locations = data.results;
    });
  }

  openSancBar(){
    this.SnackBarComponetsService.show('Web component mediante servico ya que hay que sacarlo en el archivo.ts', 2000, 'custom-snackbar-rojo');
  }

  openSancBar2(){
    this.SnackBarComponetsService.show('Web component mediante servico ya que hay que sacarlo en el archivo.ts', 2000, 'custom-snackbar-verde');
  }

  openDialog() {
    this.dialog.open(ModalComponentComponent);
  }

  homess(){
    this.router.navigate(['./']);
  }

  BuscarPorPlaneta(id:number){
    this.router.navigate(['./location', id]);
  }




}
