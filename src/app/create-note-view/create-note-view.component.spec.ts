import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateNoteViewComponent } from './create-note-view.component';

describe('CreateNoteViewComponent', () => {
  let component: CreateNoteViewComponent;
  let fixture: ComponentFixture<CreateNoteViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateNoteViewComponent ]
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
