import { Injectable } from '@angular/core';
import { Observable, of } from "rxjs";
import { Hero } from './hero';
import { HEROES } from "./heroes";
import { LogService } from "./log.service";

@Injectable({
  providedIn: 'root'
})
export class HeroService {
  constructor(private logService: LogService) { }
  getHeroes(): Observable<Hero[]> {
    // *todo: send mensage after fetch
    this.logService.add('HeroService: fetched heroes')
    return of(HEROES);
  }
  getHero(id: number): Observable<Hero> {
    // *todo: send mensage after fetch
    this.logService.add(`HeroService: fetched hero id=${id}`)
    return of(HEROES.find(hero => hero.id === id))
  }
}
