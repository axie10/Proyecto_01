
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, inject, OnInit } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import { MatDialog } from '@angular/material/dialog';
import { ModalComponentComponent } from './shared/components/ModalComponent/ModalComponent.component';
import {MatMenuModule} from '@angular/material/menu';
import { Result } from './shared/interface/allLocation.interface';
import { SnackBarComponetsService } from './shared/service/serviceWebcomponets/snackBarComponets.service';
import { AlllocationService } from './shared/service/serviceLocation/alllocation.service';


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
  

  nameEspecies: string[] = [];
  title = 'Proyecto_01';
  private dialog = inject(MatDialog);
  private serviceLocation = inject(AlllocationService)

  constructor(
    private router: Router,
  ){
    this.nameEspecies = ['Alien', 'Cronenberg', 'Human', 'Humanoid', 'Unknown'];
  }
  ngOnInit(): void {
    this.serviceLocation.getAllLocation().subscribe((data) => {
      this.locations = data.results;
    });
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

  BuscarPorEspecie(id:string){
    this.router.navigate(['./especie', id]);
  }

}
