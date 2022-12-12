import { Component, OnInit } from '@angular/core';
import {AuthorsServiceService} from '../authors-service.service';
import {Author} from '../utils';
import {ActivatedRoute, Router} from '@angular/router';
import {
  SiteAdministratorGuard
} from '../../core/data/feature-authorization/feature-authorization-guard/site-administrator.guard';

@Component({
  selector: 'ds-authors-detail',
  templateUrl: './authors-detail.component.html',
  styleUrls: ['./authors-detail.component.scss']
})
export class AuthorsDetailComponent implements OnInit {
  isAdmin;
  url = '';
  author: Author = {
    id: '',
    photo: Buffer.from(''),
    photoType: '',
    about: '',
    name: '',
  };
  constructor(
    private a: AuthorsServiceService,
    private route: ActivatedRoute,
    private guard: SiteAdministratorGuard,
    private routes: Router,
  ) { }
  ngOnInit(): void {
    const id = (this.route.snapshot.paramMap.get('id'));
    this.a.getById(id).subscribe((x) => {
      this.author = x;
      this.url = this.author.photoType.concat(',', this.author.photo.toString());
    });
    this.isAdmin = this.guard.canActivate(this.routes.routerState.snapshot.root, this.routes.routerState.snapshot);
  }
}
