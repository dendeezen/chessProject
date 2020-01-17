import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import { Joke } from './joke';
import {Observable, throwError} from 'rxjs';
import {SpotifyAuthorizationObject} from './spotifyAuthorizationObject';
import {UserObject} from './userobject';
import {catchError} from 'rxjs/operators';

const singleJokeUrl = 'https://official-joke-api.appspot.com/jokes/programming/random';
const multipleJokesUrl = 'https://official-joke-api.appspot.com/jokes/programming/ten';
// tslint:disable-next-line:max-line-length
const spotifyUrl = 'https://accounts.spotify.com/authorize?client_id=82eb85d57f3a4b3398f6605ea7aa72ca&response_type=code&redirect_uri=localhost:4200/spotify-callback';
const tokenUrl = 'https://accounts.spotify.com/api/token';
const spotifyApi = 'https://api.spotify.com';

@Injectable({
  providedIn: 'root'
})
export class ApiService {



  constructor(private httpClient: HttpClient) { }

  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };
  private errorresult: Observable<UserObject[]>;

  public getSingleJoke() {
    return this.httpClient.get<Joke[]>(singleJokeUrl);
  }

  public getTenJokes() {
    return this.httpClient.get<Joke[]>(multipleJokesUrl);
  }

  public spotifyLogin() {
    return spotifyUrl;
  }

 public authorize(code: string) {

    console.log('Authorize wordt aangeroepen. \nCode: ' + code);
    const params = new HttpParams()
      .set('grant_type', 'authorization_code')
      .set('code', code)
      .set('redirect_uri', 'http://localhost:4200/spotify-callback');
    const encoded = (btoa('82eb85d57f3a4b3398f6605ea7aa72ca' + ':' + '204635bb34394f73a30c0b83960f211c'));
    const headers = new HttpHeaders({
      Authorization : 'Basic ' + encoded,
      'Content-Type': 'application/x-www-form-urlencoded'
    });
    const options = {headers};
    return this.httpClient.post<SpotifyAuthorizationObject>(tokenUrl, params, options)
      .subscribe(result => {
        localStorage.setItem('token', result.access_token);
        localStorage.setItem('refresh_token', result.refresh_token);
        console.log('Einde authorize. Token: ' + result.access_token);
    });
 }

  public getSpotifyUserData(token: string) {
    console.log('Begin van getSpotifyUserData. Token: ' + token);
    const headers = new HttpHeaders({
      Authorization : 'Bearer ' + token
    });
    const options = {headers};
    return this.httpClient.get<UserObject[]>(spotifyApi + '/v1/me', options);
  }

  private handleError(error: Response) {
    console.error(error);
    if (error.status === 401 && error.statusText === 'OK') {
      console.log('401 status detected; token expired');
      localStorage.clear();
    }
    return throwError(error || 'server error');
  }

}
