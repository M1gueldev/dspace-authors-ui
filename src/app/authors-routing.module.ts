import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AuthorsDetailComponent} from './authors/authors-detail/authors-detail.component';
import {AuthorsPageComponent} from './authors/authors-page/authors-page.component';
import {AuthorCreateComponent} from "./authors/author-create/author-create.component";
import {AuthorEditComponent} from "./authors/author-edit/author-edit.component";

const routes: Routes = [
  {
    path: ('id/:id'),
    component: AuthorsDetailComponent
  },
  {
    path: 'all',
    component: AuthorsPageComponent
  },
  {
    path: 'new',
    component: AuthorCreateComponent
  },
  {
    path: 'edit/:id',
    component: AuthorEditComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ]
})
export class AuthorsRoutingModule { }
