import {Component, OnInit, Output} from '@angular/core';
import {Chesspiece} from './chess-piece/pieces/chesspiece';
import {CdkDragDrop, DragDropModule, moveItemInArray} from '@angular/cdk/drag-drop';
import {Coordinate} from './coordinate';
import {faChessKing} from '@fortawesome/free-solid-svg-icons';

/**
 * @title Basic Drag&Drop
 */

@Component({
  selector: 'app-chess',
  templateUrl: './chess.component.html',
  styleUrls: ['./chess.component.css']
})
export class ChessComponent implements OnInit {

  gameBegun = false;
  constructor() { }
  faChessKing = faChessKing;

  columns = [8, 7, 6, 5, 4, 3, 2, 1];
  rows = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
  bounds: any;
  gridsize = 80;
  coordinates: string[] = [];

  ngOnInit() {
    this.fillCoordinates();
  }

  placeChesspieces() {
    // document.getElementById('testpiece').
  }

  fillCoordinates() {
    for (let i of this.columns) {
      for (let s of this.rows) {
        this.coordinates.push(i + s);
      }
    }
    console.log(this.coordinates);
  }

  drop(ev) {
    ev.preventDefault();
    let data = ev.dataTransfer.getData('text');
    ev.target.appendChild(document.getElementById(data));

  }

  allowDrop(ev) {
    ev.preventDefault();
  }

  drag(ev) {
    ev.dataTransfer.setData('text', ev.target.id);
  }

  beginGame() {
    this.gameBegun = true;
    this.generateCheckerBoard();
    this.setGamePieces();
  }

  setGamePieces() {
    // @ts-ignore
    // document.getElementById('koningZwart').
  }

  onCellClicked(coordinate: Coordinate): void {
    console.log(coordinate.coordinate);
  }

  generateCheckerBoard(): void {
    for (let i = 0; i < 8; i++) {
      for (let j = 0; j < 8; j++) {
        if ((i + j) % 2 === 0) {
          document.getElementById(this.columns[j] + this.rows[i]).className = 'grid-item darktile';
          // console.log(this.columns[y] + this.rows[i] + ' aangeroepen');
        }
      }
    }
  }

}
