import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Chesspiece} from '../chess-piece/pieces/chesspiece';
import {ChessPieceMoveEvent} from '../chessPieceMoveEvent';

@Component({
  selector: 'app-chess-piece-list',
  templateUrl: './chess-piece-list.component.html',
  styleUrls: ['./chess-piece-list.component.css']
})
export class ChessPieceListComponent implements OnInit {
  @Input() chesspieces: Chesspiece[];
  // tslint:disable-next-line:no-output-on-prefix
  // @ts-ignore
  @Output() onDrag = new EventEmitter<ChessPieceMoveEvent>();
  constructor() { }

  ngOnInit() {
  }

}
