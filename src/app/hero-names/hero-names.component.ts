import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';


@Component({
  selector: 'app-hero-names',
  templateUrl: './hero-names.component.html',
  styleUrls: ['./hero-names.component.css']
})
export class HeroNamesComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  grabNames(): void {
  $.get('https://crossorigin.me/http://www.dmmuse.com/NameDump.aspx', function(data) {
    
    //console.log(data);  
    var html = $.parseHTML(data); 
    //console.log($(html).find('#downloadData'));
    //console.log($('div', html));
    //console.log($(html).filter("select").attr("id"));
    //console.log($('#results').html(jQuery(data).find('#result').html())); 
    //$('#results').append(html);
    $('#results').html($('#ctl00_ContentPlaceHolder1_lbl1', html));
    //var namesString = $('#ctl00_ContentPlaceHolder1_lbl1', html);

    var content = $('#results').html().split('<br>');
    $('#results').empty().append('<ul class="list-group">');
    for (var i = 0; i+1 < content.length; i++) {
        $('#results ul').append('<li class="list-group-item">' + content[i] + '</li>')
    }
});
  }
}
