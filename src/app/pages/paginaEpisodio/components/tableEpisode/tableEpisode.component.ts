import { Component, Input, OnInit } from '@angular/core';
import {MatTableModule} from '@angular/material/table';

export interface PeriodicElement {
  id: number;
  name: string;
  date: string;
  episode: string;
}

@Component({
  selector: 'app-tableEpisode',
  templateUrl: './tableEpisode.component.html',
  styleUrls: ['./tableEpisode.component.scss'],
  standalone: true,
  imports: [MatTableModule],
})
export class TableEpisodeComponent implements OnInit {

  @Input()
  id?: number;
  @Input()
  name : string = '';
  @Input()
  date : string = '';
  @Input()
  episode : string = '';
  @Input()
  personajes : string[] = [];

  displayedColumns: string[] = ['id', 'name', 'date', 'episode'];
  dataSource = [
    {id: this.id, name: this.name, date: this.date, episode: this.episode},
  ];;

  constructor() { }

  ngOnInit() {
  }

}
