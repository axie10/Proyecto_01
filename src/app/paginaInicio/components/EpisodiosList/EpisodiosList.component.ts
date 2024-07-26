import { Component, inject, Input, OnInit } from '@angular/core';
import {MatDividerModule} from '@angular/material/divider';
import {MatListModule} from '@angular/material/list';
import { Router } from '@angular/router';

@Component({
  selector: 'app-EpisodiosList',
  templateUrl: './EpisodiosList.component.html',
  styleUrls: ['./EpisodiosList.component.scss'],
  standalone: true,
  imports: [MatDividerModule, MatListModule]
})
export class EpisodiosListComponent implements OnInit {

  route = inject(Router);

  @Input()
  public name?: string;
  @Input()
  public date?: string;
  @Input()
  public url?: string;
  @Input()
  public id: number = 0;

  constructor() { }

  ngOnInit() {
  }

  episodioSingle(id:number){
    this.route.navigate(['/episodios', this.id]);
  }

}
