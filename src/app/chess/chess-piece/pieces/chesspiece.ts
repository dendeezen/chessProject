import {PieceType} from './type';
import {faChessBishop, faChessKing, faChessPawn, faChessQueen, faChessRook, faChessKnight} from '@fortawesome/free-solid-svg-icons';
import NumberFormat = Intl.NumberFormat;
import {isNumber} from 'util';
import {toNumbers} from '@angular/compiler-cli/src/diagnostics/typescript_version';

export class Chesspiece {
  coordinate: string;
  id: string;
  isBlack: boolean;
  type: PieceType;
  movementOptions: string[];

  constructor(coordinate: string, id: string, isBlack: boolean, type: PieceType) {
    this.coordinate = coordinate;
    this.id = id;
    this.isBlack = isBlack;
    this.type = type;
  }

  add(v: number): number {
    return v + 1;
  }

  rem(v: number): number {
    return v - 1;
  }

  getColor() {
    if (this.isBlack) {
      return 'zwart';
    } else { return 'wit';
    }
  }

  getMovementOptions(allBlackCoordinates: string[], allWhiteCoordinates: string[]): string[] {
    return [];
  }

  coordinateExists(coordinate: string): boolean {
    if (coordinate.charAt(2) === '' && Number(coordinate.charAt(0)) > 0 && Number(coordinate.charAt(0)) < 9) {
      for (const element of ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h']) {
        if (coordinate.charAt(1) === element) {
          return true;
        }
      }
    }
    return false;
  }

  filterUnexistingCoordinates() {
  }

  getImage() {
    switch (this.type) {
      case PieceType.Pion: {
        return faChessPawn;
        break;
      }
      case PieceType.Koning: {
        return faChessKing;
        break;
      }
      case PieceType.Koningin: {
        return  faChessQueen;
        break;
      }
      case PieceType.Loper: {
        return faChessBishop;
        break;
      }
      case PieceType.Toren: {
        return faChessRook;
        break;
      }
      case PieceType.Paard: {
        return faChessKnight;
      }
    }
  }

  getBoven(c: string): string {
    return this.add(Number(c.charAt(0))) + c.charAt(1);
  }

  getOnder(c: string): string {
    return this.rem(Number(c.charAt(0))) + c.charAt(1);
  }

  getLinks(c: string): string {
    if (c.charAt(1) === 'a') {
      return 'XX0';
    }
    for (let i = 0; i < 8; i++) {
      if (c.charAt(1) === ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'][i]) {
        return c.charAt(0) + ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'][i-1];
      }
    }
  }

  getRechts(c: string): string {
    if (c.charAt(1) === 'h') {
      return 'XXi';
    }
    for (let i = 0; i < 8; i++) {
      if (c.charAt(1) === ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'][i]) {
        return c.charAt(0) + ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'][i + 1];
      }
    }
  }

  getLinksBoven(c: string): string {
    return this.getLinks(this.getBoven(c));
  }

  getRechtsBoven(c: string): string {
    return this.getRechts(this.getBoven(c));
  }

  getLinksOnder(c: string): string {
    return this.getLinks(this.getOnder(c));
  }

  getRechtsOnder(c: string): string {
    return this.getRechts(this.getOnder(c));
  }
}
