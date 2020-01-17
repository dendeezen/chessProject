import {PieceType} from './type';

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

}
