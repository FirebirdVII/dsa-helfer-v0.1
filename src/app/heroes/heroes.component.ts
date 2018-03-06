import { Component, OnInit } from '@angular/core';

import { Hero } from '../hero';
import { HeroService } from '../hero.service';


@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  heroes: Hero[];
  kampf: Hero[];
  
  public disabledHeroes: boolean = false;

  constructor(private heroService: HeroService) { }

  ngOnInit() {
    this.getHeroes();
    this.getKampf();    
  }

  getHeroes(): void {
    this.heroService.getHeroes()
    .subscribe(heroes => this.heroes = heroes);
  }

  getKampf(): void {
    this.heroService.getKampf()
    .subscribe(kampf => this.kampf = kampf);
  }

  add(name: string): void {
    name = name.trim();
    if (!name) { return; }
    this.heroService.addHero({ name } as Hero)
      .subscribe(hero => {
        this.heroes.push(hero);
      });
  }
  

  delete(hero: Hero): void {
    this.heroes = this.heroes.filter(h => h !== hero);
    this.heroService.deleteHero(hero).subscribe();
  }

  plusOneLeP(hero: Hero): void {
    if(hero.maxlep > hero.lep) {
      hero.lep += 1;
      this.heroService.updateHero(hero)
      .subscribe();
    }
  }

  minusOneLeP(hero: Hero): void {
    if(hero.lep > 0) {
    hero.lep -= 1;
    this.heroService.updateHero(hero)
    .subscribe();
    }
  }

  addItemToKampf(hero: Hero): void {
    this.heroService.addHeroToKampf(hero)
      .subscribe(hero => this.kampf.push(hero));
  }


  deleteItemFromKampf(hero: Hero): void {
    this.kampf = this.kampf.filter(h => h !== hero);
    this.heroService.deleteKampfHero(hero).subscribe();
  }

  addAltdorf(): void {
    for(var i = 0; i < 4; i++) {
    this.heroService.getHero(380+i)
      .subscribe(hero => this.kampf.push(hero));
    }
    this.disabledHeroes = true;
  }

  addReunion(): void {
    for(var i = 0; i < 6; i++) {
      this.heroService.getHero(390+i)
        .subscribe(hero => this.kampf.push(hero));
      }
      this.disabledHeroes = true;
    }


  addFekide(): void {
    for(var i = 0; i < 8; i++) {
      this.heroService.getHero(300+i)
        .subscribe(hero => this.kampf.push(hero));
      }
      this.disabledHeroes = true;
    }

}
