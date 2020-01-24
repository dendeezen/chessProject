import {Chesspiece} from './chesspiece';
import {PieceType} from './type';

export class Toren extends Chesspiece {
  controleString: string;
  constructor(coordinate: string, id: string, isBlack: boolean, type: PieceType) {
    super(coordinate, id, isBlack, type);
  }

  getMovementOptions(allBlackCoordinates: string[], allWhiteCoordinates: string[]): string[] {
    this.controleString = this.coordinate;
    this.movementOptions = [];
    if (this.isBlack) {
      // tslint:disable-next-line:max-line-length
      while (Number(this.controleString.charAt(0)) < 8 && !allBlackCoordinates.includes(this.getBoven(this.controleString)) && !allWhiteCoordinates.includes(this.controleString)) {
        this.movementOptions.push(this.getBoven(this.controleString));
        this.controleString = this.getBoven(this.controleString);
      }
      this.controleString = this.coordinate;
      // tslint:disable-next-line:max-line-length
      while (Number(this.controleString.charAt(0)) > 1 && !allBlackCoordinates.includes(this.getOnder(this.controleString)) && !allWhiteCoordinates.includes(this.controleString)) {
        this.movementOptions.push(this.getOnder(this.controleString));
        this.controleString = this.getOnder(this.controleString);
      }
      this.controleString = this.coordinate;
      // tslint:disable-next-line:max-line-length
      while (this.controleString.charAt(2) === '' && !allBlackCoordinates.includes(this.getLinks(this.controleString)) && !allWhiteCoordinates.includes(this.controleString)) {
        this.movementOptions.push(this.getLinks(this.controleString));
        this.controleString = this.getLinks(this.controleString);
      }
      this.controleString = this.coordinate;
      // tslint:disable-next-line:max-line-length
      while (this.controleString.charAt(2) === '' && !allBlackCoordinates.includes(this.getRechts(this.controleString)) && !allWhiteCoordinates.includes(this.controleString)) {
        this.movementOptions.push(this.getRechts(this.controleString));
        this.controleString = this.getRechts(this.controleString);
      }
      return this.movementOptions;
    } else {
      // tslint:disable-next-line:max-line-length
      while (Number(this.controleString.charAt(0)) < 8 && !allWhiteCoordinates.includes(this.getBoven(this.controleString)) && !allBlackCoordinates.includes(this.controleString)) {
        this.movementOptions.push(this.getBoven(this.controleString));
        this.controleString = this.getBoven(this.controleString);
      }
      this.controleString = this.coordinate;
// tslint:disable-next-line:max-line-length
      while (Number(this.controleString.charAt(0)) > 1 && !allWhiteCoordinates.includes(this.getOnder(this.controleString)) && !allBlackCoordinates.includes(this.controleString)) {
        this.movementOptions.push(this.getOnder(this.controleString));
        this.controleString = this.getOnder(this.controleString);
      }
      this.controleString = this.coordinate;
// tslint:disable-next-line:max-line-length
      while (this.controleString.charAt(2) === '' && !allWhiteCoordinates.includes(this.getLinks(this.controleString)) && !allBlackCoordinates.includes(this.controleString)) {
        this.movementOptions.push(this.getLinks(this.controleString));
        this.controleString = this.getLinks(this.controleString);
      }
      this.controleString = this.coordinate;
// tslint:disable-next-line:max-line-length
      while (this.controleString.charAt(2) === '' && !allWhiteCoordinates.includes(this.getRechts(this.controleString)) && !allBlackCoordinates.includes(this.controleString)) {
        this.movementOptions.push(this.getRechts(this.controleString));
        this.controleString = this.getRechts(this.controleString);
      }

      return this.movementOptions;
    }
  }
}
