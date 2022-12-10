import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AuthorsPath} from "./authors/utils";
import {AuthorsDetailComponent} from "./authors/authors-detail/authors-detail.component";
import {AuthorsPageComponent} from "./authors/authors-page/authors-page.component";

const routes: Routes = [
  {
    path: AuthorsPath.concat('/id/:id'),
    component: AuthorsDetailComponent
  },
  {
    path: AuthorsPath,
    component: AuthorsPageComponent
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AuthorsRoutingModule { }
