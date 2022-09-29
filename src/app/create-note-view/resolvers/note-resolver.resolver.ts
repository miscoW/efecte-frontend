import { Injectable } from '@angular/core';
import {
  Router,
  Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot,
} from '@angular/router';
import { catchError, EMPTY, Observable, of } from 'rxjs';
import { NoteDto, NotesRestControllerService } from 'src/generated';

@Injectable({
  providedIn: 'root',
})
export class NoteResolver implements Resolve<NoteDto> {
  constructor(
    private noteService: NotesRestControllerService,
    private router: Router
  ) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<NoteDto> {
    var idFromPath = route.paramMap.get('id');
    if (idFromPath == null || idFromPath == undefined || isNaN(+idFromPath)) {
      this.router.navigate(['/error404']);
    }
    var id: number = Number(idFromPath);

    return this.noteService.getNoteById(id).pipe(
      catchError((error) => {
        this.router.navigate(['error404']);
        return EMPTY;
      })
    );
  }
}
