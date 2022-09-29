import { HttpClient, HttpHandler } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { FormBuilder } from '@angular/forms';
import { NotesRestControllerService } from 'src/generated';

import { NoteResolver } from './note-resolver.resolver';

describe('NoteResolverResolver', () => {
  let resolver: NoteResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        FormBuilder,
        NotesRestControllerService,
        HttpClient,
        HttpHandler,
      ],
    });
    resolver = TestBed.inject(NoteResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
