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
      $(".type-youtube").append('<span class="badge badge-youtube" style="background-color: #ff0000;color: white;float: right;padding-left: 2em;">YT</span>');
      $(".type-spotify").append('<span class="badge badge-spotify" style="background-color: #1db954;color: white;float: right;padding-left: 2em;">S</span>');

      
      $(".badge-youtube").css({"background-color": "#ff0000", "color" : "white", "float" : "right", "padding-left" : "2em"});
      $(".badge-spotify").css({"background-color": "#ff0000", "color" : "white", "float" : "right", "padding-left" : "2em"});
    });
  }
}
