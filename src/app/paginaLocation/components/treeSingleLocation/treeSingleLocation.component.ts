import { Component, Input, OnInit } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatTreeFlatDataSource, MatTreeFlattener, MatTreeModule} from '@angular/material/tree';
import { FlatTreeControl } from '@angular/cdk/tree';

interface FoodNode {
  name: string;
  children?: FoodNode[];
}

/** Flat node with expandable and level information */
interface ExampleFlatNode {
  expandable: boolean;
  name: string;
  level: number;
}

@Component({
  selector: 'app-treeSingleLocation',
  templateUrl: './treeSingleLocation.component.html',
  styleUrls: ['./treeSingleLocation.component.scss'],
  standalone: true,
  inputs: ['nombre', 'type', 'dimension', 'created', 'id'],
  exportAs: 'treeSingleLocation',
  imports: [MatIconModule, MatButtonModule, MatTreeModule]
})
export class TreeSingleLocationComponent implements OnInit {

  @Input() 
  nombre: string = '';
  @Input() 
  type: string = '';
  @Input() 
  dimension: string = '';
  @Input() 
  created: string = '';
  @Input() 
  id: string = '';

  public TREE_DATA: FoodNode[] = [];

  private _transformer = (node: FoodNode, level: number) => {
    return {
      expandable: !!node.children && node.children.length > 0,
      name: node.name,
      level: level,
    };
  };

  treeControl = new FlatTreeControl<ExampleFlatNode>(
    node => node.level,
    node => node.expandable,
  );

  treeFlattener = new MatTreeFlattener(
    this._transformer,
    node => node.level,
    node => node.expandable,
    node => node.children,
  );

  dataSource = new MatTreeFlatDataSource(this.treeControl, this.treeFlattener);

  constructor() {
  }

  hasChild = (_: number, node: ExampleFlatNode) => node.expandable;

  ngOnInit() {
    this.TREE_DATA = [
      {
        name: this.nombre,
        children: [{name: this.id}, {name: this.type}, {name: this.dimension}, {name: this.created}],
      }
    ];
    this.dataSource.data = this.TREE_DATA;
  }

}
