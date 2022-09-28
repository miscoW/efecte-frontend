import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NoteContent, NotesRestControllerService } from 'src/generated';

@Component({
  selector: 'app-create-note-view',
  templateUrl: './create-note-view.component.html',
  styleUrls: ['./create-note-view.component.css']
})
export class CreateNoteViewComponent implements OnInit {
    
  text: string = "";
  noteForm = this.formBuilder.group({
    content: new FormControl(this.text, [Validators.required])
  });

  successAlert : boolean = false;
  failureAlert: boolean = false;
  failureText : string = "";
  closeAlert: boolean = false;
  
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
      this.successAlert = true;
    },
    error => {
      this.failureAlert = true;
      this.failureText = error.message;
    });
    
  }

  reset(): void {
    this.successAlert = false;
    this.noteForm.setValue({
      content : ""
    });
  }

  openCloseAlert(): void {
    this.closeAlert = true;
  }

  closeCloseAlert(): void {
    this.closeAlert = false;
  }
}
