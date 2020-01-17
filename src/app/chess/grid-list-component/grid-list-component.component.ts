import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Coordinate} from '../coordinate';

@Component({
  selector: 'app-grid-list-component',
  templateUrl: './grid-list-component.component.html',
  styleUrls: ['./grid-list-component.component.css']
})
export class GridListComponentComponent implements OnInit {


  constructor() { }

  columns = [8, 7, 6, 5, 4, 3, 2, 1];
  rows = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];

  @Input() coordinates: Coordinate[];
  @Input() myCoordinate: string;
  @Output() onCellClicked = new EventEmitter<Coordinate>();
  @Output() onDropped = new EventEmitter();
  @Output() allowDrop = new EventEmitter();
  ngOnInit() {

  }
  onClick() {
    console.log(this.myCoordinate);
  }


}
