import {Chesspiece} from './chesspiece';
import {PieceType} from './type';

export class Pion extends Chesspiece {

  firstMove: boolean;

  constructor(coordinate: string, id: string, isBlack: boolean, type: PieceType) {
      super(coordinate, id, isBlack, type);
      this.firstMove = true;
  }

  getMovementOptions(): string[] {
    if (this.isBlack) {
      if (this.firstMove) {
        return [this.coordinate.charAt(0) + 1 + this.coordinate.charAt(1), this.coordinate.charAt(0) + 2 + this.coordinate.charAt(1)];
      } else {
        return [this.coordinate.charAt(0) + 1 + this.coordinate.charAt(1)];
      }
    }
  }
}
