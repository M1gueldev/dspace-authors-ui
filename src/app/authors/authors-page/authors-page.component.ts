import { Component, OnInit } from '@angular/core';
import {AuthorsServiceService} from "../authors-service.service";

@Component({
  selector: 'ds-authors-page',
  templateUrl: './authors-page.component.html',
  styleUrls: ['./authors-page.component.scss']
})
export class AuthorsPageComponent implements OnInit {

  authors = []
  constructor(private a: AuthorsServiceService) { }

  ngOnInit(): void {
    this.a.getAll().subscribe((x) => {
        this.authors = x;
      }
    );
  }

}
