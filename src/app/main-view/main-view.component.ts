import { Component, OnInit } from '@angular/core';
import { NoteDto, NotesRestControllerService } from 'src/generated';

@Component({
  selector: 'app-main-view',
  templateUrl: './main-view.component.html',
  styleUrls: ['./main-view.component.css']
})
export class MainViewComponent implements OnInit {

  notesRestControllerService: NotesRestControllerService;
  notesList: NoteDto[] = [];

  constructor(notesRestControllerService : NotesRestControllerService) {
    this.notesRestControllerService = notesRestControllerService;
   }

  ngOnInit(): void {
    this.notesRestControllerService.getAllNotes().subscribe(response => {
      this.notesList = response;
    }
    )
  }

}
