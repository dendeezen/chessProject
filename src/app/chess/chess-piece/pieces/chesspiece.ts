import {PieceType} from './type';
import {faChessBishop, faChessKing, faChessPawn, faChessQueen, faChessRook, faChessKnight} from '@fortawesome/free-solid-svg-icons';

export class Chesspiece {
  coordinate: string;
  id: string;
  isBlack: boolean;
  type: PieceType;

  constructor(coordinate: string, id: string, isBlack: boolean, type: PieceType) {
    this.coordinate = coordinate;
    this.id = id;
    this.isBlack = isBlack;
    this.type = type;
  }

  getColor() {
    if (this.isBlack) {
      return 'zwart';
    } else { return 'wit';
    }
  }

  getMovementOptions(): string[] {
    return [];
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
}
