import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AuthorsRoute} from './authors/utils';
import {AuthorsDetailComponent} from './authors/authors-detail/authors-detail.component';
import {AuthorsPageComponent} from './authors/authors-page/authors-page.component';

const routes: Routes = [
  {
    path: ('id/:id'),
    component: AuthorsDetailComponent
  },
  {
    path: 'all',
    component: AuthorsPageComponent
  },
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ]
})
export class AuthorsRoutingModule { }
