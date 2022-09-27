import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainViewComponent } from './main-view/main-view.component';
import { HeaderComponent } from './header/header.component';
import { ApiModule, NotesRestControllerService } from 'src/generated';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { SingleNoteComponent } from './main-view/single-note/single-note.component';
import { CreateNoteViewComponent } from './create-note-view/create-note-view.component';
import { RouterModule } from '@angular/router';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    MainViewComponent,
    HeaderComponent,
    SingleNoteComponent,
    CreateNoteViewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ApiModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path: '', component: MainViewComponent },
      { path: 'create', component: CreateNoteViewComponent },
    ]),
    ReactiveFormsModule
  ],
  providers: [FormBuilder],
  bootstrap: [AppComponent]
})
export class AppModule { }
