export interface Player {
  id: string;
}

export interface Game {
  status: string;
  id: string;
  created_at: number;
  players: Player[];
  board: any[];
  winner?: any;
}

export interface Tictactoegameobject {
  game: Game;
}
