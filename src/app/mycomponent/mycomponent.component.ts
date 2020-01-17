import {Component, Input, OnInit} from '@angular/core';
import { Joke } from '../joke';
import {Observable, Subscription} from 'rxjs';
import {ApiService} from '../api.service';

@Component({
  selector: 'app-mycomponent',
  templateUrl: './mycomponent.component.html',
  styleUrls: ['./mycomponent.component.css']
})

export class MycomponentComponent implements OnInit {

  joke$: Observable<Joke[]>;
  jokeCalled = false;
  constructor(private api: ApiService) {}
  jokes: Joke[];
  timesCalled = 0;

  jokeSetup = 'setup';
  jokePunchline = 'punchline';


  public loadJoke(): void {
    this.jokeCalled = true;
    this.joke$ = this.api.getSingleJoke();
    }

    public loadTenJokes(): void {
    this.jokeCalled = true;
    this.joke$ = this.api.getTenJokes();
    }

  ngOnInit() {
  }

}
