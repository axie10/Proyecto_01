import { FilterbyEpisodeService } from './shared/service/Episodios/filterbyEpisode.service';
import { SnackBarComponetsService } from './shared/service/webcomponets/snackBarComponets.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import { AlertComponent } from './shared/components/alertComponent/alertComponent.component';
import { MatDialog } from '@angular/material/dialog';
import { ModalComponentComponent } from './shared/components/ModalComponent/ModalComponent.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MatToolbarModule, MatButtonModule,MatIconModule, AlertComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  providers: [HttpClientModule]
})
export class AppComponent {

  title = 'Proyecto_01';
  private dialog = inject(MatDialog);

  constructor(
    private SnackBarComponetsService: SnackBarComponetsService,
    private router: Router,
    private filtarByEpisode: FilterbyEpisodeService
  ){}

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




}
