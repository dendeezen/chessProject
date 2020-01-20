import {Component, OnInit} from '@angular/core';
import {Chesspiece} from './chess-piece/pieces/chesspiece';
import {Coordinate} from './coordinate';
import {PieceType} from './chess-piece/pieces/type';
import {ChessPieceMoveEvent} from './chessPieceMoveEvent';
import {Pion} from './chess-piece/pieces/pion';
import {Koning} from './chess-piece/pieces/koning';

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
  koningZwart = new Koning ('1d', 'koningZwart', true, PieceType.Koning);
  koninginZwart = new Chesspiece('1e', 'koninginZwart', true, PieceType.Koningin);
  toren1Zwart = new Chesspiece('1a', 'toren1Zwart', true, PieceType.Toren);
  toren2Zwart = new Chesspiece('1h', 'toren2Zwart', true, PieceType.Toren);
  loper1Zwart = new Chesspiece('1b', 'loper1Zwart', true, PieceType.Loper);
  loper2Zwart = new Chesspiece('1g', 'loper2Zwart', true, PieceType.Loper);
  paard1Zwart = new Chesspiece('1c', 'paard1Zwart', true, PieceType.Paard);
  paard2Zwart = new Chesspiece('1f', 'paard2Zwart', true, PieceType.Paard);

  koningWit = new Koning ('8d', 'koningWit', false, PieceType.Koning);
  koninginWit = new Chesspiece('8e', 'koninginWit', false, PieceType.Koningin);
  toren1Wit = new Chesspiece('8a', 'toren1Wit', false, PieceType.Toren);
  toren2Wit = new Chesspiece('8h', 'toren2Wit', false, PieceType.Toren);
  loper1Wit = new Chesspiece('8b', 'loper1Wit', false, PieceType.Loper);
  loper2Wit = new Chesspiece('8g', 'loper2Wit', false, PieceType.Loper);
  paard1Wit = new Chesspiece('8c', 'paard1Wit', false, PieceType.Paard);
  paard2Wit = new Chesspiece('8f', 'paard2Wit', false, PieceType.Paard);

  pion1Zwart = new Pion('2a', 'pion1Zwart' , true, PieceType.Pion);
  pion2Zwart = new Pion('2b', 'pion2Zwart' , true, PieceType.Pion);
  pion3Zwart = new Pion('2c', 'pion3Zwart' , true, PieceType.Pion);
  pion4Zwart = new Pion('2d', 'pion4Zwart' , true, PieceType.Pion);
  pion5Zwart = new Pion('2e', 'pion5Zwart' , true, PieceType.Pion);
  pion6Zwart = new Pion('2f', 'pion6Zwart' , true, PieceType.Pion);
  pion7Zwart = new Pion('2g', 'pion7Zwart' , true, PieceType.Pion);
  pion8Zwart = new Pion('2h', 'pion8Zwart' , true, PieceType.Pion);

  pion1Wit = new Pion('7a', 'pion1Wit' , false, PieceType.Pion);
  pion2Wit = new Pion('7b', 'pion2Wit' , false, PieceType.Pion);
  pion3Wit = new Pion('7c', 'pion3Wit' , false, PieceType.Pion);
  pion4Wit = new Pion('7d', 'pion4Wit' , false, PieceType.Pion);
  pion5Wit = new Pion('7e', 'pion5Wit' , false, PieceType.Pion);
  pion6Wit = new Pion('7f', 'pion6Wit' , false, PieceType.Pion);
  pion7Wit = new Pion('7g', 'pion7Wit' , false, PieceType.Pion);
  pion8Wit = new Pion('7h', 'pion8Wit' , false, PieceType.Pion);


  // tslint:disable-next-line:max-line-length
  chesspieces: Chesspiece[] = [this.koningZwart, this.koninginZwart, this.toren1Zwart, this.toren2Zwart, this.loper1Zwart, this.loper2Zwart, this.paard1Zwart, this.paard2Zwart, this.koningWit, this.koninginWit, this.toren1Wit, this.toren2Wit, this.loper1Wit, this.loper2Wit, this.paard1Wit, this.paard2Wit, this.pion1Wit, this.pion2Wit, this.pion3Wit, this.pion4Wit, this.pion5Wit, this.pion6Wit, this.pion7Wit, this.pion8Wit, this.pion1Zwart, this.pion2Zwart, this.pion3Zwart, this.pion4Zwart, this.pion5Zwart, this.pion6Zwart, this.pion7Zwart, this.pion8Zwart];
  allBlackCoordinates: string[];
  allWhiteCoordinates: string[];
  coordinatesToHighlight: string[];
  gameBegun = false;
  classname: string;
  constructor() { }
  dragtarget: Chesspiece;

  columns = [8, 7, 6, 5, 4, 3, 2, 1];
  rows = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
  bounds: any;
  gridsize = 80;
  coordinates: string[] = [];
  counter = 1;


  ngOnInit() {
    this.fillCoordinates();
  }

  placeChesspieces() {
    for (const piece of this.chesspieces) {
      const temp = document.getElementById(piece.id);
      document.getElementById(piece.coordinate).appendChild(temp);
    }
    }
    // const koningZ = document.getElementById('koningZwart');
    // // @ts-ignore
    // document.getElementById(this.koningZwart.coordinate).appendChild(koningZ);

  fillCoordinates() {
    for (const i of this.columns) {
      for (const s of this.rows) {
        this.coordinates.push(i + s);
      }
    }
    console.log(this.coordinates);
  }

  setCoorditantesToHighlight(id: string) {
    this.getAllCoordinates();
    for (const piece of this.chesspieces) {
      if (piece.id === id) {
        this.coordinatesToHighlight = piece.getMovementOptions(this.allBlackCoordinates, this.allWhiteCoordinates);
        break;
      }
    }
  }

  drop(ev) {
    ev.preventDefault();
    let data = ev.dataTransfer.getData('text');
    ev.target.appendChild(document.getElementById(data));
    this.dragtarget.coordinate = ev.target.id;
    console.log('droptarget: ' + ev.target.id);
    if (this.dragtarget instanceof Pion) {
      this.dragtarget.firstMove = false;
    }
    this.dragtarget = null;
    this.resetHighlights();
  }

  allowDrop(ev) {
    ev.preventDefault();
  }

  drag(ev: ChessPieceMoveEvent) {
    this.resetHighlights();
    ev.event.dataTransfer.setData('text', ev.event.target.id);
    this.dragtarget = this.getElementById(ev.event.target.id);
    this.setCoorditantesToHighlight(ev.event.target.id);
    for (const coordinate of this.coordinatesToHighlight) {
      if (this.coordinateExists(coordinate)) {
        this.classname = document.getElementById(coordinate).className;
        document.getElementById(coordinate).className = 'highlight ' + this.classname;
      } else {
        console.log('coordinaat ' + coordinate + ' bestaat niet.');
      }
    }
  }

  beginGame() {
    this.gameBegun = true;
    this.generateCheckerBoard();
    this.placeChesspieces();
    this.getAllCoordinates();
  }

  getAllCoordinates() {
    this.allBlackCoordinates = [];
    this.allWhiteCoordinates = [];
    for (const piece of this.chesspieces) {
      if (piece.isBlack) {
        this.allBlackCoordinates.push(piece.coordinate);
      } else {
        this.allWhiteCoordinates.push(piece.coordinate);
      }
    }
    console.log(this.allBlackCoordinates);
    console.log(this.allWhiteCoordinates);
  }

  resetHighlights() {
    if (this.coordinatesToHighlight !== undefined) {
      for (const coordinate of this.coordinatesToHighlight) {
        if (this.coordinateExists(coordinate)) {
          this.classname = document.getElementById(coordinate).className.split('highlight').pop();
          document.getElementById(coordinate).className = this.classname;
        }
      }
      this.coordinatesToHighlight = [];
    }
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

  coordinateExists(coordinate: string): boolean {
    if (coordinate.charAt(2) === '' && Number(coordinate.charAt(0)) > 0 && Number(coordinate.charAt(0)) < 9) {
      for (const element of this.rows) {
        if (coordinate.charAt(1) === element) {
          return true;
        }
      }
    }
    return false;
  }

  getElementById(id: string): Chesspiece {
    for (const piece of this.chesspieces) {
      if (piece.id === id) {
        return piece;
      }
    }
  }

}
