import { Component, OnInit } from '@angular/core';
import { Event } from '../event';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-random-events',
  templateUrl: './random-events.component.html',
  styleUrls: ['./random-events.component.css']
})
export class RandomEventsComponent implements OnInit {
  events: Event[];
  event: Event = null;
  eventGenerated: boolean = false;

  eventHeroes: Hero[] = [];
  kampf: Hero[];

  constructor(private heroService: HeroService) {
  }

  ngOnInit() {
    this.getEvents();
    this.getKampf();
  }

  getEvents(): void {
    this.heroService.getEvents().subscribe(events => this.events = events);
  }

  getKampf(): void {
    this.heroService.getKampf().subscribe(kampf => this.kampf = kampf);
  }

  fillEventHeroes(): void {
    this.eventHeroes = [];
    if(this.event.monsterIds) {
      let monsterIds: string[] = this.event.monsterIds.split(",");

      for(var i = 0; i < monsterIds.length; i++) {
        this.heroService.getHero(+monsterIds[i])
          .subscribe(hero => this.eventHeroes.push(hero));
      }
    } else {
      console.log("no monsterIds angegeben");
    }
  }

  addItemToKampf(hero: Hero): void {
    if(this.kampf.indexOf(hero) == -1) {
      this.heroService.addHeroToKampf(hero)
        .subscribe(hero => this.kampf.push(hero));
    }
  }

  getRandomEvent(terrain: number) {

    switch(terrain) { 
      /*
      1 - city
      2 - forest
      3 - grassland
      4 - road
      5 - mountains
      6 - cave
      */
      case 1: { 
        this.heroService.getRandomEvent(Math.round(Math.random() * (this.events.length - 0)) + 0)
        .subscribe(event => { if(event.city) {this.event = event; this.fillEventHeroes();} else {this.getRandomEvent(terrain);}});
        this.eventGenerated = true;
        break; 
      } 
      case 2: { 
        this.heroService.getRandomEvent(Math.round(Math.random() * (this.events.length - 0)) + 0)
        .subscribe(event => { if(event.forest) {this.event = event; this.fillEventHeroes();} else {this.getRandomEvent(terrain);}});
        this.eventGenerated = true;
        break; 
      } 
      case 3: { 
        this.heroService.getRandomEvent(Math.round(Math.random() * (this.events.length - 0)) + 0)
        .subscribe(event => { if(event.grassland) {this.event = event; this.fillEventHeroes();} else {this.getRandomEvent(terrain);}});
        this.eventGenerated = true;
        break; 
      } 
      case 4: { 
        this.heroService.getRandomEvent(Math.round(Math.random() * (this.events.length - 0)) + 0)
        .subscribe(event => { if(event.road) {this.event = event; this.fillEventHeroes();} else {this.getRandomEvent(terrain);}});
        this.eventGenerated = true;
        break; 
      } 
      case 5: { 
        this.heroService.getRandomEvent(Math.round(Math.random() * (this.events.length - 0)) + 0)
        .subscribe(event => { if(event.mountains) {this.event = event; this.fillEventHeroes();} else {this.getRandomEvent(terrain);}});
        this.eventGenerated = true;
        break; 
      } 
      case 6: { 
        this.heroService.getRandomEvent(Math.round(Math.random() * (this.events.length - 0)) + 0)
        .subscribe(event => { if(event.cave) {this.event = event; this.fillEventHeroes();} else {this.getRandomEvent(terrain);}});
        this.eventGenerated = true;
        break; 
      } 
      default: { 
        //statements; 
        console.log("I should not be here");
        break; 
      } 
    }
  }
}
