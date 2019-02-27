import { Component, OnInit } from '@angular/core';
import { HeroService } from '../hero.service';
import * as $ from 'jquery';

@Component({
  selector: 'app-music-panel',
  templateUrl: './music-panel.component.html',
  styleUrls: ['./music-panel.component.css']
})
export class MusicPanelComponent implements OnInit {

  constructor(private heroService: HeroService) { }

  ngOnInit() {
    $(".type-youtube").append('<span class="badge badge-youtube">YT</span>');
    $(".type-spotify").append('<span class="badge badge-spotify">S</span>');
  }
}
