import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthorFormComponent } from './author-form/author-form.component';
import {AuthorCardComponent} from './author-card/author-card.component';
import {SafePipe} from './pipes/safe.pipe';
import { AuthorsPageComponent } from './authors-page/authors-page.component';
import { AuthorsDetailComponent } from './authors-detail/authors-detail.component';



@NgModule({
  declarations: [
    AuthorCardComponent,
    SafePipe,
    AuthorFormComponent,
    AuthorsPageComponent,
    AuthorsDetailComponent
  ],
  imports: [
    CommonModule
  ]
})
export class AuthorsModule { }
