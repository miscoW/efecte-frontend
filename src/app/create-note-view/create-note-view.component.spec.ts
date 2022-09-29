import { HttpClient, HttpHandler } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormBuilder } from '@angular/forms';
import { NotesRestControllerService } from 'src/generated';

import { CreateNoteViewComponent } from './create-note-view.component';

describe('CreateNoteViewComponent', () => {
  let component: CreateNoteViewComponent;
  let fixture: ComponentFixture<CreateNoteViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateNoteViewComponent ],
      providers: [
        FormBuilder,
        NotesRestControllerService,
        HttpClient,
        HttpHandler
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateNoteViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
