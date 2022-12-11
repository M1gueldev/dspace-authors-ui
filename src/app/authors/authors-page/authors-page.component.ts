import { Component, OnInit } from '@angular/core';
import {AuthorsServiceService} from '../authors-service.service';
import {
  SiteAdministratorGuard
} from "../../core/data/feature-authorization/feature-authorization-guard/site-administrator.guard";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'ds-authors-page',
  templateUrl: './authors-page.component.html',
  styleUrls: ['./authors-page.component.scss']
})
export class AuthorsPageComponent implements OnInit {

  isAdmin;
  authors = [];
  constructor(
    private a: AuthorsServiceService,
    private guard: SiteAdministratorGuard,
    private route: Router,
  ) { }

  ngOnInit(): void {
    this.a.getAll().subscribe((x) => {
        this.authors = x;
      }
    );
    this.isAdmin = this.guard.canActivate(this.route.routerState.snapshot.root, this.route.routerState.snapshot);
  }
}
