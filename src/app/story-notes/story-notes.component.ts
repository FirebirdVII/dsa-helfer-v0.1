import { Component, OnInit, ViewChild } from '@angular/core';
import { HeroService } from '../hero.service';
import { NgForm } from '@angular/forms';
import { Note } from '../note';

@Component({
  selector: 'app-story-notes',
  templateUrl: './story-notes.component.html',
  styleUrls: ['./story-notes.component.css']
})
export class StoryNotesComponent implements OnInit {
  notesList: Note[]

  @ViewChild('form') form: NgForm;
  formModel: any = {
    notes: null
  };

  noteID: number = 1;

  constructor(private heroService: HeroService) { }

  ngOnInit() {
    this.getNotesList();
  }

  getNotesList(): void {
    this.heroService.getNotesList()
    .subscribe(notesList => this.notesList = notesList);
  }

  submitNewNote() {
    let note = new Note();
    note.id = this.noteID;
    note.date = new Date();
    note.notes = this.formModel.notes;

      if (!note) { console.log("INSIDE THE IF"); return; }
      this.heroService.addNote(note as Note)
      .subscribe(newNote => {this.notesList.push(newNote)});

    //this.heroService.addNote(this.noteID, this.formModel.notes);
    this.noteID++;
    this.form.reset();
  }

  printPDF(): void {
    let printContents, popupWin;
    printContents = document.getElementById('print-section').innerHTML;
    popupWin = window.open('', '_blank', 'top=0,left=0,height=100%,width=auto');
    popupWin.document.open();
    popupWin.document.write(`
      <html>
        <head>
        <link href="https://fonts.googleapis.com/css?family=Gentium+Basic" rel="stylesheet">
          <title>Notizenliste als PDF</title>
          <style>

          #noteslist p {white-space: pre-wrap; margin-left: 1em;font-size: 1rem;}
          #noteslist .card-blockquote {display:none;}
          #noteslist {
            list-style-type: none; 
          }
          body {
            font-family: Gentium Basic;
            margin: 4em 3em;
          }
          body h1 {
            text-align: center;
          }
          #noteslist .card-header {font-size: 1.4rem;}
          #noteslist:before {content: "";position: absolute;width: 100%;
            height: 100%;left: 0;top: 0;z-index: -1;
            background: url("https://www.office-discount.de/wcsstore/productimages/OD/01_Einzelbild_Internet/1/Exportformat_Zoom/294058.jpg") 0 0/cover;}
          </style>
        </head>
    <body onload="window.print();window.close()"><h1>Notizenzettel</h1>${printContents}</body>
      </html>`
    );
    popupWin.document.close();
  }
}
