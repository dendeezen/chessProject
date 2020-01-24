import {Chesspiece} from './chesspiece';
import {PieceType} from './type';

export class Koning extends Chesspiece {
  schaak: boolean;
  constructor(coordinate: string, id: string, isBlack: boolean, type: PieceType) {
    super(coordinate, id, isBlack, type);
    this.schaak = false;
  }

  getMovementOptions(allBlackCoordinates: string[], allWhiteCoordinates: string[]): string[] {
    this.movementOptions = [];
    if (this.isBlack) {
      if (!allBlackCoordinates.includes(this.getBoven(this.coordinate))) {
        this.movementOptions.push(this.getBoven(this.coordinate));
      }
// tslint:disable-next-line:no-switch-case-fall-through
      if (!allBlackCoordinates.includes(this.getRechtsBoven(this.coordinate))) {
      this.movementOptions.push(this.getRechtsBoven(this.coordinate));
      }
// tslint:disable-next-line:no-switch-case-fall-through
      if (!allBlackCoordinates.includes(this.getRechts(this.coordinate))) {
        this.movementOptions.push(this.getRechts(this.coordinate));
      }
// tslint:disable-next-line:no-switch-case-fall-through
      if (!allBlackCoordinates.includes(this.getRechtsOnder(this.coordinate))) {
         this.movementOptions.push(this.getRechtsOnder(this.coordinate));
      }
// tslint:disable-next-line:no-switch-case-fall-through
      if (!allBlackCoordinates.includes(this.getOnder(this.coordinate))) {
        this.movementOptions.push(this.getOnder(this.coordinate));
      }
// tslint:disable-next-line:no-switch-case-fall-through
      if (!allBlackCoordinates.includes(this.getOnder(this.coordinate))) {
         this.movementOptions.push(this.getOnder(this.coordinate));
      }
// tslint:disable-next-line:no-switch-case-fall-through
      if (!allBlackCoordinates.includes(this.getLinksOnder(this.coordinate))) {
         this.movementOptions.push(this.getLinksOnder(this.coordinate));
      }
// tslint:disable-next-line:no-switch-case-fall-through
      if (!allBlackCoordinates.includes(this.getLinks(this.coordinate))) {
         this.movementOptions.push(this.getLinks(this.coordinate));
      }
// tslint:disable-next-line:no-switch-case-fall-through
      if (!allBlackCoordinates.includes(this.getLinksBoven(this.coordinate))) {
         this.movementOptions.push(this.getLinksBoven(this.coordinate));
      }
      return this.movementOptions;

    } else {
      if (!allWhiteCoordinates.includes(this.getBoven(this.coordinate))) {
        this.movementOptions.push(this.getBoven(this.coordinate));
      }
// tslint:disable-next-line:no-switch-case-fall-through
      if (!allWhiteCoordinates.includes(this.getRechtsBoven(this.coordinate))) {
        this.movementOptions.push(this.getRechtsBoven(this.coordinate));
      }
// tslint:disable-next-line:no-switch-case-fall-through
      if (!allWhiteCoordinates.includes(this.getRechts(this.coordinate))) {
        this.movementOptions.push(this.getRechts(this.coordinate));
      }
// tslint:disable-next-line:no-switch-case-fall-through
      if (!allWhiteCoordinates.includes(this.getRechtsOnder(this.coordinate))) {
        this.movementOptions.push(this.getRechtsOnder(this.coordinate));
      }
// tslint:disable-next-line:no-switch-case-fall-through
      if (!allWhiteCoordinates.includes(this.getOnder(this.coordinate))) {
        this.movementOptions.push(this.getOnder(this.coordinate));
      }
// tslint:disable-next-line:no-switch-case-fall-through
      if (!allWhiteCoordinates.includes(this.getOnder(this.coordinate))) {
        this.movementOptions.push(this.getOnder(this.coordinate));
      }
// tslint:disable-next-line:no-switch-case-fall-through
      if (!allWhiteCoordinates.includes(this.getLinksOnder(this.coordinate))) {
        this.movementOptions.push(this.getLinksOnder(this.coordinate));
      }
// tslint:disable-next-line:no-switch-case-fall-through
      if (!allWhiteCoordinates.includes(this.getLinks(this.coordinate))) {
        this.movementOptions.push(this.getLinks(this.coordinate));
      }
// tslint:disable-next-line:no-switch-case-fall-through
      if (!allWhiteCoordinates.includes(this.getLinksBoven(this.coordinate))) {
        this.movementOptions.push(this.getLinksBoven(this.coordinate));
      }
      return this.movementOptions;
    }
  }
}
