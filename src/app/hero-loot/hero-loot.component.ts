import { Component, OnInit } from '@angular/core';
import { Loot } from '../loot';
import { HeroService } from '../hero.service';
import * as $ from 'jquery';

@Component({
  selector: 'app-hero-loot',
  templateUrl: './hero-loot.component.html',
  styleUrls: ['./hero-loot.component.css']
})
export class HeroLootComponent implements OnInit {
  lootTable: Loot[];
  currentLootPackage: Loot[] = [];


  constructor(private heroService: HeroService) { }

  ngOnInit() {
    this.getLoot();

    /*
    this.randomLoot0 = [{ id: 97, rarity: 0, name: 'XXX0'}];
    this.randomLoot1 = [{ id: 98, rarity: 1, name: 'XXX1'}];
    this.randomLoot2 = [{ id: 99, rarity: 2, name: 'XXX2'}];
    */
   
  }

  getLoot(): void {
    this.heroService.getLoot().subscribe(loot => this.lootTable = loot);
  }


  addLootItem(id: number): void {
    this.heroService.getLootItem(id)
      .subscribe(lootItem => this.currentLootPackage.push(lootItem));
  }

  addLootItemXTimes(times: number, min: number, max: number): void {
    for(let i=0; i<times; times--) {
      this.addLootItem(this.randomNumberBetweenMinMax(min, max));
    }
  }

  randomNumberBetweenMinMax(min: number, max: number): number {
    return Math.round(Math.random() * (max - min)) + min;
  }
  resetCurrentLootPackage(): void {
    this.currentLootPackage = [];
  }
  compileLootPackage(): void {
    this.resetCurrentLootPackage();
    let lootValue = +((document.getElementById("myRange") as HTMLInputElement).value);

  let rarity0min = 0;
  let rarity0max = 66;

  let rarity1min = 100;
  let rarity1max = 194;

  let rarity2min = 200;
  let rarity2max = 233;
  
      switch(lootValue) { 
        case 1: { 
          console.log("I'm here");
          //Trash items 
          this.addLootItemXTimes(this.randomNumberBetweenMinMax(1, 2), rarity0min, rarity0max)
          break; 
        } 
        case 2: { 
          console.log("I'm here");
          //Trash items 
          this.addLootItemXTimes(this.randomNumberBetweenMinMax(1, 2), rarity0min, rarity0max)
          //Common items 
          this.addLootItemXTimes(this.randomNumberBetweenMinMax(0, 1), rarity1min, rarity1max)
          break; 
        } 
        case 3: { 
          //Trash items 
          this.addLootItemXTimes(this.randomNumberBetweenMinMax(0, 2), rarity0min, rarity0max)
          //Common items 
          this.addLootItemXTimes(this.randomNumberBetweenMinMax(0, 2), rarity1min, rarity1max)
          break; 
        } 
        case 4: { 
          //Trash items 
          this.addLootItemXTimes(this.randomNumberBetweenMinMax(0, 1), rarity0min, rarity0max)
          //Common items 
          this.addLootItemXTimes(this.randomNumberBetweenMinMax(0, 2), rarity1min, rarity1max)
          //Rare items 
          this.addLootItemXTimes(this.randomNumberBetweenMinMax(0, 1), rarity2min, rarity2max)
          break; 
      } 
        case 5: { 
          //Common items 
          this.addLootItemXTimes(this.randomNumberBetweenMinMax(0, 2), rarity1min, rarity1max)
          //Rare items 
          this.addLootItemXTimes(this.randomNumberBetweenMinMax(0, 2), rarity2min, rarity2max)
          break; 
      } 
        default: { 
          //statements; 
          console.log("I should not be here");
          if(lootValue == NaN) {console.log("value is not a number dummy");}
          break; 
        } 
      }
  }
}
