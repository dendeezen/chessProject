import {Component, OnInit, Output} from '@angular/core';
import {Chesspiece} from './chess-piece/pieces/chesspiece';
import {CdkDragDrop, DragDropModule, moveItemInArray} from '@angular/cdk/drag-drop';
import {Coordinate} from './coordinate';
import {faChessKing} from '@fortawesome/free-solid-svg-icons';
import {PieceType} from './chess-piece/pieces/type';
import {ChessPieceMoveEvent} from './chessPieceMoveEvent';

/**
 * @title Basic Drag&Drop
 */

@Component({
  selector: 'app-chess',
  templateUrl: './chess.component.html',
  styleUrls: ['./chess.component.css']
})
export class ChessComponent implements OnInit {
  // tslint:disable-next-line:max-line-length
  koningZwart = new Chesspiece ('1d', 'koningZwart', true, PieceType.Koning);
  koningWit = new Chesspiece ('8d', 'koningWit', false, PieceType.Koning);
  chesspieces: Chesspiece[] = [this.koningZwart, this.koningWit];
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

    const koningZ = document.getElementById('koningZwart');
    // @ts-ignore
    document.getElementById(this.koningZwart.coordinate).appendChild(koningZ);
  }

  fillCoordinates() {
    for (const i of this.columns) {
      for (const s of this.rows) {
        this.coordinates.push(i + s);
      }
    }
    console.log(this.coordinates);
  }

  drop(ev) {

    ev.preventDefault();
    // tslint:disable-next-line:one-variable-per-declaration
    const data: string[] = ev.dataTransfer..getData('text');
    console.log(data);
    ev.target.appendChild(document.getElementById(data[0]));
    console.log(ev.target.id);


  }

  allowDrop(ev) {
    ev.preventDefault();
  }

  drag(ev: ChessPieceMoveEvent) {
    ev.event.dataTransfer.setData('text', [ev.event.target.id, ev.chesspiece.coordinate]);
    console.log(ev.chesspiece.coordinate);
  }

  beginGame() {
    this.gameBegun = true;
    this.generateCheckerBoard();
    this.placeChesspieces();
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
