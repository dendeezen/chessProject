import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

@Component({
  selector: 'app-tictactoe',
  templateUrl: './tictactoe.component.html',
  styleUrls: ['./tictactoe.component.css']
})
export class TictactoeComponent implements OnInit {
  id: string;
  winnerDetermined = false;
  draw = false;
  players: Array<string> = ['X', 'O'];
  currentPlayer = this.players[Math.floor(Math.random() * Math.floor(2))];
  gameBoard = '/---------/' + this.currentPlayer;
  selectedLevel;
  data: Array<string> = ['2 player local', 'vs computer', 'online'];

  constructor() {  }

  selected() {
    console.log('selected level: ' + this.selectedLevel);
    if (this.selectedLevel === 'vs computer') {

    }
  }

  ngOnInit() {
  }

  reset(): void {
    document.getElementById('1').innerText = '';
    document.getElementById('2').innerText = '';
    document.getElementById('3').innerText = '';
    document.getElementById('4').innerText = '';
    document.getElementById('5').innerText = '';
    document.getElementById('6').innerText = '';
    document.getElementById('7').innerText = '';
    document.getElementById('8').innerText = '';
    document.getElementById('9').innerText = '';
    this.draw = false;
    this.winnerDetermined = false;
    this.gameBoard = '/---------/' + this.currentPlayer;
  }

  cell1Clicked(): void {
    if (!this.winnerDetermined && document.getElementById('1').innerText === '') {
      document.getElementById('1').innerText = this.currentPlayer;
      this.setCharAt(1);
      this.determineWinner();
      this.changeCurrentPlayer();
    }
  }

  cell2Clicked(): void {
    if (!this.winnerDetermined && document.getElementById('2').innerText === '') {
      document.getElementById('2').innerText = this.currentPlayer;
      this.setCharAt(2);
      this.determineWinner();
      this.changeCurrentPlayer();
    }
  }

  cell3Clicked(): void {
    if (!this.winnerDetermined && document.getElementById('3').innerText === '') {
      document.getElementById('3').innerText = this.currentPlayer;
      this.setCharAt(3);
      this.determineWinner();
      this.changeCurrentPlayer();
    }
  }

  cell4Clicked(): void {
    if (!this.winnerDetermined && document.getElementById('4').innerText === '') {
      document.getElementById('4').innerText = this.currentPlayer;
      this.setCharAt(4);
      this.determineWinner();
      this.changeCurrentPlayer();
    }
  }

  cell5Clicked(): void {
    if (!this.winnerDetermined && document.getElementById('5').innerText === '') {
      document.getElementById('5').innerText = this.currentPlayer;
      this.setCharAt(5);
      this.determineWinner();
      this.changeCurrentPlayer();
    }
  }

  cell6Clicked(): void {
    if (!this.winnerDetermined && document.getElementById('6').innerText === '') {
      document.getElementById('6').innerText = this.currentPlayer;
      this.setCharAt(6);
      this.determineWinner();
      this.changeCurrentPlayer();
    }
  }

  cell7Clicked(): void {
    if (!this.winnerDetermined && document.getElementById('7').innerText === '') {
      document.getElementById('7').innerText = this.currentPlayer;
      this.setCharAt(7);
      this.determineWinner();
      this.changeCurrentPlayer();
    }
  }

  cell8Clicked(): void {
    if (!this.winnerDetermined && document.getElementById('8').innerText === '') {
      document.getElementById('8').innerText = this.currentPlayer;
      this.setCharAt(8);
      this.determineWinner();
      this.changeCurrentPlayer();
    }
  }

  cell9Clicked(): void {
    if (!this.winnerDetermined && document.getElementById('9').innerText === '') {
      document.getElementById('9').innerText = this.currentPlayer;
      this.setCharAt(9);
      this.determineWinner();
      this.changeCurrentPlayer();
    }
  }

  changeCurrentPlayer(): void {
    if (!this.winnerDetermined) {
      if (this.currentPlayer === 'X') {
        this.currentPlayer = 'O';
      } else {
        this.currentPlayer = 'X';
      }
      this.gameBoard = this.gameBoard.substr(0, 11) + this.currentPlayer;
    }
  }

  determineWinner(): void {
    // tslint:disable-next-line:max-line-length
    if (this.gameBoard.charAt(1) === this.gameBoard.charAt(2) && this.gameBoard.charAt(2) === this.gameBoard.charAt(3) && this.gameBoard.charAt(1).trim() !== '-') {
      this.winnerDetermined = true;
      console.log('eerste horizontaal');
    }
    // tslint:disable-next-line:max-line-length
    if (this.gameBoard.charAt(4) === this.gameBoard.charAt(5) && this.gameBoard.charAt(5) === this.gameBoard.charAt(6) && this.gameBoard.charAt(4).trim() !== '-') {
      this.winnerDetermined = true;
      console.log('tweede horizontaal');
    }
    // tslint:disable-next-line:max-line-length
    if (this.gameBoard.charAt(7) === this.gameBoard.charAt(8) && this.gameBoard.charAt(8) === this.gameBoard.charAt(9) && this.gameBoard.charAt(7).trim() !== '-') {
      this.winnerDetermined = true;
      console.log('derde horizontaal');
    }
    // tslint:disable-next-line:max-line-length
    if (this.gameBoard.charAt(1) === this.gameBoard.charAt(4) && this.gameBoard.charAt(4) === this.gameBoard.charAt(7) && this.gameBoard.charAt(1).trim() !== '-') {
      this.winnerDetermined = true;
      console.log('eerste verticaal');
    }
    // tslint:disable-next-line:max-line-length
    if (this.gameBoard.charAt(2) === this.gameBoard.charAt(5) && this.gameBoard.charAt(5) === this.gameBoard.charAt(8) && this.gameBoard.charAt(2).trim() !== '-') {
      this.winnerDetermined = true;
      console.log('tweede verticaal');
    }
    // tslint:disable-next-line:max-line-length
    if (this.gameBoard.charAt(3) === this.gameBoard.charAt(6) && this.gameBoard.charAt(6) === this.gameBoard.charAt(9) && this.gameBoard.charAt(3).trim() !== '-') {
      this.winnerDetermined = true;
      console.log('derde verticaal');
    }
    // tslint:disable-next-line:max-line-length
    if (this.gameBoard.charAt(1) === this.gameBoard.charAt(5) && this.gameBoard.charAt(5) === this.gameBoard.charAt(9) && this.gameBoard.charAt(1).trim() !== '-') {
      this.winnerDetermined = true;
      console.log('eerste diagonaal');
    }
    // tslint:disable-next-line:max-line-length
    if (this.gameBoard.charAt(3) === this.gameBoard.charAt(5) && this.gameBoard.charAt(5) === this.gameBoard.charAt(7) && this.gameBoard.charAt(3).trim() !== '-') {
      this.winnerDetermined = true;
      console.log('tweede diagonaal');
    }
    if (!this.gameBoard.includes('-')) {
      if (!this.winnerDetermined) {
        this.draw = true;
      }
    }
  }

  setCharAt(index: number): void {
    this.gameBoard = this.gameBoard.substr(0, index) + this.currentPlayer + this.gameBoard.substr(index + 1, 12);
  }
}
