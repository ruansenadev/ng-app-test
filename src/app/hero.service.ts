import { Injectable } from '@angular/core';
import { Observable, of } from "rxjs";
import { Hero } from './hero';
import { HEROES } from "./heroes";
import { LogService } from "./log.service";

@Injectable({
  providedIn: 'root'
})
export class HeroService {
  getHeroes(): Observable<Hero[]> {
    this.logService.add('HeroService: fetched heroes')
    return of(HEROES);
  }
  constructor(private logService: LogService) { }
}
