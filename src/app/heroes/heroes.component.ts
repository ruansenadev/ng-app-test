import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero'
import { HeroService } from "../hero.service";
import { LogService } from "../log.service";

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  heroes: Hero[];
  getHeroes(): void {
    this.heroService.getHeroes().subscribe(heroes => this.heroes = heroes)
  }

  selectedHero: Hero;
  onSelect(hero: Hero): void {
    this.logService.add(`HeroService: selected hero: ${hero.id}`)
    this.selectedHero = hero;
  }
  constructor(private heroService: HeroService, private logService: LogService) { }

  ngOnInit(): void {
    this.getHeroes()
  }

}
