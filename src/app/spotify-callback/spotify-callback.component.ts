import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {ApiService} from '../api.service';
import {UserObject} from '../userobject';
import {Observable} from 'rxjs';
import {InitialComponent} from '../initial/initial.component';
import {Router} from '@angular/router';


@Component({
  selector: 'app-spotify-callback',
  templateUrl: './spotify-callback.component.html',
  styleUrls: ['./spotify-callback.component.css']
})
export class SpotifyCallbackComponent implements OnInit {

  code: string;
  error: string;
  token: string;
  userdata: string;
  dataFetched = false;
  userobject: UserObject;

  constructor(private route: ActivatedRoute, private api: ApiService, private router: Router) { }



  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      console.log(params);
      this.code = params.code;
      this.error = params.error;
    });
    this.token = localStorage.getItem('token');
    console.log('noOnInit bereikt. dataFetched: ' + this.dataFetched + ', token: ' + this.token);
    if (this.error == null && this.code != null && this.token == null) {
      console.log('Login successful');
      this.api.authorize(this.code);
      console.log('Token in component:' + this.token);
      console.log('token in localstorage: ' + localStorage.getItem('token'));
      this.show();
    } else if (this.token != null) {
      this.dataFetched = true;
      console.log('token: ' + this.token);
      this.show();
    }
  }

  show(): void {
    console.log('Begin Show(). Token in localstorage: ' + localStorage.getItem('token'));
    // @ts-ignore
    this.api.getSpotifyUserData(this.token).subscribe((result: UserObject) => {
      this.userobject = result;
      this.userdata = JSON.stringify(result);
    });
  }

  logout(): void {
    localStorage.clear();
    this.code = null;
    this.dataFetched = false;
    this.router.navigate(['']);
  }

}
