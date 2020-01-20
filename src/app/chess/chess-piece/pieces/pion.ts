import {Chesspiece} from './chesspiece';
import {PieceType} from './type';

export class Pion extends Chesspiece {

  firstMove: boolean;

  constructor(coordinate: string, id: string, isBlack: boolean, type: PieceType) {
      super(coordinate, id, isBlack, type);
      this.firstMove = true;
  }

  getMovementOptions(allBlackCoordinates: string[], allWhiteCoordinates): string[] {
    this.movementOptions = [];
    if (this.isBlack) {
      if (!allBlackCoordinates.includes(this.getBoven(this.coordinate)) && !allWhiteCoordinates.includes(this.getBoven(this.coordinate))) {
        this.movementOptions.push(this.getBoven(this.coordinate));
      }
      // tslint:disable-next-line:max-line-length
      if (this.firstMove && !allBlackCoordinates.includes(this.getBoven(this.getBoven(this.coordinate))) && !allWhiteCoordinates.includes(this.getBoven(this.getBoven(this.coordinate))) && this.movementOptions.includes(this.getBoven(this.coordinate))) {
        this.movementOptions.push(this.getBoven(this.getBoven(this.coordinate)));
      }
      if (allWhiteCoordinates.includes(this.getLinksBoven(this.coordinate))) {
        this.movementOptions.push(this.getLinksBoven(this.coordinate));
      }
      if (allWhiteCoordinates.includes(this.getRechtsBoven(this.coordinate))) {
        this.movementOptions.push(this.getRechtsBoven(this.coordinate));
      }
      return this.movementOptions;
    } else {
      if (!allBlackCoordinates.includes(this.getOnder(this.coordinate)) && !allWhiteCoordinates.includes(this.getOnder(this.coordinate))){
        this.movementOptions.push(this.getOnder(this.coordinate));
      }
      // tslint:disable-next-line:max-line-length
      if (this.firstMove && !allBlackCoordinates.includes(this.getOnder(this.getOnder(this.coordinate))) && this.firstMove && !allWhiteCoordinates.includes(this.getBoven(this.getBoven(this.coordinate)))) {
        this.movementOptions.push(this.getOnder(this.getOnder(this.coordinate)));
      }
      if (allBlackCoordinates.includes(this.getLinksOnder(this.coordinate))) {
        this.movementOptions.push(this.getLinksOnder(this.coordinate));
      }
      if (allBlackCoordinates.includes(this.getRechtsOnder(this.coordinate))) {
        this.movementOptions.push(this.getRechtsOnder(this.coordinate));
      }
      return this.movementOptions;
    }
  }
}
