import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Coordinate} from '../coordinate';

@Component({
  selector: 'app-grid-component',
  templateUrl: './grid-component.component.html',
  styleUrls: ['./grid-component.component.css']
})
export class GridComponentComponent implements OnInit {

  x: string;
  y: string;

  @Input() coordinate: Coordinate;
  @Output() onClicked = new EventEmitter<Coordinate>();
  @Output() onDropped = new EventEmitter();
  @Output() allowDrop = new EventEmitter();

  showCoordinate() {
    console.log('hover met image: ' + this.x + this.y );
  }

  constructor() { }


  ngOnInit() {
    this.x = this.coordinate.coordinate.charAt(1);
    this.y = this.coordinate.coordinate.charAt(0);
  }

}
