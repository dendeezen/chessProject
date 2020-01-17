import {AfterViewInit, Component, Input, OnInit, Output} from '@angular/core';
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
export class ChessComponent implements OnInit, AfterViewInit {

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
    // this.setGamePieces();

  }


  // tslint:disable-next-line:use-lifecycle-interface
  ngAfterViewInit() {

  }



  placeChesspieces() {
    // document.getElementById('testpiece').
  }

  fillCoordinates() {
    for (const i of this.columns) {
      for (const s of this.rows) {
        this.coordinates.push(i + s);
      }
    }
    console.log(this.coordinates);
    console.log(document.getElementById('1a'));
  }

  drop(ev) {
    ev.preventDefault();
    const data = ev.dataTransfer.getData('text');
    ev.target.appendChild(document.getElementById(data));
    console.log(ev.target.id);
    
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
    const kingZwartDiv = document.getElementById('koningZwart');
      // this.htmlToElement('<div id="koningZwart" draggable="true" (dragstart)="drag($event)"></div>');

    const kingZwartCell = document.getElementById('1d');
    // const kingZwartIcon = this.htmlToElement('<fa-icon class="zwart" [icon]="faChessKing" size="2x"></fa-icon>');

    // kingZwartDiv.(kingZwartIcon);
    console.log(kingZwartCell);
    kingZwartCell.appendChild( kingZwartDiv);

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

  htmlToElement(html) {
    const template = document.createElement('template');
    html = html.trim(); // Never return a text node of whitespace as the result
    template.innerHTML = html;
    return template.content.firstChild;
  }

}
