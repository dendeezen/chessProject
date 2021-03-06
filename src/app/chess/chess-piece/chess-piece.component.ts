import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Chesspiece} from './pieces/chesspiece';
import {faChessKing} from '@fortawesome/free-solid-svg-icons';
import {PieceType} from './pieces/type';
import {ChessPieceMoveEvent} from '../chessPieceMoveEvent';

@Component({
  selector: 'app-chess-piece',
  templateUrl: './chess-piece.component.html',
  styleUrls: ['./chess-piece.component.css']
})
export class ChessPieceComponent implements OnInit {

  @Input() chesspiece: Chesspiece;
  faChessKing = faChessKing;

  // tslint:disable-next-line:no-output-on-prefix
  // @ts-ignore
  @Output() onDrag = new EventEmitter<ChessPieceMoveEvent>();

  constructor() { }

  getGridId() {
    console.log('test');
  }

  ngOnInit() {
  }

}
