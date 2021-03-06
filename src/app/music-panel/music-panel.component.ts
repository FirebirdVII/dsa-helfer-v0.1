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
    $(document).ready(function () {
      $(".type-youtube").append('<span class="badge badge-youtube">YT</span>');
      $(".type-youtube-playlist").append('<span class="badge badge-youtube-playlist">YT-PL</span>');
      $(".type-spotify").append('<span class="badge badge-spotify">S</span>');


      $(".badge-youtube").css({ "background-color": "#fb5050", "color": "white", "float": "right" });
      $(".badge-youtube-playlist").css({ "background-color": "#af0000", "color": "white", "float": "right" });
      $(".badge-spotify").css({ "background-color": "#76b852", "color": "white", "float": "right" });
    });
  }
}
