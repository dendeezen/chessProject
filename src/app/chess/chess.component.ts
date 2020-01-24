import {Component, OnInit} from '@angular/core';
import {Chesspiece} from './chess-piece/pieces/chesspiece';
import {Coordinate} from './coordinate';
import {PieceType} from './chess-piece/pieces/type';
import {ChessPieceMoveEvent} from './chessPieceMoveEvent';
import {Pion} from './chess-piece/pieces/pion';
import {Koning} from './chess-piece/pieces/koning';
import {Toren} from './chess-piece/pieces/toren';
import {Loper} from './chess-piece/pieces/loper';
import {Koningin} from './chess-piece/pieces/koningin';
import {Paard} from './chess-piece/pieces/paard';

/**
 * @title Basic Drag&Drop
 */

@Component({
  selector: 'app-chess',
  templateUrl: './chess.component.html',
  styleUrls: ['./chess.component.css']
})
export class ChessComponent implements OnInit {
  koningZwart = new Koning ('1d', 'koningZwart', true, PieceType.Koning);
  koninginZwart = new Koningin('1e', 'koninginZwart', true, PieceType.Koningin);
  toren1Zwart = new Toren('1a', 'toren1Zwart', true, PieceType.Toren);
  toren2Zwart = new Toren('1h', 'toren2Zwart', true, PieceType.Toren);
  loper1Zwart = new Loper('1b', 'loper1Zwart', true, PieceType.Loper);
  loper2Zwart = new Loper('1g', 'loper2Zwart', true, PieceType.Loper);
  paard1Zwart = new Paard('1c', 'paard1Zwart', true, PieceType.Paard);
  paard2Zwart = new Paard('1f', 'paard2Zwart', true, PieceType.Paard);

  koningWit = new Koning ('8d', 'koningWit', false, PieceType.Koning);
  koninginWit = new Koningin('8e', 'koninginWit', false, PieceType.Koningin);
  toren1Wit = new Toren('8a', 'toren1Wit', false, PieceType.Toren);
  toren2Wit = new Toren('8h', 'toren2Wit', false, PieceType.Toren);
  loper1Wit = new Loper('8b', 'loper1Wit', false, PieceType.Loper);
  loper2Wit = new Loper('8g', 'loper2Wit', false, PieceType.Loper);
  paard1Wit = new Paard('8c', 'paard1Wit', false, PieceType.Paard);
  paard2Wit = new Paard('8f', 'paard2Wit', false, PieceType.Paard);

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
  winner: string;
  whitesTurn: boolean;
  classname: string;
  schaaktoestand = false;
  constructor() { }
  dragtarget: Chesspiece;

  columns = [8, 7, 6, 5, 4, 3, 2, 1];
  rows = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
  coordinates: string[] = [];


  ngOnInit() {
    this.fillCoordinates();
  }

  placeChesspieces() {
    for (const piece of this.chesspieces) {
      const temp = document.getElementById(piece.id);
      document.getElementById(piece.coordinate).appendChild(temp);
    }
    }

  fillCoordinates() {
    for (const i of this.columns) {
      for (const s of this.rows) {
        this.coordinates.push(i + s);
      }
    }
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
    const data = ev.dataTransfer.getData('text');
    let eventTarget = null;
    let targetCell = null;
    if (ev.target.tagName === 'DIV') {
      eventTarget = ev.target.id;
    } else if (ev.target.tagName === 'svg') {
      eventTarget = ev.target.parentNode.parentNode.parentNode.id;
    } else if (ev.target.tagName === 'path') {
      eventTarget = ev.target.parentNode.parentNode.parentNode.parentNode.id;
    }
    targetCell = document.getElementById(eventTarget);
    if (this.coordinatesToHighlight.includes(eventTarget)) {
      console.log(this.dragtarget.type + ' verplaatst naar ' + eventTarget);
      this.checkOverlap(eventTarget);
      targetCell.appendChild(document.getElementById(data));
      this.dragtarget.coordinate = eventTarget;
      if (this.dragtarget instanceof Pion) {
        this.dragtarget.firstMove = false;
      }
      this.checkIfSchaak();
      this.changePlayerTurn();
    } else {
      console.log('Ongeldige zet');
    }
    this.dragtarget = null;
    this.resetHighlights();
  }

  allowDrop(ev) {
    ev.preventDefault();
  }

  drag(ev: ChessPieceMoveEvent) {
    this.resetHighlights();
    this.dragtarget = this.getElementById(ev.event.target.id);
    if (this.dragtarget.isBlack !== this.whitesTurn) {
      ev.event.dataTransfer.setData('text', ev.event.target.id);
      this.dragtarget = this.getElementById(ev.event.target.id);
      this.setCoorditantesToHighlight(ev.event.target.id);
      for (const coordinate of this.coordinatesToHighlight) {
        if (this.coordinateExists(coordinate)) {
          this.classname = document.getElementById(coordinate).className;
          document.getElementById(coordinate).className = 'highlight ' + this.classname;
        }
      }
    } else {console.log('Het is nu aan de andere speler. Gelieve uw beurt af te wachten.'); }

  }

  beginGame() {
    this.winner = null;
    this.gameBegun = true;
    this.generateCheckerBoard();
    this.placeChesspieces();
    this.getAllCoordinates();
    this.whitesTurn = true;
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

  generateCheckerBoard(): void {
    for (let i = 0; i < 8; i++) {
      for (let j = 0; j < 8; j++) {
        if ((i + j) % 2 === 0) {
          document.getElementById(this.columns[j] + this.rows[i]).className = 'grid-item darktile';
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

  changePlayerTurn() {
    if (this.whitesTurn) {
      this.whitesTurn = false;
    } else {this.whitesTurn = true; }
  }

  checkOverlap(coordinate: string) {
    this.getAllCoordinates();
    if (this.whitesTurn) {
      if (this.allBlackCoordinates.includes(coordinate)) {
        this.chesspieces.forEach((item, index) => {
          if (item.coordinate === coordinate) {
            if (item instanceof Koning) {
              alert('Wit wint!!');
            }
            document.getElementById(item.id).outerHTML = '';
            console.log(item.type + ' verloren.');
            this.chesspieces.splice(index, 1);
          }
        });
      }
    }
    if (!this.whitesTurn) {
      if (this.allWhiteCoordinates.includes(coordinate)) {
        this.chesspieces.forEach((item, index) => {
          if (item.coordinate === coordinate) {
            if (item instanceof Koning) {
              alert('Zwart wint!!');
            }
            document.getElementById(item.id).outerHTML = '';
            console.log(item.type + ' verloren.');
            this.chesspieces.splice(index, 1);
          }
        });
      }
    }
  }

  checkIfSchaak() {
    let possibleCoordinates = [];
    this.chesspieces.forEach((item, index) => {
        if (this.whitesTurn !== item.isBlack) {
          possibleCoordinates = possibleCoordinates.concat(item.getMovementOptions(this.allBlackCoordinates, this.allWhiteCoordinates));
        }
      });
    if (this.whitesTurn) {
      if (possibleCoordinates.includes(this.koningZwart.coordinate)) {
        this.schaaktoestand = true;
        alert('Schaak! zet je koning in veiligheid!');
      }
    } else {
      if (possibleCoordinates.includes(this.koningWit.coordinate)) {
        this.schaaktoestand = true;
        alert('Schaak! zet je koning in veiligheid!');
      }
    }
  }
}
