import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl } from '@angular/forms';
import { NoteDto, NotesRestControllerService } from 'src/generated';

@Component({
  selector: 'app-main-view',
  templateUrl: './main-view.component.html',
  styleUrls: ['./main-view.component.css']
})
export class MainViewComponent implements OnInit {
  notesList: NoteDto[] = [];
  removeAlert: boolean = false;
  noteToRemove: NoteDto | null = null;
  searchForm = this.formBuilder.group({
    searchText: ""
  });

  constructor(private notesRestControllerService : NotesRestControllerService,
    private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.searchForm.setValue({
      searchText: ""
    });
    this.loadNotes();
  }

  loadNotes(): void {
    var searchText: string = "";
    if(this.searchForm.value.searchText != null) {
      searchText = this.searchForm.value.searchText
    }
    this.notesRestControllerService.searchNotes(searchText).subscribe(response => {
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
    
  searchNotes(): void {
    this.loadNotes();
  }

  resetFilter(): void {
    this.searchForm.setValue({
      searchText: ""
    });
    this.loadNotes();
  }
}
