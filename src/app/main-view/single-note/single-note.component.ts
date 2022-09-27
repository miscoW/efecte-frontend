import { Component, Input, OnInit } from '@angular/core';
import { NoteDto } from 'src/generated';

@Component({
  selector: 'app-single-note',
  templateUrl: './single-note.component.html',
  styleUrls: ['./single-note.component.css']
})
export class SingleNoteComponent implements OnInit {

  @Input() note !: NoteDto;

  constructor() { }

  ngOnInit(): void {
  }

}
