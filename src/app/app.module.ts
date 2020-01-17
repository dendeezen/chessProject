import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import {HttpClientModule} from '@angular/common/http';

import { AppComponent } from './app.component';
import { MycomponentComponent } from './mycomponent/mycomponent.component';
import { AppRoutingModule } from './app.routes';
import { InitialComponent } from './initial/initial.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { SpotifyComponent } from './spotify/spotify.component';
import { SpotifyCallbackComponent } from './spotify-callback/spotify-callback.component';
import { TictactoeComponent } from './tictactoe/tictactoe.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import {FormsModule} from '@angular/forms';
import { ChessComponent } from './chess/chess.component';
import {DragDropModule} from '@angular/cdk/drag-drop';
import { ChessPieceComponent } from './chess/chess-piece/chess-piece.component';
import { GridComponentComponent } from './chess/grid-component/grid-component.component';
import { GridListComponentComponent } from './chess/grid-list-component/grid-list-component.component';
import {AngularDraggableModule} from 'angular2-draggable';

@NgModule({
  declarations: [
    AppComponent,
    MycomponentComponent,
    InitialComponent,
    PageNotFoundComponent,
    SpotifyComponent,
    SpotifyCallbackComponent,
    TictactoeComponent,
    ChessComponent,
    ChessPieceComponent,
    GridComponentComponent,
    GridListComponentComponent,
  ],
  imports: [
    BrowserModule,
    FontAwesomeModule,
    AppRoutingModule,
    HttpClientModule,
    NoopAnimationsModule,
    FormsModule,
    DragDropModule,
    AngularDraggableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
