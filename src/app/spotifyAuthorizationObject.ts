export class SpotifyAuthorizationObject {
  access_token: string;
  token_type: string;
  scope: string;
  expires_in: number;
  refresh_token: string;

  constructor(access_token: string, scope: string, expires_in: number, refresh_token: string) {
    this.access_token = access_token;
    this.token_type = 'Bearer';
    this.scope = scope;
    this.expires_in = expires_in;
    this.refresh_token = refresh_token;
  }
}
