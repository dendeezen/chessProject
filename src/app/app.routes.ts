
import { NgModule} from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MycomponentComponent } from './mycomponent/mycomponent.component';
import { InitialComponent } from './initial/initial.component';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';
import {SpotifyComponent} from './spotify/spotify.component';
import {SpotifyCallbackComponent} from './spotify-callback/spotify-callback.component';
import {TictactoeComponent} from './tictactoe/tictactoe.component';
import { ChessComponent } from './chess/chess.component';


const routes: Routes = [
  { path: '', component: InitialComponent },
  { path: 'mycomponent', component: MycomponentComponent },
  { path: 'spotify', component: SpotifyComponent },
  { path: 'spotify-callback', component: SpotifyCallbackComponent },
  { path: 'tictactoe', component: TictactoeComponent },
  { path: 'chess', component: ChessComponent },
  { path: '**', component: PageNotFoundComponent }
];
@NgModule ({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
