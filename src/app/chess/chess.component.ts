import {Component, OnInit} from '@angular/core';
import {Chesspiece} from './chess-piece/pieces/chesspiece';
import {Coordinate} from './coordinate';
import {PieceType} from './chess-piece/pieces/type';

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
  koninginZwart = new Chesspiece('1e', 'koninginZwart', true, PieceType.Koningin);
  toren1Zwart = new Chesspiece('1a', 'toren1Zwart', true, PieceType.Toren);
  toren2Zwart = new Chesspiece('1h', 'toren2Zwart', true, PieceType.Toren);
  loper1Zwart = new Chesspiece('1b', 'loper1Zwart', true, PieceType.Loper);
  loper2Zwart = new Chesspiece('1g', 'loper2Zwart', true, PieceType.Loper);
  paard1Zwart = new Chesspiece('1c', 'paard1Zwart', true, PieceType.Paard);
  paard2Zwart = new Chesspiece('1f', 'paard2Zwart', true, PieceType.Paard);

  koningWit = new Chesspiece ('8d', 'koningWit', false, PieceType.Koning);
  koninginWit = new Chesspiece('8e', 'koninginWit', false, PieceType.Koningin);
  toren1Wit = new Chesspiece('8a', 'toren1Wit', false, PieceType.Toren);
  toren2Wit = new Chesspiece('8h', 'toren2Wit', false, PieceType.Toren);
  loper1Wit = new Chesspiece('8b', 'loper1Wit', false, PieceType.Loper);
  loper2Wit = new Chesspiece('8g', 'loper2Wit', false, PieceType.Loper);
  paard1Wit = new Chesspiece('8c', 'paard1Wit', false, PieceType.Paard);
  paard2Wit = new Chesspiece('8f', 'paard2Wit', false, PieceType.Paard);

  pion1Zwart = new Chesspiece('2a', 'pion1Zwart' , true, PieceType.Pion);
  pion2Zwart = new Chesspiece('2b', 'pion2Zwart' , true, PieceType.Pion);
  pion3Zwart = new Chesspiece('2c', 'pion3Zwart' , true, PieceType.Pion);
  pion4Zwart = new Chesspiece('2d', 'pion4Zwart' , true, PieceType.Pion);
  pion5Zwart = new Chesspiece('2e', 'pion5Zwart' , true, PieceType.Pion);
  pion6Zwart = new Chesspiece('2f', 'pion6Zwart' , true, PieceType.Pion);
  pion7Zwart = new Chesspiece('2g', 'pion7Zwart' , true, PieceType.Pion);
  pion8Zwart = new Chesspiece('2h', 'pion8Zwart' , true, PieceType.Pion);

  pion1Wit = new Chesspiece('7a', 'pion1Wit' , false, PieceType.Pion);
  pion2Wit = new Chesspiece('7b', 'pion2Wit' , false, PieceType.Pion);
  pion3Wit = new Chesspiece('7c', 'pion3Wit' , false, PieceType.Pion);
  pion4Wit = new Chesspiece('7d', 'pion4Wit' , false, PieceType.Pion);
  pion5Wit = new Chesspiece('7e', 'pion5Wit' , false, PieceType.Pion);
  pion6Wit = new Chesspiece('7f', 'pion6Wit' , false, PieceType.Pion);
  pion7Wit = new Chesspiece('7g', 'pion7Wit' , false, PieceType.Pion);
  pion8Wit = new Chesspiece('7h', 'pion8Wit' , false, PieceType.Pion);

  // tslint:disable-next-line:max-line-length
  pieces: Chesspiece[] = [this.koningZwart, this.koninginZwart, this.toren1Zwart, this.toren2Zwart, this.loper1Zwart, this.loper2Zwart, this.paard1Zwart, this.paard2Zwart, this.koningWit, this.koninginWit, this.toren1Wit, this.toren2Wit, this.loper1Wit, this.loper2Wit, this.paard1Wit, this.paard2Wit, this.pion1Wit, this.pion2Wit, this.pion3Wit, this.pion4Wit, this.pion5Wit, this.pion6Wit, this.pion7Wit, this.pion8Wit, this.pion1Zwart, this.pion2Zwart, this.pion3Zwart, this.pion4Zwart, this.pion5Zwart, this.pion6Zwart, this.pion7Zwart, this.pion8Zwart];
  coordinatesToHighlight: string[];
  gameBegun = false;
  classname: string;
  constructor() { }

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
    for (const piece of this.pieces) {
      const temp = document.getElementById(piece.id);
      document.getElementById(piece.coordinate).appendChild(temp);
    }
    }
    // const koningZ = document.getElementById('koningZwart');
    // // @ts-ignore
    // document.getElementById(this.koningZwart.coordinate).appendChild(koningZ);

  fillCoordinates() {
    for (let i of this.columns) {
      for (let s of this.rows) {
        this.coordinates.push(i + s);
      }
    }
    console.log(this.coordinates);
  }

  setCoorditantesToHighlight(id: string) {
    for (const piece of this.pieces) {
      if (piece.id === id) {
        switch (piece.type) {
          case PieceType.Pion: {
            if (piece.isBlack) {
              this.coordinatesToHighlight = [];
            }
            break;
          }
        }
      }
    }
  }

  drop(ev) {
    ev.preventDefault();
    let data = ev.dataTransfer.getData('text');
    ev.target.appendChild(document.getElementById(data));
    console.log('droptarget: ' + ev.target.id);
    document.getElementById('4e').className = this.classname;
  }

  allowDrop(ev) {
    ev.preventDefault();
  }

  drag(ev) {
    ev.dataTransfer.setData('text', ev.target.id);
    console.log('dragtarget: ' + ev.target.id);
    this.classname = document.getElementById('4e').className;

    document.getElementById('4e').className = this.classname + ' highlight';
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

}
