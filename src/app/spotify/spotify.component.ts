import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {ApiService} from '../api.service';

@Component({
  selector: 'app-spotify',
  templateUrl: './spotify.component.html',
  styleUrls: ['./spotify.component.css']
})
export class SpotifyComponent implements OnInit {


  constructor(private api: ApiService) { }

  ngOnInit() {

  }

  redirect(): void {
    this.api.spotifyLogin();
  }

}
