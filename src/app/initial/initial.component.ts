import { Component, OnInit } from '@angular/core';
import {faFilm, faSpaceShuttle, faTh, faChess} from '@fortawesome/free-solid-svg-icons';
import {} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-initial',
  templateUrl: './initial.component.html',
  styleUrls: ['./initial.component.css']
})
export class InitialComponent implements OnInit {
  faFilm = faFilm;
  faSpaceShuttle = faSpaceShuttle;
  faTh = faTh;
  faChess = faChess;
  title = 'AngularNozemings';
  constructor() { }

  ngOnInit() {
  }

}
