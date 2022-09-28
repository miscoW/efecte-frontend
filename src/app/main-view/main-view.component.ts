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
  removeAlert: boolean = false;
  noteToRemove: NoteDto | null = null;

  constructor(notesRestControllerService : NotesRestControllerService) {
    this.notesRestControllerService = notesRestControllerService;
   }

  ngOnInit(): void {
    this.loadNotes();
  }

  loadNotes(): void {
    this.notesRestControllerService.getAllNotes().subscribe(response => {
      this.notesList = response;
    }
    )
  }

  deleteNoteButton(note: NoteDto): void {
    this.removeAlert = true;
    this.noteToRemove = note;
  }

  closeRemoveAlert(): void {
    this.removeAlert = false;
    this.noteToRemove = null;
  }

  deleteNote(): void {
    if(this.noteToRemove != null) {
        this.notesRestControllerService.removeNote(this.noteToRemove).subscribe(response => {
          this.loadNotes();
          this.noteToRemove = null;
          this.removeAlert = false;
        }
      )
    }
  }
    
}
