import { Component, Input, OnInit } from '@angular/core';
import {MatDividerModule} from '@angular/material/divider';
import {MatListModule} from '@angular/material/list';

@Component({
  selector: 'app-EpisodiosList',
  templateUrl: './EpisodiosList.component.html',
  styleUrls: ['./EpisodiosList.component.scss'],
  standalone: true,
  imports: [MatDividerModule, MatListModule]
})
export class EpisodiosListComponent implements OnInit {

  @Input()
  public name?:string;
  @Input()
  public date?:string;
  @Input()
  public url?:string;

  constructor() { }

  ngOnInit() {
  }

}
