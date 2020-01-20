import {Chesspiece} from './chesspiece';
import {PieceType} from './type';

export class Toren extends Chesspiece {
  controleString: string;
  constructor(coordinate: string, id: string, isBlack: boolean, type: PieceType) {
    super(coordinate, id, isBlack, type);
  }

  getMovementOptions(allBlackCoordinates: string[], allWhiteCoordinates: string[]): string[] {
    if (this.isBlack) {
      while (Number(this.coordinate.charAt(0)) < 9 && !allBlackCoordinates.includes(this.getBoven(this.controleString))) {

      }
      return this.movementOptions;
    } else {
      return this.movementOptions;
    }
  }
}
