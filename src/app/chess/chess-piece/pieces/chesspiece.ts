import {PieceType} from './type';

export class Chesspiece {
  x: string;
  y: string;
  isBlack: boolean;
  type: PieceType;

  constructor(x: string, y: string, isBlack: boolean, type: PieceType) {
    this.x = x;
    this.y = y;
    this.isBlack = isBlack;
    this.type = type;
  }
}
