import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AuthorFormComponent} from './author-form/author-form.component';
import {AuthorCardComponent} from './author-card/author-card.component';
import {SafePipe} from './pipes/safe.pipe';
import {AuthorsPageComponent} from './authors-page/authors-page.component';
import {AuthorsDetailComponent} from './authors-detail/authors-detail.component';
import {AuthorsRoutingModule} from '../authors-routing.module';
import { AuthorCreateComponent } from './author-create/author-create.component';
import { AuthorEditComponent } from './author-edit/author-edit.component';
import {SharedModule} from "../shared/shared.module";

const COMPONETS = [
  AuthorFormComponent,
  AuthorsPageComponent,
  AuthorCardComponent,
  AuthorCreateComponent,
  AuthorEditComponent,
];


@NgModule({
  declarations: [
    ...COMPONETS,
    SafePipe,
  ],
  exports: [
    SafePipe,
    ...COMPONETS
  ],
    imports: [
        CommonModule,
        AuthorsRoutingModule,
    ]
})
export class AuthorsModule {
}
