import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { NoteContent, NotesRestControllerService } from 'src/generated';

@Component({
  selector: 'app-create-note-view',
  templateUrl: './create-note-view.component.html',
  styleUrls: ['./create-note-view.component.css']
})
export class CreateNoteViewComponent implements OnInit {
    
  noteForm = this.formBuilder.group({
    content: ""
  });
  constructor(private formBuilder: FormBuilder,
    private notesRestControllerService : NotesRestControllerService,
    private router: Router) { }

  ngOnInit(): void {
  }

  saveNote(): void {
    var text = this.noteForm.value.content;
    if(text == undefined || text == null) {
      text = ""
    }
    var note : NoteContent = {
      content : text
    } 
    this.notesRestControllerService.saveNote(note).subscribe(note => {
      console.log(note);  // todo add popup with info about success
      this.router.navigate(['']);
    })
    console.log(this.noteForm);
  }

}
