import {Chesspiece} from './chesspiece';
import {PieceType} from './type';

export class Loper extends Chesspiece {
  controleString: string;
  constructor(coordinate: string, id: string, isBlack: boolean, type: PieceType) {
    super(coordinate, id, isBlack, type);
  }

  getMovementOptions(allBlackCoordinates: string[], allWhiteCoordinates: string[]): string[] {
    this.controleString = this.coordinate;
    this.movementOptions = [];
    if (this.isBlack) {
      // tslint:disable-next-line:max-line-length
      while (Number(this.controleString.charAt(0)) < 8 && this.controleString.charAt(2) === '' && !allBlackCoordinates.includes(this.getLinksBoven(this.controleString)) && !allWhiteCoordinates.includes(this.controleString)) {
        this.movementOptions.push(this.getLinksBoven(this.controleString));
        this.controleString = this.getLinksBoven(this.controleString);
      }
      this.controleString = this.coordinate;
      // tslint:disable-next-line:max-line-length
      while (Number(this.controleString.charAt(0)) < 8 && this.controleString.charAt(2) === '' && !allBlackCoordinates.includes(this.getRechtsBoven(this.controleString)) && !allWhiteCoordinates.includes(this.controleString)) {
        this.movementOptions.push(this.getRechtsBoven(this.controleString));
        this.controleString = this.getRechtsBoven(this.controleString);
      }
      this.controleString = this.coordinate;
      // tslint:disable-next-line:max-line-length
      while (Number(this.controleString.charAt(0)) > 1 && this.controleString.charAt(2) === '' && !allBlackCoordinates.includes(this.getLinksOnder(this.controleString)) && !allWhiteCoordinates.includes(this.controleString)) {
        this.movementOptions.push(this.getLinksOnder(this.controleString));
        this.controleString = this.getLinksOnder(this.controleString);
      }
      this.controleString = this.coordinate;
      // tslint:disable-next-line:max-line-length
      while (Number(this.controleString.charAt(0)) > 1 && this.controleString.charAt(2) === '' && !allBlackCoordinates.includes(this.getRechtsOnder(this.controleString)) && !allWhiteCoordinates.includes(this.controleString)) {
        this.movementOptions.push(this.getRechtsOnder(this.controleString));
        this.controleString = this.getRechtsOnder(this.controleString);
      }

      return this.movementOptions;
    } else {
      // tslint:disable-next-line:max-line-length
      while (Number(this.controleString.charAt(0)) < 8 && this.controleString.charAt(2) === '' && !allWhiteCoordinates.includes(this.getLinksBoven(this.controleString)) && !allBlackCoordinates.includes(this.controleString)) {
        this.movementOptions.push(this.getLinksBoven(this.controleString));
        this.controleString = this.getLinksBoven(this.controleString);
      }
      this.controleString = this.coordinate;
// tslint:disable-next-line:max-line-length
      while (Number(this.controleString.charAt(0)) < 8 && this.controleString.charAt(2) === '' && !allWhiteCoordinates.includes(this.getRechtsBoven(this.controleString)) && !allBlackCoordinates.includes(this.controleString)) {
        this.movementOptions.push(this.getRechtsBoven(this.controleString));
        this.controleString = this.getRechtsBoven(this.controleString);
      }
      this.controleString = this.coordinate;
// tslint:disable-next-line:max-line-length
      while (Number(this.controleString.charAt(0)) > 1 && this.controleString.charAt(2) === '' && !allWhiteCoordinates.includes(this.getLinksOnder(this.controleString)) && !allBlackCoordinates.includes(this.controleString)) {
        this.movementOptions.push(this.getLinksOnder(this.controleString));
        this.controleString = this.getLinksOnder(this.controleString);
      }
      this.controleString = this.coordinate;
// tslint:disable-next-line:max-line-length
      while (Number(this.controleString.charAt(0)) > 1 && this.controleString.charAt(2) === '' && !allWhiteCoordinates.includes(this.getRechtsOnder(this.controleString)) && !allBlackCoordinates.includes(this.controleString)) {
        this.movementOptions.push(this.getRechtsOnder(this.controleString));
        this.controleString = this.getRechtsOnder(this.controleString);
      }

      return this.movementOptions;

    }
  }
}
