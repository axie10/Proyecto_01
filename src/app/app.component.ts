import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MatToolbarModule, MatButtonModule,MatIconModule ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  providers: [HttpClientModule]
})
export class AppComponent {
  title = 'Proyecto_01';
}
