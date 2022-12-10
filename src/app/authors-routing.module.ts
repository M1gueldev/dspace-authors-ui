import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AuthorsRoute} from './authors/utils';
import {AuthorsDetailComponent} from './authors/authors-detail/authors-detail.component';
import {AuthorsPageComponent} from './authors/authors-page/authors-page.component';

const routes: Routes = [
  {
    path: AuthorsRoute.concat('/id/:id'),
    component: AuthorsDetailComponent
  },
  {
    path: AuthorsRoute,
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
