import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NoteContent, NoteDto, NotesRestControllerService } from 'src/generated';

@Component({
  selector: 'app-edit-view',
  templateUrl: './edit-view.component.html',
  styleUrls: ['./edit-view.component.css']
})
export class EditViewComponent implements OnInit {
  
  text: string = "";
  noteForm = this.formBuilder.group({
    content: new FormControl(this.text, [Validators.required])
  });

  successAlert : boolean = false;
  failureAlert: boolean = false;
  failureText : string = "";
  closeAlert: boolean = false;
  note!: NoteDto;
  textLength : number | undefined;



  constructor(private formBuilder: FormBuilder,
    private notesRestControllerService : NotesRestControllerService,
    private activatedRoute: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.note = this.activatedRoute.snapshot.data['note']
    if(this.note.content != undefined) {
      var text : string | null = this.note.content
      this.noteForm.setValue({content : text});
    }
    this.textLength = this.note.content?.length;
    this.noteForm.valueChanges.subscribe(data => {
      this.textLength = data.content?.length
    });
  }

  saveNote(): void {
    var text = this.noteForm.value.content;
    if(text == undefined || text == null) {
      text = ""
    }
    this.note.content = text;
    this.notesRestControllerService.editNote(this.note).subscribe(note => {
      this.successAlert = true;
      this.note = note;
      if(this.note.content != undefined) {
        var text : string | null = this.note.content
        this.noteForm.setValue({content : text});
      }
    },
    error => {
      this.failureAlert = true;
      this.failureText = error.message;
    });
    
  }

  editMore(): void {
    this.successAlert = false;
  }

  openCloseAlert(): void {
    this.closeAlert = true;
  }

  closeCloseAlert(): void {
    this.closeAlert = false;
  }

  canSave(): boolean {
    var isAlertOpen: boolean = this.successAlert || this.failureAlert;
    var isNoteValidAndChanged: boolean = this.noteForm.value.content !== this.note.content && this.noteForm.valid;
    var isSaveLegal: boolean = (!isAlertOpen && isNoteValidAndChanged);
    return isSaveLegal;
  }
}
