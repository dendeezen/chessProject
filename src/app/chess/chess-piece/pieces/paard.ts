import {Chesspiece} from './chesspiece';
import {PieceType} from './type';

export class Paard extends Chesspiece {
  controleString: string;
  constructor(coordinate: string, id: string, isBlack: boolean, type: PieceType) {
    super(coordinate, id, isBlack, type);
  }

  plusGetal(v: number): number {
    return Number(this.coordinate.charAt(0)) + v;
  }

  plusCijfer(v: number) {
    for (let i = 0; i < 8; i++) {
      if (this.coordinate.charAt(1) === ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'][i] && i + v < 8 && i + v >= 0) {
        return ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'][i + v];
      }
    }
    return 'XX';
  }

  getMovementOptions(allBlackCoordinates: string[], allWhiteCoordinates: string[]): string[] {
    this.movementOptions = [];
    for (let i = 0; i < 8; i++) {
      this.controleString = this.plusGetal([1, -1, 1, -1, 2, -2, 2, -2][i]) + this.plusCijfer([2, 2, -2, -2, 1, 1, -1, -1][i]);
      // tslint:disable-next-line:max-line-length
      if ((this.isBlack && !allBlackCoordinates.includes(this.controleString)) || (!this.isBlack && !allWhiteCoordinates.includes(this.controleString))) {
        this.movementOptions.push(this.controleString);
      }
    }
    return this.movementOptions;
  }
}
